import { createImageGetter, getProductUrl } from 'transforms/shopify';
import { SearchShopifyProductsResults } from './queries';
import { SearchItem, SearchItemProduct, SearchShopifyProduct } from './types';

function getProduct(shopifyProduct: SearchShopifyProduct): SearchItemProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    featuredImage: getImage(shopifyProduct.featuredImage)
  };
}

function getItem(shopifyProduct: SearchShopifyProduct): SearchItem {
  return {
    product: getProduct(shopifyProduct)
  };
}

export function getSearchList(response: SearchShopifyProductsResults): SearchItem[] {
  const results = response?.search?.results;

  if (!results) {
    return null;
  }

  return results.map((item) => getItem(item));
}
