import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const publicPaths = ['/login'];
    const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path));

    if (!token && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)',
    ],
};
