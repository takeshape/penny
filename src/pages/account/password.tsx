import AccountFormPassword from 'features/Account/Form/Password';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const AccountPasswordPage: NextPage = () => {
  useSession({ required: true });
  return (
    <Layout title="Password Reset">
      <AccountFormPassword />
    </Layout>
  );
};

export default AccountPasswordPage;
