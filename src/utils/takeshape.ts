import {
  ApolloClient,
  DocumentNode,
  LazyQueryHookOptions,
  MutationHookOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryHookOptions,
  TypedDocumentNode,
  useLazyQuery,
  useMutation,
  useQuery
} from '@apollo/client';
import { getClientToken } from '@takeshape/next-auth-all-access/react';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createClient } from 'utils/apollo/client';
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
export function useAuthenticatedQuery<TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: QueryHookOptions<TData, TVariables> = {}
) {
  const client = useAuthenticatedClient();
  return useQuery(query, {
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
export function useAuthenticatedLazyQuery<TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: LazyQueryHookOptions<TData, TVariables> = {}
) {
  const client = useAuthenticatedClient();
  return useLazyQuery(query, {
    ...options,
    client
  });
}

/**
 * A convenience hook, uses an authenticated Apollo Client.
 *
 * WARNING: You must guard the code path that uses this against un-authenticated access.
 */
export function useAuthenticatedMutation<TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: MutationHookOptions<TData, TVariables> = {}
) {
  const client = useAuthenticatedClient();
  return useMutation(query, {
    ...options,
    client
  });
}
