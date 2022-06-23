import { gql } from '@apollo/client';
import { QueryShopify_ProductsArgs } from 'types/takeshape';
import { ProductCategoryShopifyCollection } from './types';

export type ProductCategoryShopifyPaginationArgs = QueryShopify_ProductsArgs;

export type ProductCategoryShopifyCollectionIdsResponse = {
  collections: {
    items: Array<{
      name: string;
      slug: string;
      shopifyCollectionId: string;
    }>;
  };
};

export const ProductCategoryShopifyCollectionIdsQuery = gql`
  query ProductCategoryShopifyCollectionIdsQuery {
    collections: getCollectionList(size: 100, sort: { field: "_createdAt", order: "asc" }) {
      items {
        name
        slug
        shopifyCollectionId
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
    productsCount
    seo {
      title
      description
    }
    takeshape {
      _id
      name
      slug
    }
  }

  fragment ProductCategoryProduct on Shopify_Product {
    id
    title
    description
    descriptionHtml
    takeshape {
      _id
      name
      slug
    }
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
  collectionList: {
    items: Array<{
      shopifyCollection: ProductCategoryShopifyCollection;
    }>;
  };
};

export type ProductCategoryShopifyCollectionByIdArgs = {
  id: string;
} & ProductCategoryShopifyPaginationArgs;

export const ProductCategoryShopifyCollectionByIdQuery = gql`
  ${ProductCategoryFragments}
  query ProductPageShopifyProductByIdQuery($id: String!, $first: Int, $last: Int, $after: String, $before: String) {
    collectionList: getCollectionListWithTtl(
      size: 1
      where: { shopifyCollectionId: { eq: $id }, _status: { eq: "enabled" } }
    ) {
      items {
        shopifyCollection {
          ...ProductCategoryCollection
          products(first: $first, last: $last, after: $after, before: $before) {
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                ...ProductCategoryProduct
              }
            }
          }
        }
      }
    }
  }
`;

export type ProductCategoryShopifyCollectionBySlugArgs = {
  slug: string;
} & ProductCategoryShopifyPaginationArgs;

export const ProductCategoryShopifyCollectionBySlugQuery = gql`
  ${ProductCategoryFragments}
  query ProductPageShopifyProductByIdQuery($slug: String!, $first: Int, $last: Int, $after: String, $before: String) {
    collectionList: getCollectionListWithTtl(size: 1, where: { slug: { eq: $slug }, _status: { eq: "enabled" } }) {
      items {
        shopifyCollection {
          ...ProductCategoryCollection
          products(first: $first, last: $last, after: $after, before: $before) {
            pageInfo {
              endCursor
              startCursor
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                ...ProductCategoryProduct
              }
            }
          }
        }
      }
    }
  }
`;
