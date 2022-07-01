import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { createStaticClient } from './apollo/client';

export function createAnonymousTakeshapeApolloClient() {
  return createStaticClient({
    uri: takeshapeApiUrl,
    accessToken: takeshapeAnonymousApiKey,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
}
