import {
  DocumentNode,
  LazyQueryHookOptions,
  MutationHookOptions,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode
} from '@apollo/client';
import { shopifyStorefrontToken, shopifyStorefrontUrl } from 'config';
import { JsonValue } from 'type-fest';
import { QueryHookTransformOptions } from 'types/query';
import { createClient } from 'utils/apollo/client';
import { useLazyQueryWithTransform, useMutationWithTransform, useQueryWithTransform } from 'utils/query';

const client = createClient({
  uri: shopifyStorefrontUrl,
  accessToken: shopifyStorefrontToken,
  accessTokenHeader: 'X-Shopify-Storefront-Access-Token',
  accessTokenPrefix: ''
});

export function useStorefrontQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
) {
  return useQueryWithTransform(
    query,
    {
      ...options,
      client
    },
    transform
  );
}

export function useStorefrontLazyQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
) {
  return useLazyQueryWithTransform(
    query,
    {
      ...options,
      client
    },
    transform
  );
}

export function useStorefrontMutation<TData, TVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
) {
  return useMutationWithTransform(
    query,
    {
      ...options,
      client
    },
    transform
  );
}
