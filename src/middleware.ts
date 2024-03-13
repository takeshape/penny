import * as discount from '@/middleware/discount';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (discount.predicate(request)) {
    return discount.middleware(request);
  }

  return NextResponse.next();
}

// Matcher must be a string-literal it seems
export const config = {
  matcher: ['/discount/:path*']
};
