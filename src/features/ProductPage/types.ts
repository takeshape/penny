import { Breadcrumb } from 'components/Breadcrumbs/Breadcrumbs';
import { SetRequired } from 'type-fest';
import { ProductBase } from 'types/product';
import { Review, ReviewHighlights, ReviewList, ReviewRollup, ReviewStats } from 'types/review';
import {
  ProductPageRelatedProductsShopifyQueryResponse,
  ProductPageShopifyProductResponse,
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Product,
  Shopify_ProductConnection
} from 'types/takeshape';

export type ProductPageShopifyProductHandleNode = Pick<Shopify_Product, 'id' | 'handle'>;
export type ProductPageShopifyProductHandleConnection = Pick<Shopify_ProductConnection, 'pageInfo'> & {
  nodes: ProductPageShopifyProductHandleNode[];
};

export type ProductPageShopifyProduct = ProductPageShopifyProductResponse['product'];

export type ProductPageRelatedProductsShopifyProduct =
  ProductPageRelatedProductsShopifyQueryResponse['products']['nodes'][0];

export type ProductPageRelatedProductsProduct = ProductBase;

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
  showBreadcrumbs: boolean;
};

export type ProductPageProduct = SetRequired<
  ProductBase,
  | 'images'
  | 'variants'
  | 'variantsCount'
  | 'seo'
  | 'tags'
  | 'hasOneTimePurchaseOption'
  | 'hasSubscriptionPurchaseOption'
  | 'hasStock'
>;
export type ProductPageReviewsIoReviews = ReviewsIo_ListProductReviewsResponse;
export type ProductPageReviewsReviewList = ReviewList;
export type ProductPageReviewsReview = Review;
export type ProductPageReviewHighlights = ReviewHighlights;
export type ProductPageReviewsRollup = ReviewRollup;
export type ProductPageReviewsStats = ReviewStats;

export type ProductPageBreadcrumbs = Breadcrumb[];
