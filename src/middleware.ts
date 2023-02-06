import { NextRequest, NextResponse } from 'next/server';

function getRedirect(searchParams: URLSearchParams) {
  const redirect = searchParams.get('redirect');
  if (redirect) {
    return redirect
      .split('/')
      .filter((x) => x)
      .join('/');
  }
  return '';
}

function getDiscount(pathname: string) {
  return new URLSearchParams([['discount', pathname.split('/')[2]]]);
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const discount = getDiscount(pathname);
  const redirect = getRedirect(searchParams);
  return NextResponse.redirect(new URL(`/${redirect}?${discount.toString()}`, request.url));
}

export const config = {
  matcher: '/discount/:path*'
};
