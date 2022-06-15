import { getStats } from 'transforms/reviewsIo';
import { createImageGetter, getOptions, getPrice, shopifyGidToId } from 'transforms/shopify';
import { ProductCategoryShopifyCollectionIdsResponse, ProductCategoryShopifyCollectionResponse } from './queries';
import {
  ProductCategoryCollection,
  ProductCategoryProduct,
  ProductCategoryProductListItem,
  ProductCategoryReviewsIoReviews,
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
    url: `/product/${shopifyGidToId(shopifyProduct.id)}`,
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
    options: getOptions(shopifyProduct.options)
  };
}

function getProductListItem(shopifyProduct: ProductCategoryShopifyProduct): ProductCategoryProductListItem {
  return {
    product: getProduct(shopifyProduct),
    reviews: getReviews(shopifyProduct.reviews)
  };
}

export function getCollection(response: ProductCategoryShopifyCollectionResponse): ProductCategoryCollection {
  const collection = response?.collection;

  if (!collection) {
    return null;
  }

  return {
    id: collection.id,
    handle: collection.handle,
    name: collection.title,
    description: collection.description,
    descriptionHtml: collection.descriptionHtml,
    productsCount: collection.productsCount,
    products: collection.products.edges.map(({ node }) => getProductListItem(node))
  };
}

export function getCollectionIds(response: ProductCategoryShopifyCollectionIdsResponse) {
  const collections = response?.collections?.edges;

  if (!collections) {
    return null;
  }

  return collections.map(({ node }) => node.id);
}
