import { createImageGetter, getProductHasStock, getProductUrl } from 'transforms/shopify';
import { SearchShopifyProductsResponse } from 'types/takeshape';
import { isNotNullish } from 'utils/types';
import { SearchItem, SearchItemProduct, SearchShopifyProduct } from './types';

function getProduct(shopifyProduct: SearchShopifyProduct): SearchItemProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    featuredImage: getImage(shopifyProduct.featuredImage),
    hasStock: getProductHasStock(shopifyProduct)
  };
}

function getItem(shopifyProduct: SearchShopifyProduct): SearchItem {
  return {
    product: getProduct(shopifyProduct)
  };
}

export function getSearchList(response: SearchShopifyProductsResponse): SearchItem[] {
  const results = response?.search?.results;

  if (!results) {
    return [];
  }

  return results.map((item) => (item.__typename === 'Shopify_Product' ? getItem(item) : null)).filter(isNotNullish);
}
