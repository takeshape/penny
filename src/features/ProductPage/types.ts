import { SetRequired } from 'type-fest';
import { ProductBase } from 'types/product';
import { Review, ReviewHighlights, ReviewList, ReviewRollup, ReviewStats } from 'types/review';
import { ReviewsIo_ListProductReviewsResponse, Shopify_Product } from 'types/takeshape';

export type ProductPageShopifyProduct = Pick<
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
  | 'seo'
  | 'images'
  | 'variants'
>;

export type ProductPageProduct = SetRequired<ProductBase, 'images' | 'variants' | 'seo'>;
export type ProductPageReviewsIoReviews = ReviewsIo_ListProductReviewsResponse;
export type ProductPageReviewsReviewList = ReviewList;
export type ProductPageReviewsReview = Review;
export type ProductPageReviewHighlights = ReviewHighlights;
export type ProductPageReviewsRollup = ReviewRollup;
export type ProductPageReviewsStats = ReviewStats;
