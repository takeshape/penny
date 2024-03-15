import { AuthRecoverPassword } from '@/features/Auth/AuthRecoverPassword/AuthRecoverPassword';
import { ServerProps } from '@/types/next';
import { getSingle } from '@/utils/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password Request'
};

/**
 * Request a password reset
 */
export default function AccountRecoverPage({ searchParams }: ServerProps) {
  return (
    <AuthRecoverPassword
      callbackUrl={(searchParams.callbackUrl && getSingle(searchParams.callbackUrl)) ?? '/account/signin'}
    />
  );
}
