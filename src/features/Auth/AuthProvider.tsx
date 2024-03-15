'use client';

import { sessionRefetchInterval } from '@/config';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export type AuthProvidersProps = {
  session: Session | null;
};

export function AuthProvider({ children, session }: PropsWithChildren<AuthProvidersProps>) {
  return (
    <SessionProvider session={session} refetchInterval={sessionRefetchInterval} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}
