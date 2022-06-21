import { getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getCollectionUrl,
  getPrice,
  getProductOptions,
  getProductUrl,
  shopifyCollectionIdToGid,
  shopifyGidToId
} from 'transforms/shopify';
import { isNumericString } from 'utils/types';
import {
  ProductCategoryShopifyCollectionIdsResponse,
  ProductCategoryShopifyCollectionResponse,
  ProductCategoryShopifyPaginationArgs
} from './queries';
import {
  ProductCategoryCollection,
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

function getProductListItem(
  shopifyProduct: ProductCategoryShopifyProduct,
  cursor: string
): ProductCategoryProductListItem {
  return {
    cursor,
    product: getProduct(shopifyProduct),
    reviews: getReviews(shopifyProduct.reviews)
  };
}

export function getCollectionPageInfo(
  response: ProductCategoryShopifyCollectionResponse
): ProductCategoryCollection['pageInfo'] {
  const collection = response?.collectionList?.items?.[0].shopifyCollection;

  if (!collection) {
    return null;
  }

  return collection.products.pageInfo;
}

export function getCollection(
  collection: ProductCategoryShopifyCollection,
  { before, after }: Pick<ProductCategoryShopifyPaginationArgs, 'before' | 'after'>
): ProductCategoryCollection {
  const anchor = before !== undefined ? collection.products.pageInfo.startCursor : after;

  return {
    id: collection.id,
    url: getCollectionUrl(collection.id, collection.takeshape),
    handle: collection.handle,
    name: collection.title,
    description: collection.description,
    descriptionHtml: collection.descriptionHtml,
    productsCount: collection.productsCount,
    items: collection.products.edges.map(({ node, cursor }) => getProductListItem(node, cursor)),
    pageInfo: collection.products.pageInfo,
    anchor: collection.products.pageInfo.hasPreviousPage ? anchor : null
  };
}

export function getCollectionFromTakeshape(
  response: ProductCategoryShopifyCollectionResponse,
  variables: Pick<ProductCategoryShopifyPaginationArgs, 'before' | 'after'>
): ProductCategoryCollection {
  const collection = response?.collectionList?.items?.[0].shopifyCollection;

  if (!collection) {
    return null;
  }

  return getCollection(collection, variables);
}

export function getCollectionWithOverfetch(
  { pageSize }: { pageSize: number },
  response: ProductCategoryShopifyCollectionResponse,
  variables: Pick<ProductCategoryShopifyPaginationArgs, 'before' | 'after' | 'last'>
): ProductCategoryCollection {
  const shopifyCollection = response?.collectionList?.items?.[0].shopifyCollection;

  if (!shopifyCollection) {
    return null;
  }

  const collection = structuredClone(shopifyCollection);

  // This was an overfetch to get the start anchor for backwards pagination
  if (variables.last > pageSize && collection.products.edges.length > pageSize) {
    const [, ...edges] = collection.products.edges;
    collection.products.edges = edges;
  }

  return getCollection(collection, variables);
}

export function getCollectionPageParams(response: ProductCategoryShopifyCollectionIdsResponse, pageSize: number) {
  const collections = response?.collections?.items;

  if (!collections) {
    return null;
  }

  return collections.map((item) => {
    let collection;

    if (item.slug) {
      collection = [item.slug];
    } else {
      collection = [shopifyGidToId(item.shopifyCollectionId)];
    }

    return {
      params: {
        collection
      }
    };
  });
}

export function getCollectionPageIdOrSlug(idOrSlug: string) {
  // This is a product id, 9 is arbitrary, but Shopify Collection Ids shouldn't be shorter.
  if (idOrSlug.length > 9 && isNumericString(idOrSlug)) {
    return {
      id: shopifyCollectionIdToGid(idOrSlug),
      slug: ''
    };
  }

  return {
    id: '',
    slug: idOrSlug
  };
}

export function getCurrentCursor(collection: ProductCategoryCollection) {
  return collection.items[collection.items.length - 1].cursor;
}

export function getCurrentUrl(collection: ProductCategoryCollection, page: number) {
  return collection.anchor ? `${collection.url}/${collection.anchor}/${page}` : collection.url;
}

export function getCurrentTitle(collection: ProductCategoryCollection, page: number) {
  return collection.pageInfo.hasPreviousPage ? `Page ${page} | ${collection.name}` : collection.name;
}
