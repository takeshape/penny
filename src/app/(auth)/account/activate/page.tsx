import { AccountResetPassword } from '@/features/AccountResetPassword/AccountResetPassword';
import { type ServerProps } from '@/types/next';
import { getActivationParams } from '@/utils/account';
import { getSingle } from '@/utils/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Activate Account'
};

/**
 * Account activation for Shopify accounts
 */
export default function AccountActivatePage({ searchParams }: ServerProps) {
  if (!searchParams.activationUrl) {
    return notFound();
  }

  const { token, customerId } = getActivationParams('activate', getSingle(searchParams.activationUrl));

  return <AccountResetPassword activationToken={token} customerId={customerId} />;
}
