// src/app/api/case-studies/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

/* =========================
   GET single case study
========================= */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const result = await pool.query(
      'SELECT * FROM case_studies WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch case study' },
      { status: 500 }
    );
  }
}

/* =========================
   PUT update case study
========================= */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const body = await request.json();
    const {
      title,
      slug,
      client_name,
      industry,
      challenge,
      solution,
      results,
      technologies,
      featured_image,
      published,
    } = body;

    const query = `
      UPDATE case_studies
      SET title = $1,
          slug = $2,
          client_name = $3,
          industry = $4,
          challenge = $5,
          solution = $6,
          results = $7,
          technologies = $8,
          featured_image = $9,
          published = $10,
          updated_at = NOW()
      WHERE id = $11
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
      published ?? false,
      id,
    ];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update case study' },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE case study
========================= */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const result = await pool.query(
      'DELETE FROM case_studies WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Case study not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Case study deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete case study' },
      { status: 500 }
    );
  }
}
