import preval from 'next-plugin-preval';
import { takeshapeAnonymousApiKey, takeshapeApiUrl } from '../../config';
import { createStaticClient } from '../../utils/apollo/client';
import { FooterQuery } from './queries';
import { getFooter } from './transforms';

const apolloClient = createStaticClient({
  uri: takeshapeApiUrl,
  accessToken: takeshapeAnonymousApiKey,
  accessTokenHeader: 'Authorization',
  accessTokenPrefix: 'Bearer'
});

export async function getNavigationData() {
  const { data } = await apolloClient.query({
    query: FooterQuery
  });
  return getFooter(data);
}

export default preval(getNavigationData());
