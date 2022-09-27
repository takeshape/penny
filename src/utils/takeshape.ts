import {
  ApolloClient,
  DocumentNode,
  LazyQueryHookOptions,
  MutationHookOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode
} from '@apollo/client';
import { getClientToken } from '@takeshape/next-auth-all-access/react';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { JsonValue } from 'type-fest';
import {
  LazyQueryResultTupleWithTransformData,
  MutationTupleWithTranformData,
  QueryHookTransformOptions
} from 'types/query';
import { createClient } from 'utils/apollo/client';
import { useWrappedLazyQuery, useWrappedMutation, useWrappedQuery } from 'utils/query';
import { createStaticClient } from './apollo/client';

export function createAnonymousTakeshapeApolloClient() {
  return createStaticClient({
    uri: takeshapeApiUrl,
    accessToken: takeshapeAnonymousApiKey,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
}

export function useAuthenticatedClient() {
  const { data: session } = useSession();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    if (session) {
      const clientToken = getClientToken({ clientId: 'takeshape', session });
      setClient(
        createClient({
          uri: takeshapeApiUrl,
          accessToken: clientToken?.accessToken ?? '',
          accessTokenHeader: 'Authorization',
          accessTokenPrefix: 'Bearer'
        })
      );
    }
  }, [session]);

  return client;
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
) {
  const client = useAuthenticatedClient();

  return useWrappedQuery(client, query, options, transform);
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedLazyQuery<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): LazyQueryResultTupleWithTransformData<TData, TVariables, TDataTransformed> {
  const client = useAuthenticatedClient();

  return useWrappedLazyQuery(client, query, options, transform);
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedMutation<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {},
  transform: QueryHookTransformOptions<TData, TDataTransformed> = {}
): MutationTupleWithTranformData<TData, TVariables, TDataTransformed> {
  const client = useAuthenticatedClient();

  return useWrappedMutation(client, query, options, transform);
}
