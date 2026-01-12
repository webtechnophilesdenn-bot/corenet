import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET all case studies
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    
    let query = 'SELECT * FROM case_studies';
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
    console.error('Database error in GET:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch case studies',
      details: error.message
    }, { status: 500 });
  }
}

// POST new case study
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      title, slug, client_name, industry, challenge, 
      solution, results, technologies, featured_image, 
      project_duration, testimonial, testimonial_author, published 
    } = body;
    
    // Validate required fields
    if (!title || !slug || !client_name || !industry || !challenge || !solution || !results) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: title, slug, client_name, industry, challenge, solution, results'
      }, { status: 400 });
    }
    
    // Build query dynamically based on available columns
    const query = `
      INSERT INTO case_studies 
      (title, slug, client_name, industry, challenge, solution, results, 
       technologies, featured_image, project_duration, testimonial, 
       testimonial_author, published, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), NOW())
      RETURNING *
    `;
    
    const values = [
      title, 
      slug, 
      client_name, 
      industry, 
      challenge, 
      solution, 
      results, 
      technologies || [], 
      featured_image || null,
      project_duration || null, 
      testimonial || null, 
      testimonial_author || null,
      published || false
    ];
    
    console.log('Executing query with values:', values);
    
    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    }, { status: 201 });
    
  } catch (error: any) {
    console.error('Database error in POST:', error);
    
    if (error.code === '23505') { // Unique violation
      return NextResponse.json({
        success: false,
        error: 'Slug already exists'
      }, { status: 409 });
    }
    
    if (error.code === '42703') { // Undefined column
      return NextResponse.json({
        success: false,
        error: 'Database column missing. Please run database migration.',
        details: error.message
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to create case study',
      details: error.message
    }, { status: 500 });
  }
}