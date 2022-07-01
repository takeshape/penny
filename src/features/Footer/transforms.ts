import { getNavigationLink } from 'features/Navigation/transforms';
import { FooterResponse, NavigationSectionsLinkProperty } from 'types/takeshape';

export function getFooter(response: FooterResponse) {
  const footer = response?.footer;

  if (!footer) {
    return null;
  }

  return {
    ...footer,
    navigation: {
      ...footer.navigation,
      sections: footer.navigation.sections.map((section) => ({
        ...section,
        links: section.links.map((link) => getNavigationLink(link as NavigationSectionsLinkProperty))
      }))
    }
  };
}
