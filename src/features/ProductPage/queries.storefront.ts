import { gql } from '@apollo/client';

export const ProductPageRelatedProductsQuery = gql`
  query ProductPageRelatedProductsQuery($productId: ID!) {
    products: productRecommendations(productId: $productId) {
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
      availableForSale
      publishedAt
      options {
        name
        id
        values
      }
    }
  }
`;
