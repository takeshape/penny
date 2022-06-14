import { gql } from '@apollo/client';
import {
  ProductPageReviewsIoReviews,
  ProductPageShopifyProduct,
  ProductPageTakeshapeItem,
  ProductPageTakeshapeItemDetails,
  ProductPageTakeshapeItemPolicies
} from './types';

export type ProductPageShopifyProductIdListResponse = {
  products: {
    items: Array<{
      shopifyProductId: string;
    }>;
  };
};

export const ProductPageShopifyProductIdListQuery = gql`
  query ProductPageShopifyProductIdListQuery {
    products: getProductList(size: 50) {
      items {
        shopifyProductId
      }
    }
  }
`;

export type ProductPageShopifyProductArgs = {
  id: string;
};

export type ProductPageShopifyProductReponse = {
  productList: {
    items: Array<
      ProductPageTakeshapeItem & {
        shopifyProduct: ProductPageShopifyProduct;
      }
    >;
  };
};

export const ProductPageShopifyProductQuery = gql`
  query ProductPageShopifyProductQuery($id: String!) {
    productList: getProductList(where: { shopifyProductId: { eq: $id } }, size: 1) {
      items {
        productComponent
        hideReviews
        hideRelatedProducts
        showDetails
        showPolicies
        details {
          _id
          text {
            primaryHtml
            secondaryHtml
          }
          details {
            image {
              path
              description
            }
            descriptionHtml
          }
        }
        policies {
          _id
          policies {
            image {
              path
              description
            }
            nameHtml
            descriptionHtml
          }
        }
        shopifyProduct {
          id
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
          images(first: 4) {
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
                sellingPlans(first: 5) {
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

export type ProductPageTakeshapeDetailsArgs = {
  productId: string;
};

export type ProductPageTakeshapeDetailsResponse = {
  productList: {
    items: Array<ProductPageTakeshapeItemDetails>;
  };
};

export const ProductPageTakeshapeDetailsQuery = gql`
  query ProductPageTakeshapeDetailsQuery($productId: String!) {
    productList: getProductList(where: { shopifyProductId: { eq: $productId } }, size: 1) {
      items {
        details {
          _id
          text {
            primaryHtml
            secondaryHtml
          }
          details {
            image {
              path
              description
            }
            descriptionHtml
          }
        }
      }
    }
  }
`;

export type ProductPageTakeshapePoliciesArgs = {
  productId: string;
};

export type ProductPageTakeshapePoliciesResponse = {
  productList: {
    items: Array<ProductPageTakeshapeItemPolicies>;
  };
};

export const ProductPageTakeshapePoliciesQuery = gql`
  query ProductPageTakeshapePoliciesQuery($productId: String!) {
    productList: getProductList(where: { shopifyProductId: { eq: $productId } }, size: 1) {
      items {
        policies {
          _id
          policies {
            image {
              path
              description
            }
            nameHtml
            descriptionHtml
          }
        }
      }
    }
  }
`;

export type ProductPageReviewsIoReviewsArgs = {
  sku: string;
};

export type ProductPageReviewsIoReviewsResponse = {
  reviews: ProductPageReviewsIoReviews;
};

export const ProductPageReviewsIoReviewsQuery = gql`
  query ProductPageReviewsIoReviewsQuery($sku: String!) {
    reviews: ReviewsIo_listProductReviews(sku: $sku) {
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
