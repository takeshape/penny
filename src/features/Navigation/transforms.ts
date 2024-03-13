import { currencyList } from '@/config';
import { getNavigationLink } from '@/transforms/navigation';
import { NavigationQueryResponse, NavigationSectionsLinkProperty } from '@/types/takeshape';
import { isNotNullish } from '@/utils/types';
import { Object } from 'ts-toolbelt';
import { Navigation, NavigationSection } from './types';

function getNavigationLinksSections(
  sections: Object.Path<NavigationQueryResponse, ['navigation', 'sections']>
): NavigationSection[] | null {
  if (!sections) {
    return null;
  }

  return sections
    .map((section) => {
      if (!section) {
        return null;
      }

      return {
        name: section.name,
        link: getNavigationLink(section.link as NavigationSectionsLinkProperty),
        subsections: section.subsections
          ? section.subsections
              .map((subsection) => {
                if (!subsection) {
                  return null;
                }

                return {
                  name: subsection.name,
                  links:
                    subsection.links
                      ?.map((link) => getNavigationLink(link as NavigationSectionsLinkProperty))
                      .filter(isNotNullish) ?? []
                };
              })
              .filter(isNotNullish)
          : []
      };
    })
    .filter(isNotNullish);
}

export function getNavigation(response: NavigationQueryResponse): Navigation | null {
  const navigation = response?.navigation;

  if (!navigation) {
    return null;
  }

  return {
    message: navigation.messageHtml?.replace(/<\/?p>/g, '') ?? '',
    sections: getNavigationLinksSections(response?.navigation?.sections) ?? [],
    currencies: [...currencyList]
  };
}
