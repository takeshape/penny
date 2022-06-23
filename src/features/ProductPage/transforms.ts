import { getImageUrl } from '@takeshape/routing';
import { getReview, getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getPrice,
  getProductOptions,
  getProductUrl,
  getProductVariants,
  getSeo
} from 'transforms/shopify';
import {
  ProductPageShopifyProductHandlesResponse,
  ProductPageShopifyProductResponse,
  RelatedProductsShopifyCollectionResponse
} from './queries';
import {
  ProductPageDetails,
  ProductPageOptions,
  ProductPagePolicies,
  ProductPagePolicy,
  ProductPageProduct,
  ProductPageProductComponent,
  ProductPageReviewHighlights,
  ProductPageReviewsReviewList,
  RelatedProductsProduct,
  RelatedProductsShopifyProduct
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

function getRelatedProduct(shopifyProduct: RelatedProductsShopifyProduct): RelatedProductsProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
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

export function getRelatedProductList(response: RelatedProductsShopifyCollectionResponse): RelatedProductsProduct[] {
  const productEdges = response?.collection?.products?.edges;

  if (!productEdges) {
    return;
  }

  return productEdges.map(({ node }) => getRelatedProduct(node));
}
