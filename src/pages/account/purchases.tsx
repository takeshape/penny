import { useQuery } from '@apollo/client';
import AccountPastPurchases from 'features/Account/Purchases/PurchaseList';
import Layout from 'layouts/Account';
import { NextPage } from 'next';
import { GetMyAdminCustomerOrdersQuery, GetMyAdminCustomerOrdersResponse } from 'queries';

const AccountPurchasesPage: NextPage = () => {
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
