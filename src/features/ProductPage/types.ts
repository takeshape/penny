import { Breadcrumb } from '@/components/Breadcrumbs/Breadcrumbs';
import { ProductBase } from '@/types/product';
import { Review, ReviewHighlights, ReviewList, ReviewRollup, ReviewStats } from '@/types/review';
import { ProductPageRelatedProductsQueryResponse } from '@/types/storefront';
import {
  ProductPageShopifyProductResponse,
  ProductPageShopifySummaryQueryResponse,
  Shopify_ProductConnection
} from '@/types/takeshape';
import { TrustpilotReviewList } from '@/types/trustpilot';
import { NonNullablePath } from '@/types/util';
import { Get, SetRequired } from 'type-fest';

export type ProductPageShopifySummaryNodes = Get<ProductPageShopifySummaryQueryResponse, ['products', 'nodes']>;
export type ProductPageShopifySummaryConnection = Pick<Shopify_ProductConnection, 'pageInfo'> & {
  nodes: ProductPageShopifySummaryNodes;
};

export type ProductPageShopifyProduct = ProductPageShopifyProductResponse['product'];

export type ProductPageRelatedProductsShopifyProduct = NonNullablePath<
  ProductPageRelatedProductsQueryResponse,
  ['products', 0]
>;

export type ProductPageRelatedProductsProduct = ProductBase;

export type ProductPageDetail = {
  image: {
    url: string;
    altText: string;
  } | null;
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
  } | null;
  description: string;
  name: string;
};

export type ProductPagePolicies = {
  policies: ProductPagePolicy[];
};

export type ProductPageProductComponent = 'withImageGrid' | 'withImage';

export type ProductPageOptions = {
  component: ProductPageProductComponent;
  showReviewsIo: boolean;
  showTrustpilot: boolean;
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

export type ResponseReviewsIoReviewList = NonNullablePath<ProductPageShopifyProductResponse, ['product', 'reviews']>;
export type ResponseReviewsIoReview = NonNullablePath<ResponseReviewsIoReviewList, [0]>;

export type ProductPageReviewsReviewList = ReviewList;
export type ProductPageReviewsReview = Review;
export type ProductPageReviewHighlights = ReviewHighlights;
export type ProductPageReviewsRollup = ReviewRollup;
export type ProductPageReviewsStats = ReviewStats;

export type TrustpilotProductPageReviewsReviewList = TrustpilotReviewList;

export type ProductPageBreadcrumbs = Breadcrumb[];

export type ResponseCollection = NonNullablePath<
  ProductPageShopifyProductResponse,
  ['product', 'collections', 'nodes', 0]
>;
