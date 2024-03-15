'use client';

import { sessionRefetchInterval } from '@/config';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

export type ProvidersProps = {
  session: Session | null;
};

export default function SessionProviderWrapper({ children, session }: PropsWithChildren<ProvidersProps>) {
  return (
    <SessionProvider session={session} refetchInterval={sessionRefetchInterval} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
}
