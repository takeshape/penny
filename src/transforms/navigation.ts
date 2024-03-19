import { getCollectionUrl, getProductUrl } from '../transforms/shopify';
import { NavigationItem } from '../types/navigation';
import { NavigationSectionsLinkProperty } from '../types/takeshape';

export function getNavigationLink(link: NavigationSectionsLinkProperty): NavigationItem | null {
  let item: NavigationItem | undefined;

  switch (link.__typename) {
    case 'Collection':
      if (link.shopifyCollection) {
        item = {
          name: link.shopifyCollection.title,
          href: getCollectionUrl(link.shopifyCollection.handle)
        };
      }
      break;

    case 'Product':
      if (link.shopifyProduct) {
        item = {
          name: link.shopifyProduct.title,
          href: getProductUrl(link.shopifyProduct.handle)
        };
      }
      break;

    case 'Page':
      item = {
        name: link.title,
        href: `/${link.slug}`
      };
      break;

    case 'Link':
      item = {
        name: link.name,
        href: link.href
      };
      break;
  }

  return item ?? null;
}
