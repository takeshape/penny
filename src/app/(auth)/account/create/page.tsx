import { shopifyUseMultipass } from '@/config';
import { AuthCreateAccount } from '@/features/Auth/AuthCreateAccount/AuthCreateAccount';
import { ServerProps } from '@/types/next';
import { getSingle } from '@/utils/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account'
};

export default function AccountCreatePage({ searchParams }: ServerProps) {
  return (
    <AuthCreateAccount
      callbackUrl={(searchParams.callbackUrl && getSingle(searchParams.callbackUrl)) ?? '/'}
      notice={searchParams.notice ? getSingle(searchParams.notice) : ''}
      email={searchParams.email ? getSingle(searchParams.email) : ''}
      useMultipass={shopifyUseMultipass}
    />
  );
}
