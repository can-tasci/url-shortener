import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /r/ ile başlayan URL'leri yakala
  if (pathname.startsWith('/r/')) {
    // /r/ kısmını kaldır: /r/forgot-password/uuid → forgot-password/uuid
    const path = pathname.slice(3); // /r/ kısmını sil
    const redirectUrl = `obs://${path}`;

    // 302 redirect
    const response = NextResponse.redirect(redirectUrl, { status: 302 });
    return response;
  }
}

export const config = {
  matcher: ['/r/:path*'],
};
