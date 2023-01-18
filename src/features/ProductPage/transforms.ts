import { cloneDeep } from '@apollo/client/utilities';
import { getImageUrl } from '@takeshape/routing';
import { enableReviewsIo, enableTrustpilot } from 'config';
import { ProductProps } from 'features/ProductPage/Product/Product';
import { GetStaticPathsResult } from 'next';
import { ProductJsonLdProps } from 'next-seo';
import { getProductLineItemAttributes } from 'transforms/product';
import { getReview, getReviewList as getReviewsIoReviewList, getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getCollectionUrl,
  getPrice,
  getProductHasStock,
  getProductIsAvailable,
  getProductUrl,
  getProductVariantOptions,
  getProductVariants,
  getSeo
} from 'transforms/shopify';
import { ReviewList } from 'types/review';
import { ProductPageRelatedProductsQueryResponse } from 'types/storefront';
import {
  ProductPageReviewPageQueryResponse,
  ProductPageShopifyProductHandlesQueryResponse,
  ProductPageShopifyProductResponse,
  Shopify_MoneyV2
} from 'types/takeshape';
import { DeepRequired } from 'types/util';
import { isNotNullish } from 'utils/types';
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
  ProductPageReviewsReviewList,
  ResponseCollection
} from './types';

export function getProduct(response: ProductPageShopifyProductResponse): ProductPageProduct | null {
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
    variantsCount: variants.length,
    variants,
    seo: getSeo(shopifyProduct),
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroupCount > 0,
    variantOptions: getProductVariantOptions(shopifyProduct.options, variants),
    lineItemAttributes: getProductLineItemAttributes(shopifyProduct.takeshape?.lineItemAttributes ?? null) ?? [],
    hasStock: getProductHasStock(shopifyProduct),
    isAvailable: getProductIsAvailable(shopifyProduct)
  };
}

export function getProductReviewsPage(
  response: ProductPageReviewPageQueryResponse
): ProductPageReviewsReviewList | null {
  const reviews = response?.reviewData;

  if (!reviews) {
    return null;
  }

  return getReviewsIoReviewList(reviews);
}

export function getTrustpilotProductReviews(
  response?: ProductPageShopifyProductResponse
): ProductPageReviewsReviewList | null {
  // To enable Trustpilot reviews follow the directions in /docs/trustpilot and
  // remove the following statement and uncomment the lines below
  return null;
  // if (!response?.product?.trustpilotReviews) {
  //   return null;
  // }
  //
  // const { trustpilotReviewsSummary, trustpilotReviews } = response?.product ?? {};
  // return getTrustpilotReviewList(trustpilotReviews, trustpilotReviewsSummary);
}

export function getReviewsIoProductReviews(
  response?: ProductPageShopifyProductResponse
): ProductPageReviewsReviewList | null {
  const reviews = response?.product?.reviews;

  if (!reviews) {
    return null;
  }

  return getReviewsIoReviewList(reviews);
}

export function getReviewHighlights(response: ProductPageShopifyProductResponse): ProductPageReviewHighlights {
  const { stats, reviews } = response?.product?.reviews ?? {};

  return {
    stats: getStats(stats ?? null),
    featured:
      reviews?.data
        ?.slice(0, 5)
        .map((review) => review && getReview(review))
        .filter(isNotNullish) ?? []
  };
}

export function getPolicies(response: ProductPageShopifyProductResponse | null): ProductPagePolicies | null {
  const policies = response?.product?.takeshape?.policies;

  if (!policies) {
    return null;
  }

  return {
    policies: policies.policies.map<ProductPagePolicy>((policy) => ({
      name: policy?.nameHtml?.replace(/<\/?p>/g, '') ?? '',
      description: policy?.descriptionHtml?.replace(/<\/?p>/g, '') ?? '',
      image: policy?.image?.path
        ? {
            url: getImageUrl(
              policy.image.path,
              !policy.image.path.endsWith('svg') ? { fm: 'webp', lossless: 'true' } : undefined
            ),
            altText: policy.image.description ?? ''
          }
        : null
    }))
  };
}

export function getDetails(response: ProductPageShopifyProductResponse | null): ProductPageDetails | null {
  const details = response?.product?.takeshape?.details;

  if (!details) {
    return null;
  }

  return {
    text: {
      // Using canvas fields to support inline tags only
      primary: details.text?.primaryHtml?.replace(/<\/?p>/g, '') ?? '',
      secondary: details.text?.secondaryHtml?.replace(/<\/?p>/g, '') ?? ''
    },
    details:
      details.details.map((detail) => ({
        image: detail.image?.path
          ? {
              url: getImageUrl(
                detail.image.path,
                !detail.image.path.endsWith('svg') ? { fm: 'webp', lossless: 'true' } : undefined
              ),
              altText: detail.image.description ?? ''
            }
          : null,
        description: detail.descriptionHtml?.replace(/<\/?p>/g, '') ?? ''
      })) ?? []
  };
}

function getProductComponent(productComponent?: string | null): ProductPageProductComponent {
  switch (productComponent) {
    case 'withImage':
      return 'withImage';
    case 'withImageGrid':
    default:
      return 'withImageGrid';
  }
}

