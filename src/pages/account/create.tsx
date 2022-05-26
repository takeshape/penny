import AccountCreate from 'features/Account/Create/Create';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout title="Register">
      <AccountCreate callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'} />
    </Layout>
  );
};

export default SignUpPage;
