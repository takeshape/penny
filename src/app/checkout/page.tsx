import { AuthProvider } from '@/features/Auth/AuthProvider';
import { CheckoutAfterSignIn } from '@/features/Cart/CheckoutAfterSignIn';
import { getServerSession } from 'next-auth';

export default async function CheckoutPage() {
  const session = await getServerSession();
  return (
    <AuthProvider session={session}>
      <CheckoutAfterSignIn />
    </AuthProvider>
  );
}
