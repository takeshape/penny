import { gql } from '@apollo/client';
import { QueryShopify_ProductsArgs, Storefront } from 'types/takeshape';
import { StorefrontShopifyCollection } from './types';

export type StorefrontShopifyPaginationArgs = QueryShopify_ProductsArgs;

export interface GetStorefrontResponse {
  storefront: Storefront;
}

export const GetStorefrontQuery = gql`
  query GetStorefrontQuery {
    storefront: getStorefront {
      components {
        __typename
        ... on OffersComponent {
          offers {
            href
            name
            description
          }
        }
        ... on HeroComponent {
          primaryText
          secondaryText
          buttonText
          image {
            path
            description
          }
        }
        ... on CollectionsComponent {
          collections {
            name
            description
            href
            image {
              path
              description
            }
          }
        }
        ... on BackgroundImageComponent {
          image {
            path
            description
          }
          components {
            __typename
            ... on SaleComponent {
              primaryText
              secondaryText
              buttonText
            }
            ... on TestimonialsComponent {
              testimonials {
                quote
                attribution
              }
            }
          }
        }
      }
    }
  }
`;

const StorefrontFragments = gql`
  fragment StorefrontCollection on Shopify_Collection {
    id
    handle
    title
    description
    descriptionHtml
    productsCount
  }

  fragment StorefrontProduct on Shopify_Product {
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
    options {
      name
      position
      id
      values
    }
  }
`;

export type StorefrontShopifyCollectionByHandleResponse = {
  collection: StorefrontShopifyCollection;
};

export type StorefrontShopifyCollectionByHandleArgs = {
  handle: string;
} & StorefrontShopifyPaginationArgs;

export const StorefrontShopifyCollectionByHandleQuery = gql`
  ${StorefrontFragments}
  query StorefrontShopifyCollectionByHandleQuery(
    $handle: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    collection: collectionByHandleWithTtl(handle: $handle) {
      ...StorefrontCollection
      products(first: $first, last: $last, after: $after, before: $before) {
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        nodes {
          ...StorefrontProduct
        }
      }
    }
  }
`;
