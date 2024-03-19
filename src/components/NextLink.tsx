import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export const NextLink = ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (!href || href === '#') {
    // Don't try to create bad NextLinks
    return <span {...props}>{children}</span>;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NextLink;
