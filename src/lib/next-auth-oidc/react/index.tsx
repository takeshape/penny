import type { SessionContextValue, UseSessionOptions } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import type { SetOptional } from 'type-fest';

export interface GetClientTokenOptions {
  clientId: string;
  session: SessionContextValue['data'];
}

export function getClientToken({ clientId, session }: GetClientTokenOptions) {
  return session?.oidcAccessTokens?.[clientId] && session.oidcAccessTokens[clientId];
}

export interface UseClientTokenOptions extends SetOptional<UseSessionOptions<boolean>, 'required'> {
  clientId: string;
}

/**
 * A convenience hook to provide the client token from the NextAuth session
 * for a configured client. Must be wrapped in the NextAuth SessionProvider.
 */
export function useClientToken({ clientId, ...options }: UseClientTokenOptions) {
  const { data: session, status } = useSession({ required: false, ...options });
  const [isAuthenticated, setIsAuthenticated] = useState(status === 'authenticated');
  const [clientToken, setClientToken] = useState(null);

  useEffect(() => {
    setIsAuthenticated(status === 'authenticated');
  }, [status]);

  useEffect(() => {
    const clientToken = getClientToken({ clientId, session });
    if (clientToken) {
      setClientToken(clientToken);
    } else {
      setClientToken(null);
    }
  }, [clientId, session]);

  return { isAuthenticated, clientToken };
}
