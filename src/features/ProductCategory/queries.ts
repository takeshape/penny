import { gql } from '@apollo/client';
import { QueryShopify_ProductsArgs } from 'types/takeshape';
import { ProductCategoryShopifyCollection, ProductCategoryShopifyCollectionHandleConnection } from './types';

export type ProductCategoryShopifyPaginationArgs = QueryShopify_ProductsArgs;

export type ProductCategoryShopifyCollectionHandlesResponse = {
  collections: ProductCategoryShopifyCollectionHandleConnection;
};

export type ProductCategoryShopifyCollectionHandlesArgs = {
  first: number;
  after: string;
};

export const ProductCategoryShopifyCollectionHandles = gql`
  query ProductCategoryShopifyCollectionHandles($first: Int!, $after: String) {
    collections: collectionsWithTtl(first: $first, after: $after, sortKey: ID) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        handle
      }
    }
  }
`;

const ProductCategoryFragments = gql`
  fragment ProductCategoryCollection on Shopify_Collection {
    id
    handle
    title
    description
    descriptionHtml
    seo {
      title
      description
    }
  }

  fragment ProductCategoryProduct on Shopify_Product {
    id
    handle
    title
    description
    descriptionHtml
    requiresSellingPlan
    featuredImage {
      id
      width
      height
      url
      altText
    }
    priceRangeV2 {
      maxVariantPrice {
        currencyCode
        amount
      }
      minVariantPrice {
        currencyCode
        amount
      }
    }
    publishedAt
    totalVariants
    totalInventory
    sellingPlanGroupCount
    reviews {
      stats {
        average
        count
      }
    }
  }
`;

export type ProductCategoryShopifyCollectionResponse = {
  collection: ProductCategoryShopifyCollection;
};

export type ProductCategoryShopifyCollectionArgs = {
  handle: string;
} & ProductCategoryShopifyPaginationArgs;

export const ProductCategoryShopifyCollectionQuery = gql`
  ${ProductCategoryFragments}
  query ProductPageShopifyProductQuery($handle: String!, $first: Int, $last: Int, $after: String, $before: String) {
    collection: collectionByHandleWithTtl(handle: $handle) {
      ...ProductCategoryCollection
      products(first: $first, last: $last, after: $after, before: $before) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          ...ProductCategoryProduct
        }
      }
    }
  }
`;
