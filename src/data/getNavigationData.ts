import type { NormalizedCacheObject } from '@apollo/client';
import { GetNavigationDataQuery } from 'queries';
import { createStaticClient } from 'services/apollo/apolloClient';

interface Cache {
  navigationData?: NormalizedCacheObject;
}

const cache: Cache = {};

async function getNavigationData() {
  let queryCache = cache.navigationData;

  if (!queryCache) {
    const apolloClient = createStaticClient();
    await apolloClient.query({
      query: GetNavigationDataQuery
    });
    queryCache = apolloClient.cache.extract();
    cache.navigationData = queryCache;
  }

  return queryCache;
}

export default getNavigationData;
