import type { SetRequired } from 'type-fest';
import type { ProductBase } from 'types/product';
import type {
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Product,
  Shopify_ProductVariantConnection
} from 'types/takeshape';

export type CartQuickAddShopifyProduct = Pick<
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
> & {
  variants: Shopify_ProductVariantConnection;
};

export type CartQuickAddProduct = SetRequired<ProductBase, 'variants'>;
export type CartQuickAddReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;
