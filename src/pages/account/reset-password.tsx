import AccountRecoverPassword from 'features/Account/RecoverPassword/RecoverPassword';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Sign In">
      <AccountRecoverPassword callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/account/signin'} />
    </Layout>
  );
};

export default SignUpPage;
