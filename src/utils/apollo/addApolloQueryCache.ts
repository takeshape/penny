import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import getFooterData from 'data/getFooterData';
import getNavigationData from 'data/getNavigationData';
import { mergeWithArrayMerge } from 'utils/merge';
import { APOLLO_CACHE_PROP_NAME } from './client';

async function addApolloQueryCache(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
  if (pageProps?.props) {
    const clientCache = client.cache.extract();

    // Add common queries that export Apollo cache objects
    const commonQueryCache: NormalizedCacheObject[] = [];
    commonQueryCache.push(await getNavigationData());
    commonQueryCache.push(await getFooterData());

    let apolloCache = clientCache;
    for (const queryCache of commonQueryCache) {
      apolloCache = mergeWithArrayMerge(apolloCache, queryCache);
    }

    pageProps.props[APOLLO_CACHE_PROP_NAME] = apolloCache;
  }

  return pageProps;
}

export default addApolloQueryCache;
