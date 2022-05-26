import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { createStaticClient } from './apollo/client';

export function createAnonymousTakeshapeApolloClient() {
  return createStaticClient({ uri: takeshapeApiUrl, accessToken: takeshapeAnonymousApiKey });
}

function qs(params = {}) {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
}

export function buildImageUrl(asset, params) {
  return `https://images.takeshape.io/${asset.path}?${qs(params)}`;
}
