import Head from 'next/head';
import { Container, Divider, Flex } from 'theme-ui';
import CartSidebar from './CartSidebar';
import Footer from './Footer';
import Header from './Header';
import Notifications from './Notifications';

export const Page = ({ children }) => {
  return (
    <Flex variant="layout.page">
      <Head>
        <title>TakeShape E-commerce Kitchen Sink Starter</title>
      </Head>

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

export default Page;
