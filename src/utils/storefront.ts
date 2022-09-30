import { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client';
import { shopifyStorefrontToken, shopifyStorefrontUrl } from 'config';
import { JsonValue } from 'type-fest';
import { createClient } from 'utils/apollo/client';
import {
  LazyQueryHookWithTransformOptions,
  MutationHookWithTransformOptions,
  QueryHookWithTranformOptions,
  useLazyQueryWithTransform,
  useMutationWithTransform,
  useQueryWithTransform
} from 'utils/query';

const client = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export function useStorefrontQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookWithTranformOptions<TData, TVariables, TDataTransformed> = {}
) {
  return useQueryWithTransform(query, {
    ...options,
    client
  });
}

export function useStorefrontLazyQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
) {
  return useLazyQueryWithTransform(query, {
    ...options,
    client
  });
}

export function useStorefrontMutation<TData, TVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
) {
  return useMutationWithTransform(query, {
    ...options,
    client
  });
}
