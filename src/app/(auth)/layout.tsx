import { AuthProvider } from '@/features/Auth/AuthProvider';
import { getServerSession } from 'next-auth';
import { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  return (
    <AuthProvider session={session}>
      <div className="h-full bg-body-50">
        <div className="h-full">{children}</div>
      </div>
    </AuthProvider>
  );
}
