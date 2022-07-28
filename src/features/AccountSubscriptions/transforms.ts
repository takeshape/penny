import {
  createImageGetter,
  getProductUrl,
  getProductVariantOptions,
  getStorefrontPrice,
  getStorefrontProductVariants
} from 'transforms/shopify';
import { QuickAddQueryResponse } from 'types/storefront';
import { DeliveryScheduleOptions, SubscriptionProductForUpdate } from './types';

export function getProduct(response: QuickAddQueryResponse): SubscriptionProductForUpdate {
  const shopifyProduct = response?.product;

  if (!shopifyProduct) {
    return null;
  }

  const variants = getStorefrontProductVariants(shopifyProduct);
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);

  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    url: getProductUrl(shopifyProduct.handle),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    featuredImage: getImage(shopifyProduct.featuredImage),
    priceMin: getStorefrontPrice(shopifyProduct.priceRange.minVariantPrice),
    priceMax: getStorefrontPrice(shopifyProduct.priceRange.maxVariantPrice),
    variantsCount: shopifyProduct.variants.nodes.length,
    variants,
    hasOneTimePurchaseOption: !shopifyProduct.requiresSellingPlan,
    hasSubscriptionPurchaseOption: shopifyProduct.sellingPlanGroups.nodes.length > 0,
    hasStock: shopifyProduct.totalInventory > 0,
    variantOptions: getProductVariantOptions(shopifyProduct.options, variants)
  };
}

export function getDeliveryScheduleOptions(): DeliveryScheduleOptions {
  return [
    {
      interval: 'DAY',
      intervalCount: 30
    },
    {
      interval: 'DAY',
      intervalCount: 60
    }
  ];
}
