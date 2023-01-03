import { gql } from '@apollo/client';

const ReviewsIoFragment = gql`
  fragment ReviewsIoReviews on ReviewsIo_ListProductReviewsResponse {
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
`;

export const ProductPageShopifyProductHandlesQuery = gql`
  query ProductPageShopifyProductHandlesQuery($first: Int!, $after: String) {
    products: productsWithTtl(first: $first, after: $after, sortKey: ID, query: "status:active") {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        handle
        publishedOnCurrentPublication
      }
    }
  }
`;

export const ProductPageShopifyProductQuery = gql`
  ${ReviewsIoFragment}
  query ProductPageShopifyProduct($handle: String!, $reviewsPerPage: Int, $trustpilotReviewsPerPage: Int) {
    product: productByHandleWithTtl(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      tags
      requiresSellingPlan
      publishedOnCurrentPublication
      totalInventory
      tracksInventory
      trustpilotReviews(perPage: $trustpilotReviewsPerPage) {
        productReviews {
          id
          content
          stars
          createdAt
          consumer {
            displayName
          }
        }
        links {
          rel
        }
      }
      trustpilotReviewsSummary {
        starsAverage
        numberOfReviews {
          total
          fiveStars
          fourStars
          threeStars
          twoStars
          oneStar
        }
      }
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
        lineItemAttributes {
          _id
          name
          attributes {
            key
            values {
              value
            }
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
        ...ReviewsIoReviews
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
      hasOnlyDefaultVariant
      variants(first: 50) {
        nodes {
          id
          inventoryManagement
          availableForSale
          compareAtPrice
          image {
            width
            height
            url
            altText
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
      options {
        name
        position
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

export const ProductPageReviewPageQuery = gql`
  ${ReviewsIoFragment}
  query ProductPageReviewPageQuery($sku: String!, $page: Int!, $perPage: Int!) {
    reviewData: ReviewsIo_listProductReviews(sku: $sku, page: $page, per_page: $perPage) {
      ...ReviewsIoReviews
    }
  }
`;

export const TrustpilotProductPageReviewPageQuery = gql`
  query TrustpilotProductPageReviewPageQuery($sku: [String!], $page: Int!, $perPage: Int!) {
    reviews: Trustpilot_listProductReviews(sku: $sku, page: $page, perPage: $perPage) {
      productReviews {
        id
        content
        stars
        createdAt
        consumer {
          displayName
        }
      }
      links {
        rel
      }
    }
    summary: Trustpilot_getProductReviewsSummary(sku: $sku) {
      starsAverage
      numberOfReviews {
        total
        fiveStars
        fourStars
        threeStars
        twoStars
        oneStar
      }
      links {
        rel
        href
        method
      }
    }
  }
`;

export const CreateMyProductReviewMutation = gql`
  mutation CreateMyProductReviewMutation($input: CreateMyProductReviewPropertiesPropertyInput!) {
    result: createMyProductReview(input: $input) {
      success
    }
  }
`;
