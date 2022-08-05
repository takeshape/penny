import { cloneDeep } from '@apollo/client/utilities';
import { getImageUrl } from '@takeshape/routing';
import formatRelative from 'date-fns/formatRelative';
import { getProductLineItemAttributes } from 'transforms/product';
import { getReview, getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getCollectionUrl,
  getPrice,
  getProductUrl,
  getProductVariantOptions,
  getProductVariants,
  getSeo
} from 'transforms/shopify';
import { ProductPageRelatedProductsQueryResponse } from 'types/storefront';
import {
  ProductPageReviewPageQueryResponse,
  ProductPageShopifyProductHandlesQueryResponse,
  ProductPageShopifyProductResponse,
  Shopify_MoneyV2,
  TrustpilotProductPageReviewPageQueryResponse,
  TrustpilotProductReviews,
  TrustpilotProductReviewsSummary
} from 'types/takeshape';
import { TrustpilotSummary } from 'types/trustpilot';
import {
  ProductPageBreadcrumbs,
  ProductPageDetails,
  ProductPageOptions,
  ProductPagePolicies,
  ProductPagePolicy,
  ProductPageProduct,
  ProductPageProductComponent,
  ProductPageRelatedProductsProduct,
  ProductPageRelatedProductsShopifyProduct,
  ProductPageReviewHighlights,
  ProductPageReviewsIoReviews,
  ProductPageReviewsReviewList,
  TrustpilotProductPageReviewsReviewList
} from './types';

type Shopify_Collection = ProductPageShopifyProductResponse['product']['collections']['nodes'][0];

export function getProduct(response: ProductPageShopifyProductResponse): ProductPageProduct {
  const shopifyProduct = response?.product;

  if (!shopifyProduct) {
    return null;
  }

  const variants = getProductVariants(shopifyProduct);
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    tags: shopifyProduct.tags,
    featuredImage: getImage(shopifyProduct.featuredImage),
    images: shopifyProduct.images?.edges?.map(({ node }) => getImage(node)) ?? [getImage()],
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    variants,
    seo: getSeo(shopifyProduct),
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroupCount > 0,
    hasStock: shopifyProduct.totalInventory > 0,
    variantOptions: getProductVariantOptions(shopifyProduct.options, variants),
    lineItemAttributes: getProductLineItemAttributes(shopifyProduct.takeshape.lineItemAttributes)
  };
}

export function getReviewList(
  reviewsioReviews?: Pick<ProductPageReviewsIoReviews, 'stats' | 'reviews'>
): ProductPageReviewsReviewList {
  const { stats, reviews } = reviewsioReviews ?? {};

  return {
    stats: getStats(stats),
    currentPage: reviews?.current_page ?? null,
    totalPages: reviews?.total && reviews?.per_page ? Math.ceil(reviews.total / reviews.per_page) : null,
    perPage: reviews?.per_page ?? null,
    items: reviews?.data?.map(getReview) ?? []
  };
}

export function getTrustpilotReviewList(reviews: TrustpilotProductReviews): TrustpilotProductPageReviewsReviewList {
  return {
    items: reviews.productReviews.map((review) => {
      return {
        id: `${review.consumer.displayName}-${review.createdAt}`,
        createdAt: formatRelative(new Date(review.createdAt), Date.now()),
        stars: review.stars,
        content: review.content,
        consumer: {
          displayName: review.consumer.displayName
        }
      };
    }),
    nextPage: reviews.links.some((link) => link.rel === 'next-page')
  };
}

export function getProductReviewsPage(response: ProductPageReviewPageQueryResponse): ProductPageReviewsReviewList {
  const reviews = response?.reviewData;

  if (!reviews) {
    return null;
  }

  return getReviewList(reviews);
}

export function getTrustpilotSummary(summaryData: TrustpilotProductReviewsSummary): TrustpilotSummary {
  const total = summaryData.numberOfReviews.total;

  return {
    average: total === 0 ? null : summaryData.starsAverage,
    total
  };
}

export function getTrustpilotProductReviewsPage(
  response: TrustpilotProductPageReviewPageQueryResponse
): TrustpilotProductPageReviewsReviewList {
  const reviews = response?.reviewData;

  if (!reviews) {
    return null;
  }

  return getTrustpilotReviewList(reviews);
}

export function getTrustpilotProductReviews(
  response: ProductPageShopifyProductResponse
): TrustpilotProductPageReviewsReviewList {
  const reviews = response?.product.trustpilotReviews;

  if (!reviews) {
    return null;
  }

  return getTrustpilotReviewList(reviews);
}

export function getTrustpilotReviewsSummary(response: ProductPageShopifyProductResponse): TrustpilotSummary {
  const summary = response?.product.trustpilotReviewsSummary;

  if (!summary) {
    return null;
  }

  return getTrustpilotSummary(summary);
}

export function getProductReviews(response: ProductPageShopifyProductResponse): ProductPageReviewsReviewList {
  const reviews = response?.product?.reviews;

  if (!reviews) {
    return null;
  }

  return getReviewList(reviews);
}

export function getReviewHighlights(response: ProductPageShopifyProductResponse): ProductPageReviewHighlights {
  const { stats, reviews } = response?.product?.reviews ?? {};

  return {
    stats: getStats(stats),
    featured: reviews?.data?.slice(0, 5).map(getReview) ?? []
  };
}

