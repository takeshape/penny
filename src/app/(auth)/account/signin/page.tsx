import { shopifyUseMultipass } from '@/config';
import { AuthSignIn } from '@/features/Auth/AuthSignIn/AuthSignIn';
import { ServerProps } from '@/types/next';
import { parseSigninError } from '@/utils/errors';
import { getSingle } from '@/utils/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function AccountSignInPage({ searchParams }: ServerProps) {
  return (
    <AuthSignIn
      callbackUrl={(searchParams.callbackUrl && getSingle(searchParams.callbackUrl)) ?? '/'}
      error={parseSigninError(searchParams.error)}
      email={searchParams.email ? getSingle(searchParams.email) : ''}
      useMultipass={shopifyUseMultipass}
    />
  );
}
