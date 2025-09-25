import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken');
    const protectedRoutes = ['/user', '/admin']; // Định nghĩa các route cần bảo vệ

    if (protectedRoutes.includes(request.nextUrl.pathname) && !token) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}