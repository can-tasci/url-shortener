import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // URL parametresini al: ?path=forgot-password/cb6841c9-8b7b-430e-8eab-e115b69388ea
  const path = request.nextUrl.searchParams.get('path');

  if (!path) {
    return NextResponse.json({ error: 'No path provided' }, { status: 400 });
  }

  const redirectUrl = `obs://${path}`;

  return NextResponse.redirect(redirectUrl, { status: 302 });
}
