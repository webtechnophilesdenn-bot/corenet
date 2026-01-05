// src/app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET all blogs
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
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blogs'
    }, { status: 500 });
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content, excerpt, author, tags, featured_image, published } = body;
    
    // Validation
    if (!title || !slug || !content || !author) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }
    
    const query = `
      INSERT INTO blogs (title, slug, content, excerpt, author, tags, featured_image, published)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *
    `;
    
    const values = [title, slug, content, excerpt, author, tags || [], featured_image, published || false];
    const result = await pool.query(query, values);
    
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating blog:', error);
    
    // Handle duplicate slug
    if (error.code === '23505') {
      return NextResponse.json({
        success: false,
        error: 'Slug already exists'
      }, { status: 409 });
    }
    
    return NextResponse.json({
      success: false,
      error: 'Failed to create blog'
    }, { status: 500 });
  }
}
