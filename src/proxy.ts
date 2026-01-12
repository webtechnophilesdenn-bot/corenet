// src/proxy.ts - FIXED VERSION
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request) {
  const pathname = request.nextUrl.pathname;

  // PROTECT ALL /admin/* routes EXCEPT login
  if (pathname.startsWith('/admin') && !pathname.includes('/admin/login')) {
    const cookies = request.headers.get('cookie') || '';
    const hasAdminToken = cookies.includes('admin-token=');

    if (!hasAdminToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
