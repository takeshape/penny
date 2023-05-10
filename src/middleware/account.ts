import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const relevantPath = pathname.split('/account/')[1];
  const [action, customerId, token] = relevantPath.split('/');
  const params = new URLSearchParams({ customerId, token });
  return NextResponse.redirect(new URL(`/auth/${action}?${params.toString()}`, request.url));
}

export function predicate(request: NextRequest) {
  return request.nextUrl.pathname.startsWith('/account');
}
