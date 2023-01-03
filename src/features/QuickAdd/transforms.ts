import {
  createImageGetter,
  getPrice,
  getProductHasStock,
  getProductUrl,
  getProductVariantOptions,
  getProductVariants
} from 'transforms/shopify';
import { QuickAddQueryResponse } from 'types/takeshape';
import { QuickAddProduct } from './types';

export function getProduct(response?: QuickAddQueryResponse | null): QuickAddProduct | null {
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
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.variants.nodes.length,
    variants,
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroups.nodes.length > 0,
    hasStock: getProductHasStock(shopifyProduct),
    variantOptions: getProductVariantOptions(shopifyProduct.options, variants)
  };
}
