import { gql } from '@apollo/client';

export const ProductPageRelatedProductsShopifyQuery = gql`
  fragment TESTRelatedProduct on Product {
    id
    handle
    title
    description
    descriptionHtml
    featuredImage {
      id
      url(transform: { maxWidth: 500, maxHeight: 500, preferredContentType: WEBP })
      width
      height
      altText
    }
    priceRange {
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
    options {
      name
      id
      values
    }
  }

  query TESTProductPageRelatedProductsShopifyQuery($relatedCount: Int!, $backfillCount: Int!, $query: String) {
    products: products(first: $relatedCount, query: $query, sortKey: BEST_SELLING) {
      nodes {
        ...TESTRelatedProduct
      }
    }
    backfill: products(first: $backfillCount, sortKey: BEST_SELLING) {
      nodes {
        ...TESTRelatedProduct
      }
    }
  }
`;
