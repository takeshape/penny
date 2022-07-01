import { currencyList } from 'config';
import { getNavigationLink } from 'transforms/navigation';
import { NavigationQueryResponse, NavigationSectionsLinkProperty } from 'types/takeshape';
import { Navigation, NavigationSection } from './types';

export function getNavigationLinksSections(response: NavigationQueryResponse): NavigationSection[] {
  return response.navigation.sections.map((section) => ({
    name: section.name,
    link: getNavigationLink(section.link as NavigationSectionsLinkProperty),
    subsections: section.subsections
      ? section.subsections.map((subsection) => ({
          name: subsection.name,
          links: subsection.links.map((link) => getNavigationLink(link as NavigationSectionsLinkProperty))
        }))
      : null
  }));
}

export function getNavigation(response: NavigationQueryResponse): Navigation {
  const navigation = response?.navigation;

  if (!navigation) {
    return null;
  }

  return {
    message: navigation.messageHtml.replace(/<\/?p>/g, ''),
    sections: getNavigationLinksSections(response),
    currencies: [...currencyList]
  };
}
