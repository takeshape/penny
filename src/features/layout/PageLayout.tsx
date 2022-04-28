import CartSidebar from 'features/CartSidebar';
import Notifications from 'features/Notifications';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';
import { Container, Divider, Flex } from 'theme-ui';
import Footer from './Footer';
import Header from './Header';

export const PageLayout = ({ children, seo }: PropsWithChildren<{ seo?: NextSeoProps }>) => {
  return (
    <CartProvider>
      <Flex variant="layout.page">
        <Seo {...seo} />

        <Header />
        <Divider />
        <Container as="main" variant="layout.main">
          {children}
        </Container>

        <CartSidebar />
        <Notifications />

        <Footer />
      </Flex>
    </CartProvider>
  );
};

export default PageLayout;
