import { ProductCore } from 'types/product';
import { SearchShopifyProductsResponse } from 'types/takeshape';

export type SearchShopifyProduct = SearchShopifyProductsResponse['search']['results'][0] & {
  __typename: 'Shopify_Product';
};

export type SearchItemProduct = ProductCore;

export type SearchItem = {
  product: SearchItemProduct;
};
