import { shopifyStorefrontToken, shopifyStorefrontUrl, takeshapeAnonymousApiKey, takeshapeApiUrl } from '@/config';
import { createClient } from '@/lib/apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient: getAnonymousTakeshapeClient } = registerApolloClient(() => {
  return createClient({
    accessToken: takeshapeAnonymousApiKey,
    uri: takeshapeApiUrl,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
});

export const { getClient: getStorefrontClient } = registerApolloClient(() => {
  return createClient({
    uri: shopifyStorefrontUrl,
    accessToken: shopifyStorefrontToken,
    accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
    accessTokenPrefix: ''
  });
});
