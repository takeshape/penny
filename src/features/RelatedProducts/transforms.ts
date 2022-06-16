import { createImageGetter, getOptions, getPrice, shopifyGidToId } from 'transforms/shopify';
import { RelatedProductsShopifyCollectionResponse } from './queries';
import { RelatedProductsProduct, RelatedProductsShopifyProduct } from './types';

function getProduct(shopifyProduct: RelatedProductsShopifyProduct): RelatedProductsProduct {
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

export function getProductList(response: RelatedProductsShopifyCollectionResponse): RelatedProductsProduct[] {
  const productEdges = response?.collection?.products?.edges;

  if (!productEdges) {
    return;
  }

  return productEdges.map(({ node }) => getProduct(node));
}
