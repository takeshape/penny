import AuthSignOut from 'features/Auth/SignOut/SignOut';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { signOut } from 'next-auth/react';

const SignOutPage: NextPage = () => {
  return (
    <Layout title="Register">
      <AuthSignOut signOut={signOut} />
    </Layout>
  );
};

export default SignOutPage;
