import type { NormalizedCacheObject } from '@apollo/client';
import { accessCache } from 'next-build-cache';
import { GetNavigationDataQuery } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';

const cache = accessCache('build.cache');

async function getNavigationData() {
  let queryCache = (await cache.get('navigationData')) as NormalizedCacheObject;

  if (!queryCache) {
    const apolloClient = createStaticClient();
    await apolloClient.query({
      query: GetNavigationDataQuery
    });
    queryCache = apolloClient.cache.extract();
    await cache.put('navigationData', queryCache);
  }

  return queryCache;
}

export default getNavigationData;
