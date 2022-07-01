import { getCollectionUrl, getProductUrl } from 'transforms/shopify';
import { NavigationItem } from 'types/navigation';
import { NavigationSectionsLinkProperty } from 'types/takeshape';

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
