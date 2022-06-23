import { ProductCore } from 'types/product';
import { Shopify_Product } from 'types/takeshape';

export type SearchShopifyProduct = Pick<
  Shopify_Product,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'featuredImage'
>;

export type SearchItemProduct = ProductCore;

export type SearchItem = {
  product: SearchItemProduct;
};
