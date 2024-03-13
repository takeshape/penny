import { shopifyUseMultipass } from '@/config';
import { AuthSignIn } from '@/features/Auth/AuthSignIn/AuthSignIn';
import Layout from '@/layouts/Full';
import { parseSigninError } from '@/utils/errors';
import { getSingle } from '@/utils/types';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const SignUpPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout seo={{ title: 'Sign In' }}>
      <AuthSignIn
        signIn={signIn}
        callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/'}
        error={parseSigninError(query.error)}
        email={query.email ? getSingle(query.email) : ''}
        useMultipass={shopifyUseMultipass}
      />
    </Layout>
  );
};

export default SignUpPage;
