import CartSidebar from 'features/cart/CartSidebar';
import NavigationNew from 'features/NavigationNew';
import Notifications from 'features/Notifications';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';
import { Container, Divider } from 'theme-ui';
import Footer from './Footer';

export const Page = ({ children, seo }: PropsWithChildren<{ seo?: NextSeoProps }>) => {
  return (
    <CartProvider>
      {/* Full-width on mobile, constrained with padded content above */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <Seo {...seo} />

        <NavigationNew />

        <Divider />
        <Container as="main" variant="layout.main">
          {children}
        </Container>

        <CartSidebar />
        <Notifications />

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Page;
