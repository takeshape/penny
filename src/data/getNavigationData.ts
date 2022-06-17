import { NormalizedCacheObject } from '@apollo/client';
import { NavigationQuery } from 'features/Navigation/queries';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  navigationData?: NormalizedCacheObject;
}

const cache: Cache = {};

const apolloClient = createAnonymousTakeshapeApolloClient();

async function getNavigationData() {
  let queryCache = cache.navigationData;

  if (!queryCache) {
    await apolloClient.query({
      query: NavigationQuery
    });
    queryCache = apolloClient.cache.extract();
    cache.navigationData = queryCache;
  }

  return queryCache;
}

export default getNavigationData;
