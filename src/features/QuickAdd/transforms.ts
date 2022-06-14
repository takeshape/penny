import { createImageGetter, getOptions, getPrice, getVariants, shopifyGidToId } from 'transforms/shopify';
import { QuickAddResponse } from './queries';
import { QuickAddProduct } from './types';

export function getProduct(response: QuickAddResponse): QuickAddProduct {
  const shopifyProduct = response?.productList?.items?.[0].shopifyProduct;

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
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    variants,
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroupCount > 0,
    hasStock: shopifyProduct.totalInventory > 0,
    options: getOptions(shopifyProduct.options, variants)
  };
}
