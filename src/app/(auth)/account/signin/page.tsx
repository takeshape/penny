import { shopifyUseMultipass } from '@/config';
import { AuthSignIn } from '@/features/Auth/AuthSignIn/AuthSignIn';
import { parseSigninError } from '@/lib/auth/errors';
import { getSingle } from '@/lib/util/types';
import { ServerProps } from '@/types/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function AccountSignInPage({ searchParams }: ServerProps) {
  return (
    <AuthSignIn
      callbackUrl={(searchParams.callbackUrl && getSingle(searchParams.callbackUrl)) ?? '/'}
      error={parseSigninError(searchParams)}
      email={searchParams.email ? getSingle(searchParams.email) : ''}
      useMultipass={shopifyUseMultipass}
    />
  );
}
