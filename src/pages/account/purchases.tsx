import { useQuery } from '@apollo/client';
import AccountPastPurchases from 'features/Account/Purchases/PurchaseList';
import Layout from 'layouts/Account';
import { NextPage } from 'next';
import { GetMyAdminCustomerOrdersQuery, GetMyAdminCustomerOrdersResponse } from 'queries';

const AccountPurchasesPage: NextPage = () => {
  const { data, loading } = useQuery<GetMyAdminCustomerOrdersResponse>(GetMyAdminCustomerOrdersQuery);

  const orders = data?.customer.orders.edges.map(({ node }) => node);

  return (
    <Layout title="Purchases">
      <AccountPastPurchases loading={loading} orders={orders} />
    </Layout>
  );
};

export default AccountPurchasesPage;
