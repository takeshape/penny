import { Storefront } from 'types/takeshape';
import { GetStorefrontResponse, StorefrontTrendingProductsShopifyCollectionResponse } from './queries';
import { TrendingProduct } from './types';

export function getTrendingProducts(response: StorefrontTrendingProductsShopifyCollectionResponse): TrendingProduct[] {
  const collection = response?.collection;

  if (!collection) {
    return null;
  }

  return collection.products.edges.map(({ node }) => node);
}

export function getStorefront(response: GetStorefrontResponse): Storefront {
  const storefront = response?.storefront;

  if (!storefront) {
    return null;
  }

  return storefront;
}
