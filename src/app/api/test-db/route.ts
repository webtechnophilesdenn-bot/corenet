// src/app/api/db-test/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    // Test connection and list tables
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    return NextResponse.json({
      success: true,
      message: 'Database connected successfully',
      tables: result.rows.map(row => row.table_name),
      connection: 'Active'
    }, { status: 200 });
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      connection: 'Failed'
    }, { status: 500 });
  }
}