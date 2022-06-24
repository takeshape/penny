import { FooterQuery } from 'features/Footer/Footer.queries';
import { getFooter } from 'features/Footer/transforms';
import { Footer } from 'features/Footer/types';
import { NavigationQuery } from 'features/Navigation/queries';
import { getNavigation } from 'features/Navigation/transforms';
import { Navigation } from 'features/Navigation/types';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  footer?: Footer;
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
