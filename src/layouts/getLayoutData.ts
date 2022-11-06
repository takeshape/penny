import { FooterProps } from 'features/Footer/Footer';
import { Navigation } from 'features/Navigation/types';
// import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  footer: FooterProps | null;
  navigation: Navigation | null;
}

const cache: Cache = {
  footer: null,
  navigation: null
};

// const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getLayoutData() {
  // if (!cache.footer) {
  //   const { data } = await apolloClient.query({
  //     query: FooterQuery
  //   });
  //   cache.footer = getFooter(data);
  // }

  // if (!cache.navigation) {
  //   const { data } = await apolloClient.query({
  //     query: NavigationQuery
  //   });
  //   cache.navigation = getNavigation(data);
  // }

  return cache;
}
