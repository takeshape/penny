import AccountFormPassword from 'features/Account/Form/Password';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';

const AccountPasswordPage: NextPage = () => {
  return (
    <Layout title="Password Reset">
      <AccountFormPassword />
    </Layout>
  );
};

export default AccountPasswordPage;
