import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle uploaded images with proper headers
  if (pathname.startsWith('/uploads/')) {
    const response = NextResponse.next();
    
    // Set proper headers for uploaded images
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('Content-Type', 'image/jpeg');
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/uploads/:path*',
  ],
};
