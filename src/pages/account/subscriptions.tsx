import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPurchasesPage: NextPage = () => {
  return (
    <Layout title="Subscriptions">
      <AccountSubscriptions />
    </Layout>
  );
};

export default AccountPurchasesPage;
