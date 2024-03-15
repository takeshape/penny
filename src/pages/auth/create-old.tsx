import { shopifyUseMultipass } from '@/config';
import { AuthCreateAccount } from '@/features/Auth/AuthCreateAccount/AuthCreateAccount';
import Layout from '@/layouts/Full';
import { getSingle } from '@/utils/types';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout seo={{ title: 'Register' }}>
      <AuthCreateAccount
        signIn={signIn}
        callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/'}
        notice={query.notice ? getSingle(query.notice) : ''}
        email={query.email ? getSingle(query.email) : ''}
        useMultipass={shopifyUseMultipass}
      />
    </Layout>
  );
};

export default SignUpPage;
