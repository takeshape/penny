import AccountSignOut from 'features/Account/SignOut/SignOut';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';

const SignOutPage: NextPage = () => {
  return (
    <Layout title="Register">
      <AccountSignOut />
    </Layout>
  );
};

export default SignOutPage;
