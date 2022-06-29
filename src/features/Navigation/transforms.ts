import { currencyList } from 'config';
import { getCollectionUrl, getProductUrl } from 'transforms/shopify';
import { NavigationQueryResponse, NavigationSectionsLinkProperty } from 'types/takeshape';
import { Navigation, NavigationItem, NavigationSection } from './types';

export function getNavigationLink(link: NavigationSectionsLinkProperty): NavigationItem {
  switch (link.__typename) {
    case 'Collection':
      const { shopifyCollection } = link;
      return {
        name: shopifyCollection.title,
        href: getCollectionUrl(shopifyCollection.handle)
      };
    case 'Product':
      const { shopifyProduct } = link;
      return {
        name: shopifyProduct.title,
        href: getProductUrl(shopifyProduct.handle)
      };
    case 'Page':
      return {
        name: link.title,
        href: `/${link.slug}`
      };
    case 'Link':
      return {
        name: link.name,
        href: link.href
      };
    // no default case
  }
}

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
