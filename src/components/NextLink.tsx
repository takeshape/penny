import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export const NextLink = ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
