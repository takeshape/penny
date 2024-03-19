import { ProductCore } from '@/types/product';
import { SearchShopifyProductsResponse } from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';

export type SearchShopifyProduct = NonNullablePath<SearchShopifyProductsResponse, ['search', 'results', 0]> & {
  __typename: 'Shopify_Product';
};

export type SearchItemProduct = ProductCore;

export type SearchItem = {
  product: SearchItemProduct;
};
