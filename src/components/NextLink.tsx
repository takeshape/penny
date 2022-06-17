import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

const NextLink = ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (!href || href === '#') {
    // Don't try to create bad NextLinks
    return <a {...props}>{children}</a>;
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NextLink;
