import type { NormalizedCacheObject } from '@apollo/client';
import { accessCache } from 'next-build-cache';
import { GetNavigationDataQuery } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';

const cache = accessCache('build.cache');

async function getCommonQueryCache() {
  let queryCache = (await cache.get('commonQueryCache')) as NormalizedCacheObject;

  if (!queryCache) {
    const apolloClient = createStaticClient();
    await apolloClient.query({
      query: GetNavigationDataQuery
    });
    console.log('DOING QUERY!!');
    queryCache = apolloClient.cache.extract();
    await cache.put('commonQueryCache', queryCache, 30000);
  }

  return queryCache;
}

export default getCommonQueryCache;
