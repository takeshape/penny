import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';

export const Layout = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  return (
    <div className="h-full bg-gray-50">
      <div className="h-full">
        <Seo {...seo} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
