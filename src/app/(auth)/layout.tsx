import { auth } from '@/auth';
import { AuthProvider } from '@/features/Auth/AuthProvider';
import { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <AuthProvider session={session}>
      <div className="h-full bg-body-50">
        <div className="h-full">{children}</div>
      </div>
    </AuthProvider>
  );
}
