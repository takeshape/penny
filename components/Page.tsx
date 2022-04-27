import Head from 'next/head';
import { Container, Divider, Flex } from 'theme-ui';
import CartSidebar from './CartSidebar';
import Notifications from './Notifications';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

export const Page = ({ children }) => {
  return (
    <Flex variant="layout.page">
      <Head>
        <title>TakeShape E-commerce Kitchen Sink Starter</title>
      </Head>

      <PageHeader />
      <Divider />
      <Container as="main" variant="layout.main">
        {children}
      </Container>

      <CartSidebar />
      <Notifications />

      <PageFooter />
    </Flex>
  );
};

export default Page;
