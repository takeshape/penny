import { CollectionBase, CollectionPageInfo } from 'types/collection';
import { ProductBase } from 'types/product';
import { ReviewStats } from 'types/review';
import {
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Collection,
  Shopify_CollectionConnection,
  Shopify_PageInfo,
  Shopify_Product
} from 'types/takeshape';

export type ProductCategoryShopifyCollectionHandleNode = Pick<Shopify_Collection, 'id' | 'handle'>;
export type ProductCategoryShopifyCollectionHandleConnection = Pick<Shopify_CollectionConnection, 'pageInfo'> & {
  nodes: ProductCategoryShopifyCollectionHandleNode[];
};

export type ProductCategoryShopifyProduct = Pick<
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
  | 'takeshape'
>;

export type ProductCategoryReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;

export type ProductCategoryShopifyCollection = Pick<
  Shopify_Collection,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'seo'
> & {
  products: {
    pageInfo: Shopify_PageInfo;
    nodes: ProductCategoryShopifyProduct[];
  };
};

export type ProductCategoryProduct = ProductBase;

export type ProductCategoryReviewStats = {
  stats: ReviewStats;
};

export type ProductCategoryProductListItem = {
  product: ProductCategoryProduct;
  reviews: ProductCategoryReviewStats;
};

export type ProductCategoryCollection = CollectionBase<ProductCategoryProductListItem> & {
  seo: {};
  pageInfo: CollectionPageInfo;
};
