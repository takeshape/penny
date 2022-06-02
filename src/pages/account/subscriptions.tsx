import AccountSubscriptions from 'features/Account/Subscriptions/Subscriptions';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const AccountPurchasesPage: NextPage = () => {
  useSession({ required: true });
  return (
    <Layout title="Subscriptions">
      <AccountSubscriptions />
    </Layout>
  );
};

export default AccountPurchasesPage;
