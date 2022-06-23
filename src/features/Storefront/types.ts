import { CollectionBase } from 'types/collection';
import { ProductBase } from 'types/product';
import { Shopify_Collection, Shopify_PageInfo, Shopify_Product } from 'types/takeshape';

export type StorefrontShopifyProduct = Pick<
  Shopify_Product,
  | 'id'
  | 'handle'
  | 'title'
  | 'description'
  | 'descriptionHtml'
  | 'requiresSellingPlan'
  | 'priceRangeV2'
  | 'featuredImage'
  | 'publishedAt'
  | 'totalInventory'
  | 'totalVariants'
  | 'options'
  | 'sellingPlanGroupCount'
  | 'sellingPlanGroups'
  | 'reviews'
>;

export type StorefrontShopifyCollection = Pick<
  Shopify_Collection,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'productsCount'
> & {
  products: {
    pageInfo: Shopify_PageInfo;
    nodes: StorefrontShopifyProduct[];
  };
};

export type StorefrontCollectionItemProduct = ProductBase;

export type StorefrontCollectionItem = {
  product: StorefrontCollectionItemProduct;
};

export type StorefrontCollection = CollectionBase<StorefrontCollectionItem>;
