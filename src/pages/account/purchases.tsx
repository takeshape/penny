import { useQuery } from '@apollo/client';
import AccountPastPurchases from 'features/Account/Purchases/PurchaseList';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import type { GetMyAdminCustomerOrdersResponse } from 'queries';
import { GetMyAdminCustomerOrdersQuery } from 'queries';

const AccountPurchasesPage: NextPage = () => {
  useSession({ required: true });

  const { data } = useQuery<GetMyAdminCustomerOrdersResponse>(GetMyAdminCustomerOrdersQuery);

  if (!data) {
    return null;
  }

  const orders = data?.customer.orders.edges.map(({ node }) => node);

  return (
    <Layout title="Purchases">
      <AccountPastPurchases orders={orders} />
    </Layout>
  );
};

export default AccountPurchasesPage;
