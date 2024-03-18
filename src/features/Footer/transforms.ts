import { isNotNullish } from '../../lib/types';
import { getNavigationLink } from '../../transforms/navigation';
import { FooterQueryResponse, NavigationSectionsLinkProperty } from '../../types/takeshape';

export function getFooter(response: FooterQueryResponse) {
  const footer = response?.footer;

  if (!footer) {
    return null;
  }

  return {
    ...footer,
    navigation: {
      ...footer.navigation,
      sections:
        footer.navigation?.sections?.map((section) => ({
          ...section,
          links: section?.links
            ?.map((link) => getNavigationLink(link as NavigationSectionsLinkProperty))
            .filter(isNotNullish)
        })) ?? []
    }
  };
}
