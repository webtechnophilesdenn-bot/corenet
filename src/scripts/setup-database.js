// scripts/setup-database.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function setupDatabase() {
  try {
    console.log('Creating database tables...');

    // Create blogs table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        excerpt TEXT,
        author VARCHAR(100),
        tags TEXT[] DEFAULT '{}',
        featured_image TEXT,
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Blogs table created');

    // Create case_studies table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS case_studies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        client_name VARCHAR(255) NOT NULL,
        industry VARCHAR(100) NOT NULL,
        challenge TEXT NOT NULL,
        solution TEXT NOT NULL,
        results TEXT NOT NULL,
        technologies TEXT[] DEFAULT '{}',
        featured_image TEXT,
        project_duration VARCHAR(50),
        testimonial TEXT,
        testimonial_author VARCHAR(255),
        published BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Case studies table created');

    console.log('\n✅ Database setup completed successfully!');
    
  } catch (error) {
    console.error('❌ Error setting up database:', error);
    console.error('\nMake sure your DATABASE_URL is correct in .env.local');
  } finally {
    await pool.end();
  }
}

setupDatabase();