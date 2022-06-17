import { gql } from '@apollo/client';
import { ProductCategoryShopifyCollection } from './types';

export type ProductCategoryShopifyCollectionIdsResponse = {
  collections: {
    items: Array<{
      name: string;
      slug: string;
      shopifyCollectionId: string;
      shopifyCollection: {
        productsCount: number;
      };
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
        shopifyCollection {
          productsCount
        }
      }
    }
  }
`;

export type ProductCategoryShopifyCollectionArgs = {
  id: string;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
};

const ProductCategoryProductFragment = gql`
  fragment ProductCategoryCollection on Shopify_Collection {
    id
    handle
    title
    description
    descriptionHtml
    productsCount
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

export const ProductCategoryShopifyCollectionQuery = gql`
  ${ProductCategoryProductFragment}
  query ProductCategoryShopifyCollectionQuery($id: ID!, $first: Int, $last: Int, $after: String, $before: String) {
    collection: Shopify_collection(id: $id) {
      ...ProductCategoryCollection
      products(first: $first, last: $last, after: $after, before: $before) {
        edges {
          cursor
          node {
            ...ProductCategoryProduct
          }
        }
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
  first?: number;
  last?: number;
  after?: string;
  before?: string;
};

export const ProductCategoryShopifyCollectionByIdQuery = gql`
  ${ProductCategoryProductFragment}
  query ProductPageShopifyProductByIdQuery($id: String!, $first: Int, $last: Int, $after: String, $before: String) {
    collectionList: getCollectionList(size: 1, where: { shopifyCollectionId: { eq: $id } }) {
      items {
        shopifyCollection {
          ...ProductCategoryCollection
          products(first: $first, last: $last, after: $after, before: $before) {
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
  first?: number;
  last?: number;
  after?: string;
  before?: string;
};

export const ProductCategoryShopifyCollectionBySlugQuery = gql`
  ${ProductCategoryProductFragment}
  query ProductPageShopifyProductByIdQuery($slug: String!, $first: Int, $last: Int, $after: String, $before: String) {
    collectionList: getCollectionList(size: 1, where: { slug: { eq: $slug } }) {
      items {
        shopifyCollection {
          ...ProductCategoryCollection
          products(first: $first, last: $last, after: $after, before: $before) {
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
