import { gql } from '@apollo/client';
import { ProductPageProps, ProductPageReviewsIoReviews, ProductPageShopifyProduct } from './types';

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
      ProductPageProps & {
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
        shopifyProduct {
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

// export const ProductPageShopifyProductQuery = gql`
//   query ProductPageShopifyProductQuery($id: ID!) {
//     product: Shopify_product(id: $id) {
//       id
//       title
//       description
//       descriptionHtml
//       requiresSellingPlan
//       featuredImage {
//         width
//         height
//         url
//         altText
//       }
//       images(first: 10) {
//         edges {
//           node {
//             width
//             height
//             url
//             altText
//           }
//         }
//       }
//       priceRangeV2 {
//         maxVariantPrice {
//           currencyCode
//           amount
//         }
//         minVariantPrice {
//           currencyCode
//           amount
//         }
//       }
//       seo {
//         title
//         description
//       }
//       publishedAt
//       totalVariants
//       totalInventory
//       variants(first: 50) {
//         edges {
//           node {
//             id
//             availableForSale
//             compareAtPrice
//             image {
//               width
//               height
//               url
//             }
//             price
//             inventoryPolicy
//             sellableOnlineQuantity
//             sku
//             title
//             selectedOptions {
//               name
//               value
//             }
//           }
//         }
//       }

//       options {
//         name
//         position
//         id
//         values
//       }
//       sellingPlanGroupCount
//       sellingPlanGroups(first: 1) {
//         edges {
//           node {
//             sellingPlans(first: 10) {
//               edges {
//                 node {
//                   id
//                   options
//                   pricingPolicies {
//                     ... on Shopify_SellingPlanFixedPricingPolicy {
//                       adjustmentType
//                       adjustmentValue {
//                         ... on Shopify_MoneyV2 {
//                           currencyCode
//                           amount
//                         }
//                         ... on Shopify_SellingPlanPricingPolicyPercentageValue {
//                           percentage
//                         }
//                       }
//                     }
//                     ... on Shopify_SellingPlanRecurringPricingPolicy {
//                       adjustmentType
//                       adjustmentValue {
//                         ... on Shopify_MoneyV2 {
//                           currencyCode
//                           amount
//                         }
//                         ... on Shopify_SellingPlanPricingPolicyPercentageValue {
//                           percentage
//                         }
//                       }
//                     }
//                   }
//                   billingPolicy {
//                     ... on Shopify_SellingPlanRecurringBillingPolicy {
//                       anchors {
//                         day
//                         month
//                         type
//                       }
//                       maxCycles
//                       minCycles
//                       intervalCount
//                       interval
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export type ProductPageReviewsIoReviewsArgs = {
  sku: string;
};

export type ProductPageReviewsIoReviewsReponse = {
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
