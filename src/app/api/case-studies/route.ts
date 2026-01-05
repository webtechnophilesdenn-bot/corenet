// src/app/api/case-studies/route.ts
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
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch case studies'
    }, { status: 500 });
  }
}

// POST new case study
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      title, slug, client_name, industry, challenge, 
      solution, results, technologies, featured_image, published 
    } = body;
    
    if (!title || !slug || !client_name || !challenge || !solution || !results) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }
    
    const query = `
      INSERT INTO case_studies 
      (title, slug, client_name, industry, challenge, solution, results, technologies, featured_image, published)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;
    
    const values = [
      title, slug, client_name, industry, challenge, 
      solution, results, technologies || [], featured_image, published || false
    ];
    
    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    }, { status: 201 });
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json({
        success: false,
        error: 'Slug already exists'
      }, { status: 409 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to create case study'
    }, { status: 500 });
  }
}
