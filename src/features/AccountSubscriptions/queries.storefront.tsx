import { gql } from '@apollo/client';

export const QuickAddQuery = gql`
  query QuickAddQuery($handle: String!) {
    product: productByHandle(handle: $handle) {
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
      totalInventory
      variants(first: 50) {
        nodes {
          id
          availableForSale
          priceV2 {
            amount
            currencyCode
          }
          currentlyNotInStock
          quantityAvailable
          sku
          title
          description: metafield(namespace: "my_fields", key: "description") {
            type
            value
          }
          selectedOptions {
            name
            value
          }
          sellingPlanAllocations(first: 10) {
            nodes {
              sellingPlan {
                id
                options {
                  name
                  value
                }
                priceAdjustments {
                  adjustmentValue {
                    ... on SellingPlanFixedAmountPriceAdjustment {
                      adjustmentAmount {
                        amount
                        currencyCode
                      }
                    }
                    ... on SellingPlanFixedPriceAdjustment {
                      price {
                        amount
                        currencyCode
                      }
                    }
                    ... on SellingPlanPercentagePriceAdjustment {
                      adjustmentPercentage
                    }
                  }
                }
              }
            }
          }
        }
      }
      options {
        name
        id
        values
      }
      sellingPlanGroups(first: 1) {
        nodes {
          name
          options {
            name
            values
          }
        }
      }
    }
  }
`;