const defaultPageOptions = {
  showDetails: false,
  showPolicies: false,
  showReviewsIo: enableReviewsIo,
  showTrustpilot: enableTrustpilot,
  showRelatedProducts: true,
  showBreadcrumbs: true,
  component: getProductComponent()
};

export function getPageOptions(response?: ProductPageShopifyProductResponse): ProductPageOptions {
  const takeshapeProduct = response?.product?.takeshape;

  if (!takeshapeProduct) {
    return defaultPageOptions;
  }

  return {
    showDetails: takeshapeProduct.showDetails ?? defaultPageOptions.showDetails,
    showPolicies: takeshapeProduct.showPolicies ?? defaultPageOptions.showPolicies,
    showReviewsIo: takeshapeProduct.hideReviews === true ? false : defaultPageOptions.showReviewsIo,
    showTrustpilot: takeshapeProduct.hideReviews === true ? false : defaultPageOptions.showTrustpilot,
    showRelatedProducts: takeshapeProduct.hideRelatedProducts === true ? false : defaultPageOptions.showRelatedProducts,
    showBreadcrumbs: takeshapeProduct.hideBreadcrumbs === true ? false : defaultPageOptions.showBreadcrumbs,
    component: getProductComponent(takeshapeProduct.productComponent)
  };
}

export function getProductPageParams(
  response: ProductPageShopifyProductHandlesQueryResponse
): GetStaticPathsResult['paths'] | null {
  const nodes = response?.products?.nodes;

  if (!nodes) {
    return null;
  }

  return nodes
    .map((node) => {
      if (!node.publishedOnCurrentPublication) {
        return;
      }

      return {
        params: {
          product: [node.handle]
        }
      };
    })
    .filter(isNotNullish);
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
    // This is a Storefront API product, limited options here
    hasStock: shopifyProduct.availableForSale,
    isAvailable: shopifyProduct.availableForSale
  };
}

export function getRelatedProductList(limit = 0) {
  return (response?: ProductPageRelatedProductsQueryResponse | null): ProductPageRelatedProductsProduct[] | null => {
    let products = response?.products;

    if (!products) {
      return null;
    }

    return products
      .map((node) => getRelatedProduct(node))
      .filter((product) => product.hasStock)
      .slice(0, limit);
  };
}

function isChildCollection(
  collection: ResponseCollection
): collection is DeepRequired<ResponseCollection, ['takeshape', 'parent', 'shopifyCollection']> {
  return Boolean(collection.takeshape?.parent?.shopifyCollection);
}

function collectionHasTypeEquals(collection: ResponseCollection) {
  return Boolean(collection.ruleSet?.rules?.findIndex((rule) => rule.column === 'TYPE' && rule.relation === 'EQUALS'));
}

function collectionHasRules(collection: ResponseCollection) {
  return Boolean(collection.ruleSet?.rules);
}

export function getBreadcrumbs(response: ProductPageShopifyProductResponse): ProductPageBreadcrumbs | null {
  const product = response?.product;
  const collections = product?.collections;

  if (!collections) {
    return null;
  }

  const collectionNodes = cloneDeep(collections.nodes);
  const sortedCollections = collectionNodes.sort((a, b) => a.productsCount - b.productsCount);

  // 1. (BEST) HAS PARENT & HAS RULES & HAS TYPE EQUALS & HAS HIGHEST PRODUCT COUNT
  let match = sortedCollections.find((collection) => {
    return isChildCollection(collection) && collectionHasTypeEquals(collection);
  });

  if (!match) {
    // 2. HAS PARENT & HAS RULES & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return isChildCollection(collection) && collectionHasRules(collection);
    });
  }

  if (!match) {
    // 3. HAS PARENT & HAS HIGHEST PRODUCT COUNT
    match = sortedCollections.find((collection) => {
      return isChildCollection(collection);
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

  if (isChildCollection(match)) {
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
      name: match.takeshape?.breadcrumbTitle ?? match.title,
      href: getCollectionUrl(match.handle)
    },
    {
      id: product.id,
      name: product.title,
      href: getProductUrl(product.handle)
    }
  ];
}

export type GetProductJsonLdPropsArgs = Pick<ProductProps, 'product'> & {
  reviewList: ReviewList | null;
};

export const getProductJsonLdProps = ({ product, reviewList }: GetProductJsonLdPropsArgs): ProductJsonLdProps => {
  const result: ProductJsonLdProps = {
    productName: product.name,
    description: product.description,
    images: product.images.map((image) => image.url)
  };

  if (reviewList) {
    result.reviews = reviewList.items.map((review) => ({
      author: review.reviewer.name,
      name: review.title,
      reviewBody: review.body,
      reviewRating: {
        ratingValue: review.rating
      },
      datePublished: review.createdAt,
      publisher: {
        type: 'Organization',
        name: reviewList.publisher
      }
    }));
    result.aggregateRating = {
      ratingValue: reviewList.stats.average,
      ratingCount: reviewList.stats.count
    };
  }

  return result;
};
