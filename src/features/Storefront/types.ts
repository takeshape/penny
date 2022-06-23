import { CollectionBase } from 'types/collection';
import { ProductBase } from 'types/product';
import { Shopify_Collection, Shopify_PageInfo, Shopify_Product } from 'types/takeshape';

export type StorefrontShopifyProduct = Pick<
  Shopify_Product,
  | 'id'
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
  | 'takeshape'
>;

export type StorefrontShopifyCollection = Pick<
  Shopify_Collection,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'productsCount' | 'takeshape'
> & {
  products: {
    pageInfo: Shopify_PageInfo;
    edges: Array<{
      cursor: string;
      node: StorefrontShopifyProduct;
    }>;
  };
};

export type StorefrontCollectionItemProduct = ProductBase;

export type StorefrontCollectionItem = {
  cursor: string;
  product: StorefrontCollectionItemProduct;
};

export type StorefrontCollection = CollectionBase<StorefrontCollectionItem>;
