// src/app/api/blogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      'SELECT * FROM blogs WHERE id = $1',
      [params.id]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch blog'
    }, { status: 500 });
  }
}

// PUT update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { title, slug, content, excerpt, author, tags, featured_image, published } = body;
    
    const query = `
      UPDATE blogs 
      SET title = $1, slug = $2, content = $3, excerpt = $4, 
          author = $5, tags = $6, featured_image = $7, published = $8, 
          updated_at = NOW()
      WHERE id = $9
      RETURNING *
    `;
    
    const values = [title, slug, content, excerpt, author, tags, featured_image, published, params.id];
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data: result.rows[0]
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to update blog'
    }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = await pool.query(
      'DELETE FROM blogs WHERE id = $1 RETURNING id',
      [params.id]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully'
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to delete blog'
    }, { status: 500 });
  }
}
