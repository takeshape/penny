import { AuthProvider } from '@/features/Auth/AuthProvider';
import { CheckoutAfterSignIn } from '@/features/Cart/CheckoutAfterSignIn';
import { auth } from '@/lib/auth';

export default async function CheckoutPage() {
  const session = await auth();
  return (
    <AuthProvider session={session}>
      <CheckoutAfterSignIn />
    </AuthProvider>
  );
}
