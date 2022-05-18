import type { NormalizedCacheObject } from '@apollo/client';
import { GetFooterQuery } from 'features/Footer/Footer.queries';
import { createStaticClient } from 'services/apollo/apolloClient';

interface Cache {
  footerData?: NormalizedCacheObject;
}

const cache: Cache = {};

async function getFooterData() {
  let queryCache = cache.footerData;

  if (!queryCache) {
    const apolloClient = createStaticClient();
    await apolloClient.query({
      query: GetFooterQuery
    });
    queryCache = apolloClient.cache.extract();
    cache.footerData = queryCache;
  }

  return queryCache;
}

export default getFooterData;
