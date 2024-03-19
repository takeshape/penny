import { AccountFormPassword } from '@/features/AccountForm/AccountFormPassword';
import Layout from '@/layouts/Account';
import { NextPage } from 'next';

const AccountPasswordPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Password' }}>
      <AccountFormPassword />
    </Layout>
  );
};

export default AccountPasswordPage;
