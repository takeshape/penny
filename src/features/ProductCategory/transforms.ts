import { getStats } from 'transforms/reviewsIo';
import { createImageGetter, getCollectionUrl, getPrice, getProductUrl, getSeo } from 'transforms/shopify';
import {
  ProductCategoryShopifyCollectionHandlesResponse,
  ProductCategoryShopifyCollectionQueryResponse
} from 'types/takeshape';
import { PaginationDataHookParsedPath } from '../../utils/hooks/usePaginationData';
import {
  ProductCategoryBreadcrumbs,
  ProductCategoryCollection,
  ProductCategoryCollectionParent,
  ProductCategoryProduct,
  ProductCategoryProductListItem,
  ProductCategoryReviewsIoReviews,
  ProductCategoryShopifyCollection,
  ProductCategoryShopifyProduct
} from './types';

function getReviews(reviewsIoReviews: ProductCategoryReviewsIoReviews) {
  return {
    stats: getStats(reviewsIoReviews.stats)
  };
}

function getProduct(shopifyProduct: ProductCategoryShopifyProduct): ProductCategoryProduct {
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
    options: []
  };
}

function getProductListItem(shopifyProduct: ProductCategoryShopifyProduct): ProductCategoryProductListItem {
  return {
    product: getProduct(shopifyProduct),
    reviews: getReviews(shopifyProduct.reviews)
  };
}

export function getCollectionPageInfo(
  response: ProductCategoryShopifyCollectionQueryResponse
): ProductCategoryCollection['pageInfo'] {
  const collection = response?.collection;

  if (!collection) {
    return null;
  }

  return collection.products.pageInfo;
}

function getCollectionParent(collection: ProductCategoryShopifyCollection): ProductCategoryCollectionParent {
  const parent = collection.takeshape.parent;

  if (!parent) {
    return null;
  }

  return {
    id: parent.shopifyCollection.id,
    url: getCollectionUrl(parent.shopifyCollection.handle),
    name: parent.breadcrumbTitle ?? parent.shopifyCollection.title
  };
}

export function getCollection(collection: ProductCategoryShopifyCollection): ProductCategoryCollection {
  return {
    id: collection.id,
    url: getCollectionUrl(collection.handle),
    seo: getSeo(collection),
    handle: collection.handle,
    name: collection.title,
    description: collection.description,
    descriptionHtml: collection.descriptionHtml,
    items: collection.products.nodes.map((node) => getProductListItem(node)),
    pageInfo: collection.products.pageInfo,
    breadcrumbTitle: collection.takeshape.breadcrumbTitle,
    parent: getCollectionParent(collection)
  };
}

export function getCollectionPageParams(response: ProductCategoryShopifyCollectionHandlesResponse) {
  const nodes = response?.collections?.nodes;

  if (!nodes) {
    return null;
  }

  return nodes.map((node) => ({
    params: {
      collection: [node.handle]
    }
  }));
}

export function getNextUrl(collection: ProductCategoryCollection, page: number, isBefore?: boolean) {
  if (page === 1) {
    return collection.url;
  }

  if (isBefore) {
    return `${collection.url}/${page}/${collection.pageInfo.startCursor}/before`;
  }

  return `${collection.url}/${page}/${collection.pageInfo.endCursor}`;
}

export function parseRouterPath(collection: ProductCategoryCollection, pathname: string): PaginationDataHookParsedPath {
  const paginationPath = pathname.replace(collection.url, '').replace(/^\//, '');
  const [page, cursor, direction] = paginationPath.split('/');
  return {
    page: page ? Number(page) : 1,
    cursor: cursor !== '' ? cursor : null,
    direction: direction === 'before' ? 'before' : 'after'
  };
}

export function getCurrentTitle(collection: ProductCategoryCollection, page: number) {
  return collection.pageInfo.hasPreviousPage ? `Page ${page} | ${collection.name}` : collection.name;
}

export function getBreadcrumbs(collection: ProductCategoryCollection): ProductCategoryBreadcrumbs {
  const breadcrumbs: ProductCategoryBreadcrumbs = [];

  if (collection.parent) {
    breadcrumbs.push({
      id: collection.parent.id,
      name: collection.parent.name,
      href: collection.parent.url
    });
  }

  breadcrumbs.push({
    id: collection.id,
    name: collection.breadcrumbTitle ?? collection.name,
    href: collection.url
  });

  return breadcrumbs;
}
