import { AccountSubscriptions } from '@/features/AccountSubscriptions/AccountSubscriptions';
import Layout from '@/layouts/Account';
import { NextPage } from 'next';

const AccountSubscriptionsPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions />
    </Layout>
  );
};

export default AccountSubscriptionsPage;
