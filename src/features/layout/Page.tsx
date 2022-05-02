import CartSidebar from 'features/cart/CartSidebar';
import MobileMenu from 'features/NavigationMobileMenu';
import Notifications from 'features/Notifications';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';
import MobileMenuProvider from 'services/navigation/NavigationProvider';
import { Container, Divider, Flex } from 'theme-ui';
import Footer from './Footer';
import Header from './Header';

export const Page = ({ children, seo }: PropsWithChildren<{ seo?: NextSeoProps }>) => {
  return (
    <MobileMenuProvider>
      <CartProvider>
        <Flex variant="layout.page">
          <div className="bg-white">
            <Seo {...seo} />

            <MobileMenu />
            <Header />

            <Divider />
            <Container as="main" variant="layout.main">
              {children}
            </Container>

            <CartSidebar />
            <Notifications />

            <Footer />
          </div>
        </Flex>
      </CartProvider>
    </MobileMenuProvider>
  );
};

export default Page;
