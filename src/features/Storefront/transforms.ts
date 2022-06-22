import { createImageGetter, getCollectionUrl, getPrice, getProductOptions, getProductUrl } from 'transforms/shopify';
import { Storefront } from 'types/takeshape';
import {
  GetStorefrontResponse,
  StorefrontShopifyCollectionByHandleResponse,
  StorefrontShopifyPaginationArgs
} from './queries';
import {
  StorefrontCollection,
  StorefrontCollectionItem,
  StorefrontCollectionItemProduct,
  StorefrontShopifyProduct
} from './types';

function getProduct(shopifyProduct: StorefrontShopifyProduct): StorefrontCollectionItemProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const options = getProductOptions(shopifyProduct.options);
  const colors = options.find((opt) => opt.name.toLowerCase() === 'color');

  return {
    id: shopifyProduct.id,
    url: getProductUrl(shopifyProduct.id, shopifyProduct.takeshape),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    featuredImage: getImage(shopifyProduct.featuredImage),
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroupCount > 0,
    hasStock: shopifyProduct.totalInventory > 0,
    options,
    availableColors: colors ?? null
  };
}

function getCollectionItem(shopifyProduct: StorefrontShopifyProduct, cursor: string): StorefrontCollectionItem {
  return {
    cursor,
    product: getProduct(shopifyProduct)
  };
}

export function getCollection(
  response: StorefrontShopifyCollectionByHandleResponse,
  { before, after }: Partial<Pick<StorefrontShopifyPaginationArgs, 'before' | 'after'>>
): StorefrontCollection {
  const collection = response?.collection;

  if (!collection) {
    return null;
  }

  const anchor = before !== undefined ? collection.products.pageInfo.startCursor : after;

  return {
    id: collection.id,
    url: getCollectionUrl(collection.id, collection.takeshape),
    handle: collection.handle,
    name: collection.title,
    description: collection.description,
    descriptionHtml: collection.descriptionHtml,
    productsCount: collection.productsCount,
    items: collection.products.edges.map(({ node, cursor }) => getCollectionItem(node, cursor)),
    pageInfo: collection.products.pageInfo,
    anchor: collection.products.pageInfo.hasPreviousPage ? anchor : null
  };
}

export function getStorefront(response: GetStorefrontResponse): Storefront {
  const storefront = response?.storefront;

  if (!storefront) {
    return null;
  }

  return storefront;
}
