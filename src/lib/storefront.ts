import { shopifyStorefrontToken, shopifyStorefrontUrl } from '@/config';
import { createClient } from '@/lib/apollo/client';
import {
  LazyQueryHookWithTransformOptions,
  MutationHookWithTransformOptions,
  QueryHookWithTranformOptions,
  useLazyQueryWithTransform,
  useMutationWithTransform,
  useQueryWithTransform
} from '@/lib/query';
import { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client';
import { JsonValue } from 'type-fest';

const client = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export function useStorefrontQuery<
  TData,
  TVariables extends OperationVariables = OperationVariables,
  TDataTransformed = JsonValue
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookWithTranformOptions<TData, TVariables, TDataTransformed> = {}
) {
  return useQueryWithTransform(query, {
    ...options,
    client
  });
}

export function useStorefrontLazyQuery<
  TData,
  TVariables extends OperationVariables = OperationVariables,
  TDataTransformed = JsonValue
>(
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
