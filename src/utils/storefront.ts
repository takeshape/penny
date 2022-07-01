import {
  DocumentNode,
  LazyQueryHookOptions,
  MutationHookOptions,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
  useMutation,
  useQuery
} from '@apollo/client';
import { shopifyStorefrontToken, shopifyStorefrontUrl } from 'config';
import { createClient } from 'utils/apollo/client';

const client = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export function useStorefrontQuery<TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {}
) {
  return useQuery(query, {
    ...options,
    client
  });
}

export function useStorefrontLazyQuery<TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {}
) {
  return useLazyQuery(query, {
    ...options,
    client
  });
}

export function useStorefrontMutation<TData, TVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {}
) {
  return useMutation(query, {
    ...options,
    client
  });
}
