import { DocumentNode, LazyQueryHookOptions, TypedDocumentNode, useLazyQuery } from '@apollo/client';
import { shopifyStorefrontToken, shopifyStorefrontUrl } from 'config';
import { createClient } from 'utils/apollo/client';

const client = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export function useStorefrontLazyQuery<TData, TVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {}
) {
  return useLazyQuery(query, {
    ...options,
    client
  });
}
