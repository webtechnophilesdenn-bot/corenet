const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://corenet_user:Postgres@123@localhost:5432/corenet'
});

async function fixDatabase() {
  const client = await pool.connect();
  
  try {
    console.log('Starting database fix...');
    
    await client.query('BEGIN');
    
    // Check current columns
    const checkResult = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'case_studies' 
      ORDER BY ordinal_position;
    `);
    
    console.log('Current columns in case_studies table:');
    checkResult.rows.forEach(row => {
      console.log(`  - ${row.column_name} (${row.data_type})`);
    });
    
    // List of columns that should exist
    const requiredColumns = [
      { name: 'project_duration', type: 'VARCHAR(50)', nullable: true },
      { name: 'key_metrics', type: 'JSONB', nullable: true },
      { name: 'testimonial', type: 'TEXT', nullable: true },
      { name: 'testimonial_author', type: 'VARCHAR(255)', nullable: true }
    ];
    
    const existingColumns = checkResult.rows.map(row => row.column_name);
    
    // Add missing columns
    for (const column of requiredColumns) {
      if (!existingColumns.includes(column.name)) {
        console.log(`Adding missing column: ${column.name} (${column.type})`);
        
        await client.query(`
          ALTER TABLE case_studies 
          ADD COLUMN ${column.name} ${column.type};
        `);
        
        console.log(`✅ Added column: ${column.name}`);
      } else {
        console.log(`✓ Column already exists: ${column.name}`);
      }
    }
    
    await client.query('COMMIT');
    console.log('\n✅ Database fix completed successfully!');
    
    // Show final table structure
    const finalResult = await client.query(`
      SELECT column_name, data_type, is_nullable 
      FROM information_schema.columns 
      WHERE table_name = 'case_studies' 
      ORDER BY ordinal_position;
    `);
    
    console.log('\nFinal table structure:');
    console.log('=====================');
    finalResult.rows.forEach(row => {
      console.log(`  ${row.column_name.padEnd(20)} ${row.data_type.padEnd(20)} ${row.is_nullable === 'YES' ? 'NULL' : 'NOT NULL'}`);
    });
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('\n❌ Database fix failed:', error.message);
    console.error('Error details:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

// Run the fix
fixDatabase();