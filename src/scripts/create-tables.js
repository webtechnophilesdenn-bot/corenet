const { Pool } = require('pg');

// Use DATABASE_URL if provided, otherwise fall back to a safe default
const connectionString = process.env.DATABASE_URL || 'postgresql://corenet_user:Postgres%40123@localhost:5432/corenet';

const pool = new Pool({ connectionString });

async function createTables() {
  const client = await pool.connect();
  try {
    console.log('Connecting to database...');

    await client.query('BEGIN');

    // Create blogs table
    await client.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        content TEXT NOT NULL,
        excerpt TEXT,
        author VARCHAR(255) NOT NULL,
        tags JSONB DEFAULT '[]'::jsonb,
        featured_image TEXT,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // Create case_studies table
    await client.query(`
      CREATE TABLE IF NOT EXISTS case_studies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        client_name VARCHAR(255) NOT NULL,
        industry VARCHAR(255) NOT NULL,
        challenge TEXT NOT NULL,
        solution TEXT NOT NULL,
        results TEXT NOT NULL,
        technologies JSONB DEFAULT '[]'::jsonb,
        featured_image TEXT,
        project_duration VARCHAR(50),
        key_metrics JSONB,
        testimonial TEXT,
        testimonial_author VARCHAR(255),
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // Indexes
    await client.query("CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published);");
    await client.query("CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);");
    await client.query("CREATE INDEX IF NOT EXISTS idx_case_studies_published ON case_studies(published);");
    await client.query("CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);");

    await client.query('COMMIT');
    console.log('✅ Tables ensured: blogs, case_studies');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Failed to create tables:', err.message || err);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

if (require.main === module) {
  createTables().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { createTables };
