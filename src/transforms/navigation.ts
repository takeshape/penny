import { getCollectionUrl, getProductUrl } from '@/transforms/shopify';
import { NavigationItem } from '@/types/navigation';
import { NavigationSectionsLinkProperty } from '@/types/takeshape';

export function getNavigationLink(link: NavigationSectionsLinkProperty): NavigationItem | null {
  let item: NavigationItem | undefined;

  switch (link.__typename) {
    case 'Collection':
      const { shopifyCollection } = link;
      if (shopifyCollection) {
        item = {
          name: shopifyCollection.title,
          href: getCollectionUrl(shopifyCollection.handle)
        };
      }
      break;

    case 'Product':
      const { shopifyProduct } = link;

      if (shopifyProduct) {
        item = {
          name: shopifyProduct.title,
          href: getProductUrl(shopifyProduct.handle)
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
