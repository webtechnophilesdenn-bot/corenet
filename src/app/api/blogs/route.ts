// src/app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    
    let query = 'SELECT * FROM blogs';
    if (published === 'true') {
      query += ' WHERE published = true';
    }
    query += ' ORDER BY created_at DESC';
    
    const result = await pool.query(query);
    
    return NextResponse.json({
      success: true,
      data: result.rows
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    
    // Handle missing table gracefully
    if (error.code === '42P01') {
      return NextResponse.json({
        success: false,
        error: 'Database tables not setup. Please run setup script.',
        data: [] // Return empty array instead of crashing
      }, { status: 200 }); // Return 200 with empty data
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blogs',
      data: []
    }, { status: 500 });
  }
}