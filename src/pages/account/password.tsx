import { AccountFormPassword } from 'features/AccountForm/AccountFormPassword';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPasswordPage: NextPage = () => {
  return (
    <Layout title="Password Reset">
      <AccountFormPassword />
    </Layout>
  );
};

export default AccountPasswordPage;
