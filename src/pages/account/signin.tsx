import AccountSignIn from 'features/Account/SignIn/SignIn';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Sign In">
      <AccountSignIn
        callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'}
        error={query.error ? getSingle(query.error) : ''}
        isNewAccount={Boolean(query.newAccount)}
      />
    </Layout>
  );
};

export default SignUpPage;
