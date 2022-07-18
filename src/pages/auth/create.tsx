import { shopifyMultipassSecret } from 'config';
import { AuthCreateAccount } from 'features/Auth/AuthCreateAccount/AuthCreateAccount';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout seo={{ title: 'Register' }}>
      <AuthCreateAccount
        signIn={signIn}
        callbackUrl={query.callbackUrl ? getSingle(query.callbackUrl) : '/'}
        useMultipass={Boolean(shopifyMultipassSecret)}
      />
    </Layout>
  );
};

export default SignUpPage;
