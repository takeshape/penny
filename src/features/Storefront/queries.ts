import { gql } from '@apollo/client';
import { Storefront } from 'types/takeshape';
import { StorefrontTrendingProductsShopifyProduct } from './types';

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

export type StorefrontTrendingProductsShopifyCollectionArgs = {
  handle: string;
};

export type StorefrontTrendingProductsShopifyCollectionResponse = {
  collection: {
    products: {
      edges: {
        node: StorefrontTrendingProductsShopifyProduct;
      }[];
    };
  };
};

export const StorefrontTrendingProductsShopifyCollectionQuery = gql`
  query StorefrontTrendingProductsShopifyCollectionQuery($handle: String!) {
    collection: collectionByHandleWithTtl(handle: $handle) {
      products(first: 10) {
        edges {
          node {
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
          }
        }
      }
    }
  }
`;
