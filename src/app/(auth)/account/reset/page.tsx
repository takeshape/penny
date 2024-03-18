import { AccountResetPassword } from '@/features/AccountResetPassword/AccountResetPassword';
import { getActivationParams } from '@/lib/account';
import { getSingle } from '@/lib/types';
import { type ServerProps } from '@/types/next';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Reset Password'
};

/**
 * Password reset for Shopify accounts
 */
export default function AccountResetPage({ searchParams }: ServerProps) {
  if (!searchParams.resetUrl) {
    return notFound();
  }

  const { token, customerId } = getActivationParams('reset', getSingle(searchParams.resetUrl));

  return <AccountResetPassword resetToken={token} customerId={customerId} />;
}
