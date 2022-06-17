import { getStats } from 'transforms/reviewsIo';
import {
  createImageGetter,
  getPrice,
  getProductOptions,
  getProductUrl,
  shopifyCollectionIdToGid,
  shopifyGidToId
} from 'transforms/shopify';
import { isNumericString } from 'utils/types';
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
    url: getProductUrl(shopifyProduct.id, shopifyProduct.takeshape, 'product'),
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

export function getCollection(response: ProductCategoryShopifyCollectionResponse): ProductCategoryCollection {
  const collection = response?.collectionList?.items?.[0].shopifyCollection;

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
    products: collection.products.edges.map(({ node, cursor }) => getProductListItem(node, cursor))
  };
}

export function getCollectionPageParams(response: ProductCategoryShopifyCollectionIdsResponse, pageSize: number) {
  const collections = response?.collections?.items;

  if (!collections) {
    return null;
  }

  return collections.flatMap((item) => {
    const pageCount = Math.ceil(item.shopifyCollection.productsCount / pageSize);
    const pagesParams = new Array(pageCount).fill(undefined);

    return pagesParams.map((_, pageIdx) => {
      let collection;

      if (item.slug) {
        collection = [item.slug];
      } else {
        collection = [shopifyGidToId(item.shopifyCollectionId)];
      }

      if (pageIdx > 0) {
        collection.push(String(pageIdx + 1));
      }

      return {
        params: {
          collection
        }
      };
    });
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
