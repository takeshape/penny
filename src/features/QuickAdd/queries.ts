import { gql } from '@apollo/client';

export const QuickAddQuery = gql`
  query QuickAddQuery($handle: String!) {
    product: productByHandleWithTtl(handle: $handle) {
      id
      handle
      status
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
      hasOnlyDefaultVariant
      publishedOnCurrentPublication
      tracksInventory
      totalInventory
      variants(first: 50) {
        nodes {
          id
          availableForSale
          price
          inventoryManagement
          inventoryPolicy
          sellableOnlineQuantity
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
        }
      }
      options {
        name
        id
        values
      }
      sellingPlanGroupCount
      sellingPlanGroups(first: 1) {
        nodes {
          sellingPlans(first: 5) {
            nodes {
              id
              options
              pricingPolicies {
                ... on Shopify_SellingPlanFixedPricingPolicy {
                  adjustmentType
                  adjustmentValue {
                    ... on Shopify_MoneyV2 {
                      currencyCode
                      amount
                    }
                    ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                      percentage
                    }
                  }
                }
                ... on Shopify_SellingPlanRecurringPricingPolicy {
                  adjustmentType
                  adjustmentValue {
                    ... on Shopify_MoneyV2 {
                      currencyCode
                      amount
                    }
                    ... on Shopify_SellingPlanPricingPolicyPercentageValue {
                      percentage
                    }
                  }
                }
              }
              billingPolicy {
                ... on Shopify_SellingPlanRecurringBillingPolicy {
                  anchors {
                    day
                    month
                    type
                    cutoffDay
                  }
                  maxCycles
                  minCycles
                  intervalCount
                  interval
                }
              }
            }
          }
        }
      }
    }
  }
`;
