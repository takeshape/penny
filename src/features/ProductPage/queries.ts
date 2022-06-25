import { gql } from '@apollo/client';
import { ReviewsIo_ListProductReviewsResponse } from 'types/takeshape';
import {
  ProductPageRelatedProductsShopifyProduct,
  ProductPageShopifyProduct,
  ProductPageShopifyProductHandleConnection
} from './types';

export type ProductPageShopifyProductHandlesResponse = {
  products: ProductPageShopifyProductHandleConnection;
};

export type ProductPageShopifyProductHandlesArgs = {
  first: number;
  after: string;
};

export const ProductPageShopifyProductHandlesQuery = gql`
  query ProductPageShopifyProductHandlesQuery($first: Int!, $after: String) {
    products: productsWithTtl(first: $first, after: $after, sortKey: ID) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        handle
      }
    }
  }
`;

const ProductPageProductFragment = gql`
  fragment ProductPageProduct on Shopify_Product {
    id
    handle
    title
    description
    descriptionHtml
    requiresSellingPlan
    takeshape {
      _id
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
    standardizedProductType {
      productTaxonomyNode {
        name
      }
    }
    collections(first: 25) {
      nodes {
        id
        handle
        title
        productsCount
        ruleSet {
          rules {
            column
            condition
            relation
          }
        }
        takeshape {
          breadcrumbTitle
          parent {
            breadcrumbTitle
            shopifyCollection {
              id
              handle
              title
            }
          }
        }
      }
    }
    reviews {
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
`;

export type ProductPageShopifyProductResponse = {
  product: ProductPageShopifyProduct;
};

export type ProductPageShopifyProductArgs = {
  handle: string;
};

export const ProductPageShopifyProductQuery = gql`
  ${ProductPageProductFragment}
  query ProductPageShopifyProduct($handle: String!) {
    product: productByHandleWithTtl(handle: $handle) {
      ...ProductPageProduct
    }
  }
`;

export type ProductPageReviewPageArgs = {
  sku: string;
  page: string;
  perPage: string;
};

export type ProductPageReviewPageResponse = {
  reviewData: ReviewsIo_ListProductReviewsResponse;
};

export const ProductPageReviewPageQuery = gql`
  query ($sku: String!, $page: String!, $perPage: String!) {
    reviewData: ReviewsIo_listProductReviews(sku: $sku, page: $page, per_page: $perPage) {
      ratings
      reviews {
        data {
          reviewer {
            profile_picture
            gravatar
            first_name
            last_name
            verified_buyer
          }
          title
          rating
          review
          date_created
        }
      }
    }
  }
`;

export type RelatedProductsShopifyCollectionArgs = {
  handle: string;
};

export type RelatedProductsShopifyCollectionResponse = {
  collection: {
    products: {
      edges: {
        node: ProductPageRelatedProductsShopifyProduct;
      }[];
    };
  };
};

export const RelatedProductsShopifyCollectionQuery = gql`
  query RelatedProductsShopifyCollectionQuery($handle: String!) {
    collection: collectionByHandleWithTtl(handle: $handle) {
      products(first: 10) {
        edges {
          node {
            id
            handle
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
            sellingPlanGroupCount
          }
        }
      }
    }
  }
`;
