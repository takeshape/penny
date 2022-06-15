import { useQuery } from '@apollo/client';
import AccountPastPurchases from 'features/Account/Purchases/PurchaseList';
import Layout from 'layouts/Account';
import { NextPage } from 'next';
import { GetMyAdminCustomerOrdersQuery, GetMyAdminCustomerOrdersResponse } from 'queries';
import { getCustomerOrders } from 'transforms/shopify';

const AccountPurchasesPage: NextPage = () => {
  const { data, loading } = useQuery<GetMyAdminCustomerOrdersResponse>(GetMyAdminCustomerOrdersQuery);

  const orders = getCustomerOrders(data?.customer);

  return (
    <Layout title="Purchases">
      <AccountPastPurchases loading={loading} orders={orders} />
    </Layout>
  );
};

export default AccountPurchasesPage;
