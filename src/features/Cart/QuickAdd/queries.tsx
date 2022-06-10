import { gql } from '@apollo/client';
import type { CartQuickAddReviewsIoReviews, CartQuickAddShopifyProduct } from './types';

export type CartQuickAddArgs = {
  productId: string;
  reviewsId: string;
};

export type CartQuickAddResponse = {
  product: CartQuickAddShopifyProduct;
  reviews: CartQuickAddReviewsIoReviews;
};

export const CartQuickAddQuery = gql`
  query CartQuickAddQuery($productId: ID!, $reviewsId: String!) {
    product: Shopify_product(id: $productId) {
      id
      title
      description
      descriptionHtml
      requiresSellingPlan
      featuredImage {
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
    reviews: ReviewsIo_listProductReviews(sku: $reviewsId) {
      stats {
        average
        count
      }
    }
  }
`;
