import { gql } from '@apollo/client';
import { ProductPageReviewsIoReviews, ProductPageShopifyProduct, ProductPageTakeshapeProduct } from './types';

export type ProductPageShopifyProductIdListResponse = {
  products: {
    items: Array<{
      name: string;
      slug: string;
      shopifyProductId: string;
    }>;
  };
};

// TODO Avoid throttling issues for now
export const ProductPageShopifyProductIdListQuery = gql`
  query ProductPageShopifyProductIdListQuery {
    products: getProductList(size: 10, sort: { field: "_createdAt", order: "asc" }) {
      items {
        name
        slug
        shopifyProductId
      }
    }
  }
`;

export type ProductPageShopifyProductArgs = {
  id: string;
  slug: string;
};

export type ProductPageShopifyProductResponse = {
  productList: {
    items: Array<{
      shopifyProduct: ProductPageShopifyProduct;
    }>;
  };
};

export const ProductPageShopifyProductQuery = gql`
  query ProductPageShopifyProductQuery($id: String, $slug: String) {
    productList: getProductList(size: 1, where: { OR: [{ slug: { eq: $slug } }, { shopifyProductId: { eq: $id } }] }) {
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

export type ProductPageTakeshapeProductArgs = {
  productId: string;
};

export type ProductPageTakeshapeProductResponse = {
  productList: {
    items: Array<ProductPageTakeshapeProduct>;
  };
};

export const ProductPageTakeshapeProductQuery = gql`
  query ProductPageTakeshapeProductQuery($productId: String!) {
    productList: getProductList(where: { shopifyProductId: { eq: $productId } }, size: 1) {
      items {
        productComponent
        hideReviews
        hideRelatedProducts
        showDetails
        showPolicies
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
