import { CollectionBase, CollectionPageInfo } from 'types/collection';
import { ProductBase } from 'types/product';
import { ReviewStats } from 'types/review';
import {
  ProductCategoryShopifyCollectionQueryResponse,
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Collection,
  Shopify_CollectionConnection
} from 'types/takeshape';

export type ProductCategoryShopifyCollectionHandleNode = Pick<Shopify_Collection, 'id' | 'handle'>;
export type ProductCategoryShopifyCollectionHandleConnection = Pick<Shopify_CollectionConnection, 'pageInfo'> & {
  nodes: ProductCategoryShopifyCollectionHandleNode[];
};

export type ProductCategoryShopifyCollection = ProductCategoryShopifyCollectionQueryResponse['collection'];

export type ProductCategoryShopifyProduct = ProductCategoryShopifyCollection['products']['nodes'][0];

export type ProductCategoryReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;

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
