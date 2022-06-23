import { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import { SetRequired } from 'type-fest';
import { ProductBase } from 'types/product';
import { Review, ReviewHighlights, ReviewList, ReviewRollup, ReviewStats } from 'types/review';
import { Product, ReviewsIo_ListProductReviewsResponse, Shopify_Product } from 'types/takeshape';

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
  | 'takeshape'
>;

export type RelatedProductsShopifyProduct = Pick<
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
  | 'takeshape'
>;

export type RelatedProductsProduct = ProductBase;

export type ProductPageTakeshapeProduct = Pick<
  Product,
  'details' | 'policies' | 'hideRelatedProducts' | 'hideReviews' | 'showPolicies' | 'showDetails' | 'productComponent'
>;

export type ProductPageDetail = {
  image: {
    url: string;
    altText: string;
  };
  description: string;
};

export type ProductPageDetails = {
  text: {
    primary: string;
    secondary: string;
  };
  details: ProductPageDetail[];
};

export type ProductPagePolicy = {
  image: {
    url: string;
    altText: string;
  };
  description: string;
  name: string;
};

export type ProductPagePolicies = {
  policies: ProductPagePolicy[];
};

export type ProductPageProductComponent = 'withImageGrid' | 'withImage';

export type ProductPageOptions = {
  component: ProductPageProductComponent;
  showReviews: boolean;
  showRelatedProducts: boolean;
  showDetails: boolean;
  showPolicies: boolean;
};

export type ProductPageProduct = SetRequired<ProductBase, 'images' | 'variants' | 'seo'>;
export type ProductPageReviewsIoReviews = ReviewsIo_ListProductReviewsResponse;
export type ProductPageReviewsReviewList = ReviewList;
export type ProductPageReviewsReview = Review;
export type ProductPageReviewHighlights = ReviewHighlights;
export type ProductPageReviewsRollup = ReviewRollup;
export type ProductPageReviewsStats = ReviewStats;

export type ProductPageBreadcrumbs = Breadcrumb[];
