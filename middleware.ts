import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting (for production use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // 100 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // per 60 seconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /r/ ile başlayan URL'leri yakala
  if (pathname.startsWith('/r/')) {
    // Rate limiting kontrol
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }

    // /r/ kısmını kaldır: /r/forgot-password/uuid → forgot-password/uuid
    const path = pathname.slice(3);
    
    // Path validation: sadece alphanumeric, dash, slash, UUID patterns
    if (!/^[a-zA-Z0-9\-\/]+$/.test(path)) {
      return NextResponse.json(
        { error: 'Invalid path format' },
        { status: 400 }
      );
    }

    const redirectUrl = `obs://${path}`;

    // 302 redirect
    const response = NextResponse.redirect(redirectUrl, { status: 302 });
    return response;
  }
}

export const config = {
  matcher: ['/r/:path*'],
};
