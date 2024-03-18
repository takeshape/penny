import { AuthRecoverPassword } from '@/features/Auth/AuthRecoverPassword/AuthRecoverPassword';
import { getSingle } from '@/lib/types';
import { ServerProps } from '@/types/next';
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
