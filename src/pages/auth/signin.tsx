import { AuthSignIn } from 'features/Auth/AuthSignIn/AuthSignIn';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Sign In">
      <AuthSignIn
        signIn={signIn}
        callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'}
        error={query.error ? getSingle(query.error) : ''}
      />
    </Layout>
  );
};

export default SignUpPage;
