import { gql } from '@apollo/client';
import { RelatedProductsShopifyProduct } from './types';

export type RelatedProductsShopifyCollectionArgs = {
  handle: string;
};

export type RelatedProductsShopifyCollectionResponse = {
  collection: {
    products: {
      edges: {
        node: RelatedProductsShopifyProduct;
      }[];
    };
  };
};

export const RelatedProductsShopifyCollectionQuery = gql`
  query RelatedProductsShopifyCollectionQuery($handle: String!) {
    collection: Shopify_collectionByHandle(handle: $handle) {
      products(first: 10) {
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
          }
        }
      }
    }
  }
`;
