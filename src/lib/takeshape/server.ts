import { takeshapeAnonymousApiKey, takeshapeApiUrl } from '@/config';
import { createClient } from '@/lib/apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient: getAnonymousClient } = registerApolloClient(() => {
  return createClient({
    accessToken: takeshapeAnonymousApiKey,
    uri: takeshapeApiUrl,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
});
