import { cloneDeep } from '@apollo/client/utilities';
import { getImageUrl } from '@takeshape/routing';
import { getReview, getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getCollectionUrl,
  getPrice,
  getProductOptions,
  getProductUrl,
  getProductVariants,
  getSeo
} from 'transforms/shopify';
import { Shopify_Collection } from 'types/takeshape';
import {
  ProductPageShopifyProductHandlesResponse,
  ProductPageShopifyProductResponse,
  RelatedProductsShopifyCollectionResponse
} from './queries';
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
  ProductPageReviewsReviewList
} from './types';

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
    options: getProductOptions(shopifyProduct.options, variants)
  };
}

export function getReviewList(response: ProductPageShopifyProductResponse): ProductPageReviewsReviewList {
  const { stats, reviews } = response?.product?.reviews ?? {};

  return {
    stats: getStats(stats),
    currentPage: reviews?.current_page ?? null,
    totalPages: reviews?.total ?? null,
    perPage: reviews?.per_page ?? null,
    data: reviews?.data?.map(getReview) ?? []
  };
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
    component: getProductComponent(takeshapeProduct.productComponent)
  };
}

export function getProductPageParams(response: ProductPageShopifyProductHandlesResponse) {
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
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroupCount > 0,
    hasStock: shopifyProduct.totalInventory > 0,
    options: getProductOptions(shopifyProduct.options)
  };
}

export function getRelatedProductList(
  response: RelatedProductsShopifyCollectionResponse
): ProductPageRelatedProductsProduct[] {
  const productEdges = response?.collection?.products?.edges;

  if (!productEdges) {
    return;
  }

  return productEdges.map(({ node }) => getRelatedProduct(node));
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
  const collections = response?.product?.collections;

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

  breadcrumbs.push({
    id: match.id,
    // TODO Allow override in TakeShape data
    name: match.takeshape.breadcrumbTitle ?? match.title,
    href: getCollectionUrl(match.handle)
  });

  return breadcrumbs;
}
