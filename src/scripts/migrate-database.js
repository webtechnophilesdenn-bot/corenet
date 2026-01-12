const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://corenet_user:Postgres@123@localhost:5432/corenet'
});

async function migrateDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('Starting database migration...');
    
    await client.query('BEGIN');
    
    // Check if columns exist
    const checkColumns = await client.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'case_studies'
    `);
    
    const existingColumns = checkColumns.rows.map(row => row.column_name);
    console.log('Existing columns:', existingColumns);
    
    // Add missing columns
    const columnsToAdd = [
      { name: 'project_duration', type: 'VARCHAR(50)' },
      { name: 'key_metrics', type: 'JSONB' },
      { name: 'testimonial', type: 'TEXT' },
      { name: 'testimonial_author', type: 'VARCHAR(255)' }
    ];
    
    for (const column of columnsToAdd) {
      if (!existingColumns.includes(column.name)) {
        console.log(`Adding column: ${column.name}`);
        await client.query(`
          ALTER TABLE case_studies 
          ADD COLUMN ${column.name} ${column.type}
        `);
      } else {
        console.log(`Column ${column.name} already exists`);
      }
    }
    
    await client.query('COMMIT');
    console.log('✅ Migration completed successfully!');
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Migration failed:', error.message);
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

migrateDatabase().catch(console.error);