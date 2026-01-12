import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import pool from '@/lib/db';

const ADMIN_CREDENTIALS = {
  email: 'admin@corenet.co.in',
  passwordHash: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' // admin123
};

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (email !== ADMIN_CREDENTIALS.email) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await compare(password, ADMIN_CREDENTIALS.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = sign({ email }, process.env.NEXTAUTH_SECRET || 'fallback-secret', {
      expiresIn: '24h'
    });

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
