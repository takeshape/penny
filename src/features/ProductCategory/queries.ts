import { gql } from '@apollo/client';
import { ProductCategoryShopifyCollection } from './types';

export type ProductCategoryShopifyCollectionIdsResponse = {
  collections: {
    edges: {
      node: {
        id: string;
        handle: string;
      };
    }[];
  };
};

export const ProductCategoryShopifyCollectionIdsQuery = gql`
  query ProductCategoryShopifyCollectionIdsQuery {
    collections: Shopify_collections(first: 100) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
`;

export type ProductCategoryShopifyCollectionArgs = {
  id: string;
};

export type ProductCategoryShopifyCollectionResponse = {
  collection: ProductCategoryShopifyCollection;
};

export const ProductCategoryShopifyCollectionQuery = gql`
  query ProductCategoryShopifyCollectionQuery($id: ID!) {
    collection: Shopify_collection(id: $id) {
      id
      handle
      title
      description
      descriptionHtml
      productsCount
      products(first: 5) {
        edges {
          node {
            id
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
        }
      }
    }
  }
`;
