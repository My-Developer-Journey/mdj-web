import { NextRequest, NextResponse } from 'next/server';

const protectedPatterns = [
  /^\/user(\/.*)?$/,   // /user hoặc bất kỳ route con nào
  /^\/admin(\/.*)?$/,  // /admin/**
  /^\/post\/create$/,
  /^\/post\/edit$/
];

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const token = request.cookies.get('accessToken');
    const isProtected = protectedPatterns.some((pattern) => pattern.test(pathname));

    if (isProtected && !token) {
        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}