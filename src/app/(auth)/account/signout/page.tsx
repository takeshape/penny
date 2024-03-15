import { AuthSignOut } from '@/features/Auth/AuthSignOut/AuthSignOut';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Out'
};

export default function AccountSignInPage() {
  return <AuthSignOut />;
}
