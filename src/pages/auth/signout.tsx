import AuthSignOut from 'features/Auth/SignOut/SignOut';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';

const SignOutPage: NextPage = () => {
  return (
    <Layout title="Register">
      <AuthSignOut />
    </Layout>
  );
};

export default SignOutPage;
