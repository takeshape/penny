import { TrendingProduct } from 'features/Storefront/types';
import { Storefront } from 'types/takeshape';
import { GetStorefrontResponse } from './queries';

export function getTrendingProducts() {}

export function getStorefront(response: GetStorefrontResponse, trendingProducts: TrendingProduct[]): Storefront {
  const storefront = response?.storefront;

  if (!storefront) {
    return null;
  }

  return storefront;
}
