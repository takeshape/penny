import { AuthCreateAccount } from 'features/Auth/CreateAccount/CreateAccount';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Register">
      <AuthCreateAccount signIn={signIn} callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'} />
    </Layout>
  );
};

export default SignUpPage;
