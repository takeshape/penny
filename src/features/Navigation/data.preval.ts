import { takeshapeAnonymousApiKey, takeshapeApiUrl } from 'config';
import preval from 'next-plugin-preval';
import { createStaticClient } from 'utils/apollo/client';
import { NavigationQuery } from './queries';
import { getNavigation } from './transforms';

export function createAnonymousTakeshapeApolloClient() {
  return createStaticClient({
    uri: takeshapeApiUrl,
    accessToken: takeshapeAnonymousApiKey,
    accessTokenHeader: 'Authorization',
    accessTokenPrefix: 'Bearer'
  });
}

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getNavigationData() {
  const { data } = await apolloClient.query({
    query: NavigationQuery
  });
  return getNavigation(data);
}

export default preval(getNavigationData());
