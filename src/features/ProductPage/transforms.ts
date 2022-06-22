import { getImageUrl } from '@takeshape/routing';
import slug from 'slug';
import { getReview, getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getPrice,
  getProductOptions,
  getProductUrl,
  getProductVariants,
  getSeo,
  shopifyGidToId,
  shopifyProductIdToGid
} from 'transforms/shopify';
import { isNumericString } from 'utils/types';
import {
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductIdListResponse,
  ProductPageShopifyProductResponse,
  ProductPageTakeshapeProductResponse,
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
  const shopifyProduct = response?.productList?.items?.[0]?.shopifyProduct;

  if (!shopifyProduct) {
    return null;
  }

  const variants = getProductVariants(shopifyProduct);
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    url: getProductUrl(shopifyProduct.id, shopifyProduct.takeshape),
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

export function getPolicies(response: ProductPageTakeshapeProductResponse): ProductPagePolicies {
  const policies = response?.productList?.items?.[0]?.policies;

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

export function getDetails(response: ProductPageTakeshapeProductResponse): ProductPageDetails {
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

export function getPageOptions(response: ProductPageTakeshapeProductResponse): ProductPageOptions {
  const takeshapeProduct = response?.productList?.items?.[0];

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

export function getProductPageIdOrSlug(idOrSlug: string) {
  // This is a product id, 9 is arbitrary, but Shopify Product Ids shouldn't be shorter.
  if (idOrSlug.length > 9 && isNumericString(idOrSlug)) {
    return {
      id: shopifyProductIdToGid(idOrSlug),
      slug: ''
    };
  }

  return {
    id: '',
    slug: idOrSlug
  };
}

export function getProductPageParams(item: ProductPageShopifyProductIdListResponse['products']['items'][0]) {
  const id = item.slug ? [item.slug] : [shopifyGidToId(item.shopifyProductId), slug(item.name)];

  return {
    params: {
      id
    }
  };
}

function getRelatedProduct(shopifyProduct: RelatedProductsShopifyProduct): RelatedProductsProduct {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    url: getProductUrl(shopifyProduct.id, shopifyProduct.takeshape),
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
