import { SetRequired } from 'type-fest';
import { ProductBase } from 'types/product';
import { ReviewsIo_ListProductReviewsResponse } from 'types/takeshape';

export type QuickAddProduct = SetRequired<
  ProductBase,
  'variants' | 'variantsCount' | 'hasOneTimePurchaseOption' | 'hasSubscriptionPurchaseOption' | 'hasStock'
>;

export type QuickAddReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;

export type QuickAdd = {
  productHandle: string;
};
