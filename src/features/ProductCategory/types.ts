import { ProductBase } from 'types/product';
import { ReviewStats } from 'types/review';
import {
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Collection,
  Shopify_PageInfo,
  Shopify_Product
} from 'types/takeshape';

export type ProductCategoryShopifyProduct = Pick<
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

export type ProductCategoryReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;

export type ProductCategoryShopifyCollection = Pick<
  Shopify_Collection,
  'id' | 'handle' | 'title' | 'description' | 'descriptionHtml' | 'productsCount' | 'takeshape'
> & {
  products: {
    pageInfo: Shopify_PageInfo;
    edges: Array<{
      cursor: string;
      node: ProductCategoryShopifyProduct;
    }>;
  };
};

export type ProductCategoryProduct = ProductBase;

export type ProductCategoryReviewStats = {
  stats: ReviewStats;
};

export type ProductCategoryProductListItem = {
  cursor: string;
  product: ProductCategoryProduct;
  reviews: ProductCategoryReviewStats;
};

export type ProductCategoryCollection = {
  id: string;
  url: string;
  handle: string;
  name: string;
  description: string;
  descriptionHtml: string;
  productsCount: number;
  products: ProductCategoryProductListItem[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
