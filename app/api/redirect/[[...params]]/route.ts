import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ params?: string[] }> }
) {
  const { params: pathArray } = await params;

  if (!pathArray || pathArray.length === 0) {
    return NextResponse.json({ error: 'No redirect path' }, { status: 400 });
  }

  const pathString = pathArray.join('/');
  const redirectUrl = `obs://${pathString}`;

  return NextResponse.redirect(redirectUrl, { status: 302 });
}
