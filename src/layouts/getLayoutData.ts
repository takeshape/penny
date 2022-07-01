import { FooterProps } from 'features/Footer/Footer';
import { FooterQuery } from 'features/Footer/queries';
import { getFooter } from 'features/Footer/transforms';
import { NavigationQuery } from 'features/Navigation/queries';
import { getNavigation } from 'features/Navigation/transforms';
import { Navigation } from 'features/Navigation/types';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  footer?: FooterProps;
  navigation?: Navigation;
}

const cache: Cache = {};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getLayoutData() {
  if (!cache.footer) {
    const { data } = await apolloClient.query({
      query: FooterQuery
    });
    cache.footer = getFooter(data);
  }

  if (!cache.navigation) {
    const { data } = await apolloClient.query({
      query: NavigationQuery
    });
    cache.navigation = getNavigation(data);
  }

  return cache;
}
