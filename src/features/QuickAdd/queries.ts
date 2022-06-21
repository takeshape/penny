import { gql } from '@apollo/client';
import { QuickAddShopifyProduct } from './types';

export type QuickAddArgs = {
  id: string;
};

export type QuickAddResponse = {
  productList: {
    items: Array<{
      shopifyProduct: QuickAddShopifyProduct;
    }>;
  };
};

export const QuickAddQuery = gql`
  query ProductPageShopifyProductQuery($id: String!) {
    productList: getProductListWithTtl(where: { shopifyProductId: { eq: $id } }, size: 1) {
      items {
        shopifyProduct {
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
          variants(first: 50) {
            edges {
              node {
                id
                availableForSale
                compareAtPrice
                price
                inventoryPolicy
                sellableOnlineQuantity
                sku
                title
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            position
            id
            values
          }
          sellingPlanGroupCount
          sellingPlanGroups(first: 1) {
            edges {
              node {
                sellingPlans(first: 10) {
                  edges {
                    node {
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
        }
      }
    }
  }
`;
