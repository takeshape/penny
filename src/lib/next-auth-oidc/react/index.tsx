import { useSession } from 'next-auth/react';
import { useCallback } from 'react';

export interface UseTokenOptions {
  clientId: string;
}

export function useOidc(options: UseTokenOptions) {
  const { clientId } = options;
  const { data: session, status } = useSession();

  // When the session changes this callback should also
  const getAccessToken = useCallback(async (): Promise<any> => {
    let token;
    try {
      const res = await fetch(`/api/oidc/${clientId}/token`);
      const json = await res.json();
      token = json.access_token;
    } catch (error) {
      throw error;
    }
    return token;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated: status === 'authenticated', getAccessToken };
}
