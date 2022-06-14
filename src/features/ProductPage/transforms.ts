import { getReview, getStats } from 'transforms/reviewsIo';
import { createImageGetter, getOptions, getPrice, getSeo, getVariants, shopifyGidToId } from 'transforms/shopify';
import { buildImageUrl } from 'transforms/takeshape';
import {
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductReponse,
  ProductPageTakeshapeDetailsResponse,
  ProductPageTakeshapePoliciesResponse
} from './queries';
import {
  ProductPageDetails,
  ProductPageOptions,
  ProductPagePolicies,
  ProductPagePolicy,
  ProductPageProduct,
  ProductPageProductComponent,
  ProductPageReviewHighlights,
  ProductPageReviewsReviewList
} from './types';

export function getProduct(response: ProductPageShopifyProductReponse): ProductPageProduct {
  const shopifyProduct = response?.productList?.items?.[0]?.shopifyProduct;

  if (!shopifyProduct) {
    return null;
  }

  const variants = getVariants(shopifyProduct);
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    url: `/product/${shopifyGidToId(shopifyProduct.id)}`,
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
    options: getOptions(shopifyProduct.options, variants)
  };
}

export function getReviewList(response: ProductPageReviewsIoReviewsResponse): ProductPageReviewsReviewList {
  const { stats, reviews } = response?.reviews ?? {};

  return {
    stats: getStats(stats),
    currentPage: reviews?.current_page ?? null,
    totalPages: reviews?.total ?? null,
    perPage: reviews?.per_page ?? null,
    data: reviews?.data?.map(getReview) ?? []
  };
}

export function getReviewHighlights(response: ProductPageReviewsIoReviewsResponse): ProductPageReviewHighlights {
  const { stats, reviews } = response?.reviews ?? {};

  return {
    stats: getStats(stats),
    featured: reviews?.data?.slice(0, 5).map(getReview) ?? []
  };
}

export function getPolicies(response: ProductPageTakeshapePoliciesResponse): ProductPagePolicies {
  const policies = response?.productList?.items?.[0]?.policies;

  if (!policies) {
    return null;
  }

  return {
    policies: policies.policies.map<ProductPagePolicy>((policy) => ({
      name: policy.nameHtml.replace(/<\/?p>/g, ''),
      description: policy.descriptionHtml.replace(/<\/?p>/g, ''),
      image: {
        url: buildImageUrl(policy.image.path),
        altText: policy.image.description ?? ''
      }
    }))
  };
}

export function getDetails(response: ProductPageTakeshapeDetailsResponse): ProductPageDetails {
  const details = response?.productList?.items?.[0]?.details;

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
        url: buildImageUrl(detail.image.path),
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

export function getPageOptions(response: ProductPageShopifyProductReponse): ProductPageOptions {
  const takeshapeItem = response?.productList?.items?.[0];

  if (!takeshapeItem) {
    return null;
  }

  return {
    showDetails: takeshapeItem.showDetails ?? false,
    showPolicies: takeshapeItem.showPolicies ?? false,
    showReviews: takeshapeItem.hideReviews === true ? false : true,
    showRelatedProducts: takeshapeItem.hideRelatedProducts === true ? false : true,
    component: getProductComponent(takeshapeItem.productComponent)
  };
}
