import AccountCreate from 'features/Account/Create/Create';
import Layout from 'layouts/Full';
import type { NextPage } from 'next';

const SignUpPage: NextPage = () => {
  return (
    <Layout title="Register">
      <AccountCreate />
    </Layout>
  );
};

export default SignUpPage;
