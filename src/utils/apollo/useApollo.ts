import { useMemo } from 'react';
import type { InitializeApolloProps } from './client';
import { APOLLO_CACHE_PROP_NAME, createClient } from './client';

export function useApollo(pageProps: any, { accessToken, uri }: InitializeApolloProps) {
  const initialCache = pageProps[APOLLO_CACHE_PROP_NAME];
  return useMemo(() => createClient({ initialCache, accessToken, uri }), [initialCache, accessToken, uri]);
}
