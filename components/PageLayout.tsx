import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import { Container, Divider, Flex } from 'theme-ui';
import CartSidebar from './CartSidebar';
import Footer from './Footer';
import Header from './Header';
import Notifications from './Notifications';
import Seo from './Seo';

export const PageLayout = ({ children, seo }: PropsWithChildren<{ seo?: NextSeoProps }>) => {
  return (
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
  );
};

export default PageLayout;
