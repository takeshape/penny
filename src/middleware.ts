import * as discount from 'middleware/discount';
import * as password from 'middleware/password';
import { NextRequest } from 'next/server';

const matcherRe = /\/:path.+/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(discount.config.matcher.replace(matcherRe, ''))) {
    return discount.middleware(request);
  }

  if (pathname.startsWith(password.config.matcher.replace(matcherRe, ''))) {
    return password.middleware(request);
  }
}

export const config = {
  matcher: [discount.config.matcher, password.config.matcher]
};
