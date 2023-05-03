import {
  ApolloClient,
  DocumentNode,
  NormalizedCacheObject,
  OperationVariables,
  TypedDocumentNode
} from '@apollo/client';
import { getClientToken } from '@takeshape/next-auth-all-access/react';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
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
export function useAuthenticatedQuery<
  TData,
  TVariables extends OperationVariables = OperationVariables,
  TDataTransformed = JsonValue
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookWithTranformOptions<TData, TVariables, TDataTransformed> = {}
) {
  const client = useAuthenticatedClient();

  return useQueryWithTransform(query, {
    ...options,
    skip: !client,
    client
  });
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedLazyQuery<
  TData,
  TVariables extends OperationVariables = OperationVariables,
  TDataTransformed = JsonValue
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
) {
  const client = useAuthenticatedClient();

  return useLazyQueryWithTransform(query, {
    ...options,
    client
  });
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedMutation<TData, TVariables = OperationVariables, TDataTransformed = JsonValue>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookWithTransformOptions<TData, TVariables, TDataTransformed> = {}
) {
  const client = useAuthenticatedClient();

  return useMutationWithTransform(query, { ...options, client });
}
