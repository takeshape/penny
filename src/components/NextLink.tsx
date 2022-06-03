import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

const NextLink = ({ children, href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NextLink;
