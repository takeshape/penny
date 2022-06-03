import AccountSubscriptions from 'features/Account/Subscriptions/Subscriptions';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';

const AccountPurchasesPage: NextPage = () => {
  return (
    <Layout title="Subscriptions">
      <AccountSubscriptions />
    </Layout>
  );
};

export default AccountPurchasesPage;
