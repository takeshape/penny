import { gql } from '@apollo/client';

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

export const ProductPageShopifyProductQuery = gql`
  query ProductPageShopifyProduct($handle: String!, $reviewsPerPage: Int) {
    product: productByHandleWithTtl(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      requiresSellingPlan
      takeshape {
        _id
        productComponent
        hideBreadcrumbs
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
      reviews(per_page: $reviewsPerPage) {
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
        url(transform: { maxWidth: 800, maxHeight: 800, preferredContentType: WEBP })
        width
        height
        altText
      }
      images(first: 4) {
        edges {
          node {
            id
            url(transform: { maxWidth: 800, maxHeight: 800, preferredContentType: WEBP })
            width
            height
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
`;

export const ProductPageReviewPageQuery = gql`
  query ProductPageReviewPageQuery($sku: String!, $page: Int!, $perPage: Int!) {
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
