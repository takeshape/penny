import { gql } from '@apollo/client';

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
    takeshape {
      breadcrumbTitle
      parent {
        breadcrumbTitle
        shopifyCollection {
          id
          handle
          title
        }
      }
    }
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
      url(transform: { maxWidth: 500, maxHeight: 500, preferredContentType: WEBP })
      width
      height
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
    tracksInventory
    totalInventory
    publishedOnCurrentPublication
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
  ${ProductCategoryFragments}
  query ProductCategoryShopifyCollectionQuery(
    $handle: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
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
