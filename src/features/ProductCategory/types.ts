import { Breadcrumb } from '@/components/Breadcrumbs/Breadcrumbs';
import { CollectionBase } from '@/types/collection';
import { ProductBase } from '@/types/product';
import { ReviewStats } from '@/types/review';
import {
  ProductCategoryShopifyCollectionQueryResponse,
  ReviewsIo_ListProductReviewsResponse,
  Shopify_Collection,
  Shopify_CollectionConnection
} from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';
import { SetRequired } from 'type-fest';

export type ProductCategoryShopifyCollectionHandleNode = Pick<Shopify_Collection, 'id' | 'handle'>;
export type ProductCategoryShopifyCollectionHandleConnection = Pick<Shopify_CollectionConnection, 'pageInfo'> & {
  nodes: ProductCategoryShopifyCollectionHandleNode[];
};

export type ProductCategoryShopifyCollection = ProductCategoryShopifyCollectionQueryResponse['collection'];

export type ProductCategoryShopifyProduct = NonNullablePath<ProductCategoryShopifyCollection, ['products', 'nodes', 0]>;

export type ProductCategoryReviewsIoReviews = Pick<ReviewsIo_ListProductReviewsResponse, 'stats'>;

export type ProductCategoryProduct = ProductBase;

export type ProductCategoryReviewStats = {
  stats: ReviewStats;
};

export type ProductCategoryProductListItem = {
  product: ProductCategoryProduct;
  reviews: ProductCategoryReviewStats;
};

export type ProductCategoryCollectionParent = {
  id: string;
  url: string;
  name: string;
};

export type ProductCategoryCollection = SetRequired<CollectionBase<ProductCategoryProductListItem>, 'seo' | 'pageInfo'>;

export type ProductCategoryBreadcrumbs = Breadcrumb[];
