import { takeshapeAnonymousApiKey, takeshapeApiUrl } from '@/config';
import { createApolloClient } from '@/utils/apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import { getClientToken } from '@takeshape/next-auth-all-access/react';
import { Session } from 'next-auth';

export const { getClient: getAnonymousClient } = registerApolloClient(() => {
  return createApolloClient({
    accessToken: takeshapeAnonymousApiKey,
    uri: takeshapeApiUrl,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
});

export function getAuthenticatedClient(session: Session) {
  const clientToken = getClientToken({ clientId: 'takeshape', session });
  const accessToken = clientToken?.accessToken ?? '';

  console.log({ clientToken });

  const { getClient } = registerApolloClient(() => {
    return createApolloClient({
      accessToken,
      uri: takeshapeApiUrl,
      accessTokenHeader: 'Authorization',
      accessTokenPrefix: 'Bearer'
    });
  });

  return getClient();
}
