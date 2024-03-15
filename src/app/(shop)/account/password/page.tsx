import { AccountFormPassword } from '@/features/AccountForm/AccountFormPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Password'
};

export default function AccountPasswordPage() {
  return <AccountFormPassword />;
}
