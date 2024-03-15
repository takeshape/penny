import { NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
import { APOLLO_CACHE_PROP_NAME, createClient, InitializeApolloProps } from './client';

export function useApollo(pageProps: Record<string, unknown> | undefined, { accessToken, uri }: InitializeApolloProps) {
  const initialCache = (pageProps?.[APOLLO_CACHE_PROP_NAME] as NormalizedCacheObject) ?? undefined;
  return useMemo(
    () =>
      createClient({
        initialCache,
        accessToken,
        accessTokenHeader: 'Authorization',
        accessTokenPrefix: 'Bearer',
        uri
      }),
    [initialCache, accessToken, uri]
  );
}