export function getPolicies(response: ProductPageShopifyProductResponse): ProductPagePolicies {
  const policies = response?.product?.takeshape?.policies;

  if (!policies) {
    return null;
  }

  return {
    policies: policies.policies.map<ProductPagePolicy>((policy) => ({
      name: policy.nameHtml.replace(/<\/?p>/g, ''),
      description: policy.descriptionHtml.replace(/<\/?p>/g, ''),
      image: {
        url: getImageUrl(policy.image.path),
        altText: policy.image.description ?? ''
      }
    }))
  };
}

export function getDetails(response: ProductPageShopifyProductResponse): ProductPageDetails {
  const details = response?.product?.takeshape?.details;

  if (!details) {
    return null;
  }

  return {
    text: {
      // Using canvas fields to support inline tags only
      primary: details.text.primaryHtml.replace(/<\/?p>/g, ''),
      secondary: details.text.secondaryHtml.replace(/<\/?p>/g, '')
    },
    details: details.details.map((detail) => ({
      image: {
        url: getImageUrl(detail.image.path),
        altText: detail.image.description ?? ''
      },
      description: detail.descriptionHtml.replace(/<\/?p>/g, '')
    }))
  };
}

function getProductComponent(productComponent?: string): ProductPageProductComponent {
  switch (productComponent) {
    case 'withImage':
      return 'withImage';
    case 'withImageGrid':
    default:
      return 'withImageGrid';
  }
}

export function getPageOptions(response: ProductPageShopifyProductResponse): ProductPageOptions {
  const takeshapeProduct = response?.product?.takeshape;

  if (!takeshapeProduct) {
    return null;
  }

  return {
    showDetails: takeshapeProduct.showDetails ?? false,
    showPolicies: takeshapeProduct.showPolicies ?? false,
    showReviews: takeshapeProduct.hideReviews === true ? false : true,
    showRelatedProducts: takeshapeProduct.hideRelatedProducts === true ? false : true,
    showBreadcrumbs: takeshapeProduct.hideBreadcrumbs === true ? false : true,
    component: getProductComponent(takeshapeProduct.productComponent)
  };
}

export function getProductPageParams(response: ProductPageShopifyProductHandlesQueryResponse) {
  const nodes = response?.products?.nodes;

  if (!nodes) {
    return null;
  }

  return nodes.map((node) => ({
    params: {
      product: [node.handle]
    }
  }));
}

function getRelatedProduct(
  shopifyProduct: ProductPageRelatedProductsShopifyProduct
): ProductPageRelatedProductsProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    featuredImage: getImage(shopifyProduct.featuredImage),
    // The currencyCode enums incompatible across the two product types...
    priceMin: getPrice(shopifyProduct.priceRange.minVariantPrice as unknown as Shopify_MoneyV2),
    priceMax: getPrice(shopifyProduct.priceRange.maxVariantPrice as unknown as Shopify_MoneyV2),
    variantOptions: getProductVariantOptions(shopifyProduct.options),
    hasStock: shopifyProduct.totalInventory > 0
  };
}

export function getRelatedProductList(
  response: ProductPageRelatedProductsQueryResponse,
  limit = 0
): ProductPageRelatedProductsProduct[] {
  let products = response?.products;

  if (!products) {
    return null;
  }

  return products
    .map((node) => getRelatedProduct(node))
    .filter((product) => product.hasStock)
    .slice(0, limit);
}

function collectionHasParent(collection: Shopify_Collection) {
  return Boolean(collection.takeshape?.parent);
}

function collectionHasTypeEquals(collection: Shopify_Collection) {
  return Boolean(collection.ruleSet?.rules?.findIndex((rule) => rule.column === 'TYPE' && rule.relation === 'EQUALS'));
}

function collectionHasRules(collection: Shopify_Collection) {
  return Boolean(collection.ruleSet?.rules);
}

export function getBreadcrumbs(response: ProductPageShopifyProductResponse): ProductPageBreadcrumbs {
  const product = response?.product;
  const collections = product?.collections;

  if (!collections) {
    return null;
  }

  const collectionNodes = cloneDeep(collections.nodes);
  const sortedCollections = collectionNodes.sort((a, b) => a.productsCount - b.productsCount);

  // 1. (BEST) HAS PARENT & HAS RULES & HAS TYPE EQUALS & HAS HIGHEST PRODUCT COUNT
  let match = sortedCollections.find((collection) => {
    return collectionHasParent(collection) && collectionHasTypeEquals(collection);
  });

  if (!match) {
    // 2. HAS PARENT & HAS RULES & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return collectionHasParent(collection) && collectionHasRules(collection);
    });
  }

  if (!match) {
    // 3. HAS PARENT & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return collectionHasParent(collection);
    });
  }

  if (!match) {
    // 4. HAS TYPE EQUALS & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return collectionHasTypeEquals(collection);
    });
  }

  if (!match) {
    // 5. HAS RULES & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return collectionHasRules(collection);
    });
  }

  if (!match) {
    // 6. HAS HIGHEST PRODUCT COUNT
    match = sortedCollections[0];
  }

  if (!match) {
    return null;
  }

  const breadcrumbs: ProductPageBreadcrumbs = [];

  if (collectionHasParent(match)) {
    breadcrumbs.push({
      id: match.takeshape.parent.shopifyCollection.id,
      name: match.takeshape.parent.breadcrumbTitle ?? match.takeshape.parent.shopifyCollection.title,
      href: getCollectionUrl(match.takeshape.parent.shopifyCollection.handle)
    });
  }

  return [
    ...breadcrumbs,
    {
      id: match.id,
      name: match.takeshape.breadcrumbTitle ?? match.title,
      href: getCollectionUrl(match.handle)
    },
    {
      id: product.id,
      name: product.title,
      href: getProductUrl(product.handle)
    }
  ];
}
