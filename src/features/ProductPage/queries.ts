import { gql } from '@apollo/client';
import type { ProductPageReviewsIoReviews, ProductPageShopifyProduct } from './types';

export type ProductPageShopifyProductIdListResponse = {
  products: {
    edges: Array<{
      node: {
        id: string;
      };
    }>;
  };
};

export const ProductPageShopifyProductIdListQuery = gql`
  query ProductPageShopifyProductIdListQuery {
    products: Shopify_products(first: 100) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export type ProductPageShopifyProductArgs = {
  productId: string;
  reviewsId: string;
};

export type ProductPageShopifyProductReponse = {
  product: ProductPageShopifyProduct;
  reviews: ProductPageReviewsIoReviews;
};

export const ProductPageShopifyProductQuery = gql`
  query ProductPageShopifyProductQuery($productId: ID!, $reviewsId: String) {
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
      images(first: 10) {
        edges {
          node {
            width
            height
            url
            altText
          }
        }
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
      seo {
        title
        description
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
            image {
              width
              height
              url
            }
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
      reviews {
        data {
          product_review_id
          rating
          title
          review
          date_created
          timeago
          reviewer {
            first_name
            last_name
            verified_buyer
            address
            profile_picture
            gravatar
          }
        }
        per_page
        current_page
        total
      }
    }
  }
`;
