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

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
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
    options: getProductOptions(shopifyProduct.options)
  };
}

function getCollectionItem(shopifyProduct: StorefrontShopifyProduct): StorefrontCollectionItem {
  return {
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
    url: getCollectionUrl(collection.handle),
    handle: collection.handle,
    name: collection.title,
    description: collection.description,
    descriptionHtml: collection.descriptionHtml,
    productsCount: collection.productsCount,
    items: collection.products.nodes.map((node) => getCollectionItem(node)),
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
