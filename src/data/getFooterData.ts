import { NormalizedCacheObject } from '@apollo/client';
import { GetFooterQuery } from 'features/Footer/Footer.queries';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  footerData?: NormalizedCacheObject;
}

const cache: Cache = {};

const apolloClient = createAnonymousTakeshapeApolloClient();

async function getFooterData() {
  let queryCache = cache.footerData;

  if (!queryCache) {
    await apolloClient.query({
      query: GetFooterQuery
    });
    queryCache = apolloClient.cache.extract();
    cache.footerData = queryCache;
  }

  return queryCache;
}

export default getFooterData;
