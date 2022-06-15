import AuthSignOut from 'features/Auth/SignOut/SignOut';
import Layout from 'layouts/Full';
import { NextPage } from 'next';

const SignOutPage: NextPage = () => {
  return (
    <Layout title="Register">
      <AuthSignOut />
    </Layout>
  );
};

export default SignOutPage;
