import { NextRequest, NextResponse } from 'next/server';

function getCustomerId(relevantPath: string) {}

function getToken(relevantPath: string) {}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  console.log('middleware', pathname, searchParams);
  const relevantPath = pathname.split('/account/')[1];
  const [action, customerId, token] = relevantPath.split('/');
  const params = new URLSearchParams({ action, customerId, token });
  return NextResponse.redirect(new URL(`/auth/password?${params.toString()}`, request.url));
  // const { pathname, searchParams } = request.nextUrl;
  // const discount = getDiscount(pathname);
  // const redirect = getRedirect(searchParams);
  // return NextResponse.redirect(new URL(`/${redirect}?${discount.toString()}`, request.url));
}

export const config = {
  matcher: '/account/:path*'
};
