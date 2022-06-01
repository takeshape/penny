import AuthSignIn from 'features/Auth/SignIn/SignIn';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Sign In">
      <AuthSignIn
        callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'}
        error={query.error ? getSingle(query.error) : ''}
      />
    </Layout>
  );
};

export default SignUpPage;
