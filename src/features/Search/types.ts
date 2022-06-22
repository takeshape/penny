import { ProductCore } from 'types/product';
import { Shopify_Product } from 'types/takeshape';

export type SearchShopifyProduct = Pick<
  Shopify_Product,
  'id' | 'title' | 'description' | 'descriptionHtml' | 'featuredImage' | 'takeshape'
>;

export type SearchItemProduct = ProductCore;

export type SearchItem = {
  product: SearchItemProduct;
};
