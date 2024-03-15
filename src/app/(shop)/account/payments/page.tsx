import { AccountPayments } from '@/features/AccountPayments/AccountPayments';
import { paymentMethods } from '@/features/AccountPayments/fixtures';
import { getPaymentMethods } from '@/features/AccountPayments/transforms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Methods'
};

export default function AccountPasswordPage() {
  return <AccountPayments paymentMethods={getPaymentMethods(paymentMethods)} />;
}
