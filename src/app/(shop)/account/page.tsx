import { AccountFormAddress } from '@/features/AccountForm/AccountFormAddress';
import { AccountFormMarketing } from '@/features/AccountForm/AccountFormMarketing';
import { AccountFormProfile } from '@/features/AccountForm/AccountFormProfile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account'
};

export default function AccountPage() {
  return (
    <>
      <AccountFormProfile />
      <AccountFormAddress />
      <AccountFormMarketing />
    </>
  );
}
