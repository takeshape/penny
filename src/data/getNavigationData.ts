import type { NormalizedCacheObject } from '@apollo/client';
import { GetNavigationDataQuery } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';

// const cache = accessCache('build.cache');

interface Cache {
  navigationData?: NormalizedCacheObject;
}

const cache: Cache = {};

async function getNavigationData() {
  // let queryCache = (await cache.get('navigationData')) as NormalizedCacheObject;
  let queryCache = cache.navigationData;

  if (!queryCache) {
    const apolloClient = createStaticClient();
    await apolloClient.query({
      query: GetNavigationDataQuery
    });
    queryCache = apolloClient.cache.extract();
    // await cache.put('navigationData', queryCache);
    cache.navigationData = queryCache;
  }

  return queryCache;
}

export default getNavigationData;
