import { defaultCurrency, defaultProductImage, productOptions } from 'config';
import { ProductCategoryShopifyCollection } from 'features/ProductCategory/types';
import {
  ProductImage,
  ProductPrice,
  ProductPriceCurrencyCode,
  ProductPriceOption,
  ProductSeo,
  ProductVariant
} from 'types/product';
import * as Storefront from 'types/storefront';
import {
  ProductCategoryShopifyCollectionQueryResponse,
  ProductPageShopifyProductResponse,
  Shopify_MoneyV2,
  Shopify_SellingPlanInterval,
  Shopify_SellingPlanPricingPolicyAdjustmentType,
  Shopify_SellingPlanPricingPolicyPercentageValue,
  Shopify_SellingPlanRecurringBillingPolicy
} from 'types/takeshape';

type Shopify_Image =
  ProductCategoryShopifyCollectionQueryResponse['collection']['products']['nodes'][0]['featuredImage'];

type Shopify_SellingPlanPricingPolicy =
  ProductPageShopifyProductResponse['product']['sellingPlanGroups']['edges'][0]['node']['sellingPlans']['edges'][0]['node']['pricingPolicies'][0];

type Shopify_Product = ProductPageShopifyProductResponse['product'];

type Shopify_ProductVariant = ProductPageShopifyProductResponse['product']['variants']['edges'][0]['node'];

type Shopify_ProductOption = ProductPageShopifyProductResponse['product']['options'][0];

function getDiscount(amount: number, { adjustmentType, adjustmentValue }: Shopify_SellingPlanPricingPolicy) {
  switch (adjustmentType) {
    case Shopify_SellingPlanPricingPolicyAdjustmentType.Price: {
      const newAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;

      return {
        type: 'PRICE' as const,
        amountAfterDiscount: newAmount,
        amount: newAmount,
        hasDiscount: amount !== newAmount
      };
    }

    case Shopify_SellingPlanPricingPolicyAdjustmentType.FixedAmount: {
      const discountAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;
      const amountAfterDiscount = amount - discountAmount;

      return {
        type: 'FIXED_AMOUNT' as const,
        amountAfterDiscount,
        amount: discountAmount,
        hasDiscount: amount !== amountAfterDiscount
      };
    }

    case Shopify_SellingPlanPricingPolicyAdjustmentType.Percentage:
    default: {
      const discountAmount = (adjustmentValue as Shopify_SellingPlanPricingPolicyPercentageValue).percentage ?? 0;
      const discountAmountOff = Math.round(amount * (discountAmount / 100));
      const amountAfterDiscount = amount - discountAmountOff;

      return {
        type: 'PERCENTAGE' as const,
        amountAfterDiscount,
        amount: discountAmount,
        hasDiscount: amount !== amountAfterDiscount
      };
    }
  }
}

function getSubscriptionInterval({
  interval,
  intervalCount,
  maxCycles,
  minCycles,
  anchors
}: Pick<
  Shopify_SellingPlanRecurringBillingPolicy,
  'interval' | 'intervalCount' | 'maxCycles' | 'minCycles' | 'anchors'
>) {
  const subscriptionInterval = {
    anchor: anchors[0],
    intervalCount,
    maxCycles,
    minCycles
  };

  switch (interval) {
    case Shopify_SellingPlanInterval.Week:
      return {
        ...subscriptionInterval,
        interval: 'WEEK' as const
      };
    case Shopify_SellingPlanInterval.Month:
      return {
        ...subscriptionInterval,
        interval: 'MONTH' as const
      };
    case Shopify_SellingPlanInterval.Year:
      return {
        ...subscriptionInterval,
        interval: 'YEAR' as const
      };
    case Shopify_SellingPlanInterval.Day:
    default:
      return {
        ...subscriptionInterval,
        interval: 'DAY' as const
      };
  }
}

export function createImageGetter(defaultAltText: string) {
  return (shopifyImage?: Pick<Shopify_Image, 'height' | 'width' | 'url' | 'altText'>): ProductImage => {
    const { height, width, url, altText } = shopifyImage ?? defaultProductImage;
    return {
      height,
      url,
      width,
      altText: altText ?? defaultAltText
    };
  };
}

export function getProductVariantPriceOptions(
  shopifyProduct: Shopify_Product,
  shopifyVariant: Shopify_ProductVariant
): ProductPriceOption[] {
  // variant.contextualPricing would be better for a true multi-currency site
  const { id, price } = shopifyVariant;
  const amount = Number(price) * 100;

  const { requiresSellingPlan, sellingPlanGroups, sellingPlanGroupCount } =
    shopifyProduct as ProductPageShopifyProductResponse['product'];

  let prices: ProductPriceOption[] = [];

  if (!requiresSellingPlan) {
    prices.push({
      id: `${id}_DAY_0`,
      name: 'One-time purchase',
      merchandiseId: id,
      hasDiscount: false,
      discountAmount: 0,
      discountType: 'PERCENTAGE',
      interval: 'DAY',
      intervalCount: 0,
      amountBeforeDiscount: amount,
      amount,
      currencyCode: defaultCurrency
    });
  }

  if (sellingPlanGroupCount > 0) {
    const sellingPlans = sellingPlanGroups.edges.flatMap(({ node }) => node.sellingPlans.edges.map(({ node }) => node));
    prices = prices
      .concat(
        sellingPlans.map((plan) => {
          // TODO Don't know what happened to these types
          const subscriptionInterval = getSubscriptionInterval(plan.billingPolicy as any);
          const discount = getDiscount(amount, plan.pricingPolicies[0]);

          return {
            id: `${id}_${subscriptionInterval.interval}_${subscriptionInterval.intervalCount}`,
            name: discount.hasDiscount ? 'Subscribe & Save' : 'Subscribe',
            merchandiseId: id,
            subscriptionId: plan.id,
            // This will only ever be 'percentage'
            hasDiscount: discount.hasDiscount,
            discountType: discount.type,
            discountAmount: discount.amount,
            // Recharge forces each product to have the same interval for all sub options
            interval: subscriptionInterval.interval,
            intervalCount: subscriptionInterval.intervalCount,
            intervalMaxCycles: subscriptionInterval.maxCycles ?? null,
            intervalMinCycles: subscriptionInterval.minCycles ?? null,
            intervalAnchor: subscriptionInterval.anchor ?? null,
            amountBeforeDiscount: amount,
            amount: discount.amountAfterDiscount,
            currencyCode: defaultCurrency
          };
        })
      )
      .sort((a, b) => a.intervalCount - b.intervalCount);
  }

  return prices;
}

function getVariant(shopifyProduct: Shopify_Product, shopifyVariant: Shopify_ProductVariant): ProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const { id, title, image, availableForSale, sellableOnlineQuantity, selectedOptions, sku, inventoryPolicy } =
    shopifyVariant;

  return {
    id,
    name: title,
    description: title, // use a metafield
    prices: getProductVariantPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale && (sellableOnlineQuantity > 0 || inventoryPolicy === 'CONTINUE'),
    image: getImage(image),
    quantityAvailable: sellableOnlineQuantity,
    currentlyNotInStock: sellableOnlineQuantity === 0 && inventoryPolicy == 'CONTINUE',
    sku,
    options: selectedOptions.map(({ name, value }) => ({ name, value }))
  };
}

export function getProductVariants(shopifyProduct: Shopify_Product): ProductVariant[] {
  return (shopifyProduct as ProductPageShopifyProductResponse['product']).variants.edges.map(({ node }) =>
    getVariant(shopifyProduct, node)
  );
}

export function getPrice(price: Pick<Shopify_MoneyV2, 'amount' | 'currencyCode'>): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toUpperCase() as ProductPriceCurrencyCode
  };
}

export function getSeo(shopifyProduct: Shopify_Product | ProductCategoryShopifyCollection): ProductSeo {
  return {
    title: (shopifyProduct as ProductPageShopifyProductResponse['product']).seo?.title ?? shopifyProduct.title,
    description:
      (shopifyProduct as ProductPageShopifyProductResponse['product']).seo?.description ?? shopifyProduct.description
  };
}

export function getProductVariantOptions(
  options: Pick<Shopify_ProductOption, 'name' | 'id' | 'values'>[],
  variants?: ProductVariant[]
) {
  return (
    options?.map(({ name, id, values }) => {
      return {
        name,
        id,
        values: values.map((value) => {
          const hasStockFor =
            variants
              ?.filter((v) => {
                if (v.options.find((o) => o.value === value)) {
                  return v.available;
                }
              })
              ?.flatMap((v) => {
                return v.options.filter((o) => o.value !== value);
              }) ?? [];

          const hasStock = hasStockFor.length > 0;

          return {
            value,
            name: value,
            hasStockFor,
            hasStock,
            ...productOptions?.[name.toLowerCase()]?.[value.toLowerCase()]
          };
        })
      };
    }) ?? []
  );
}

export function getProductUrl(handle: string) {
  return `/product/${handle}`;
}

export function getCollectionUrl(handle: string) {
  return `/collection/${handle}`;
}

export function shopifyGidToId(gid: string): string {
  return gid.replace(/gid:\/\/shopify\/\w+\//, '');
}

/**
 * Storefront Transforms
 */
type StorefrontProductVariant = Pick<
  Storefront.ProductVariant,
  | 'id'
  | 'title'
  | 'image'
  | 'availableForSale'
  | 'currentlyNotInStock'
  | 'selectedOptions'
  | 'sku'
  | 'quantityAvailable'
  | 'priceV2'
> & {
  description?: Pick<Storefront.Metafield, 'type' | 'value'>;
  sellingPlanAllocations: {
    nodes: {
      sellingPlan: Pick<Storefront.SellingPlan, 'id' | 'options' | 'priceAdjustments'>;
    }[];
  };
};

type StorefrontProduct = Pick<Storefront.Product, 'requiresSellingPlan'> & {
  variants: {
    nodes: StorefrontProductVariant[];
  };
};

function getStorefrontDiscount(amount: number, { adjustmentValue }: Storefront.SellingPlanPriceAdjustment) {
  if ((adjustmentValue as Storefront.SellingPlanFixedAmountPriceAdjustment).adjustmentAmount) {
    const { adjustmentAmount } = adjustmentValue as Storefront.SellingPlanFixedAmountPriceAdjustment;
    const discountAmount = Number(adjustmentAmount.amount) * 100;
    const amountAfterDiscount = amount - discountAmount;

    return {
      type: 'FIXED_AMOUNT' as const,
      amountAfterDiscount,
      amount: discountAmount,
      hasDiscount: amount !== amountAfterDiscount
    };
  }

  if ((adjustmentValue as Storefront.SellingPlanFixedPriceAdjustment).price) {
    const { price } = adjustmentValue as Storefront.SellingPlanFixedPriceAdjustment;
    const newAmount = Number(price.amount) * 100;

    return {
      type: 'PRICE' as const,
      amountAfterDiscount: newAmount,
      amount: newAmount,
      hasDiscount: amount !== newAmount
    };
  }

  const { adjustmentPercentage } = adjustmentValue as Storefront.SellingPlanPercentagePriceAdjustment;
  const discountAmount = adjustmentPercentage ?? 0;
  const discountAmountOff = Math.round(amount * (discountAmount / 100));
  const amountAfterDiscount = amount - discountAmountOff;

  return {
    type: 'PERCENTAGE' as const,
    amountAfterDiscount,
    amount: discountAmount,
    hasDiscount: amount !== amountAfterDiscount
  };
}

function getStorefrontSubscriptionInterval({ value }: Storefront.SellingPlanOption) {
  // Example: '30 Day(s)'
  const [, intervalCount, interval] = value.match(/(\d+)\s(\w+)/);

  const subscriptionInterval = {
    intervalCount: Number(intervalCount)
  };

  switch (interval.toUpperCase()) {
    case 'WEEK':
      return {
        ...subscriptionInterval,
        interval: 'WEEK' as const
      };
    case 'MONTH':
      return {
        ...subscriptionInterval,
        interval: 'MONTH' as const
      };
    case 'YEAR':
      return {
        ...subscriptionInterval,
        interval: 'YEAR' as const
      };
    case 'DAY':
    default:
      return {
        ...subscriptionInterval,
        interval: 'DAY' as const
      };
  }
}

export function getStorefrontProductVariantPriceOptions(
  shopifyProduct: StorefrontProduct,
  shopifyVariant: StorefrontProductVariant
): ProductPriceOption[] {
  const { requiresSellingPlan } = shopifyProduct;
  const { id, priceV2: price, sellingPlanAllocations } = shopifyVariant;

  const amount = Number(price.amount) * 100;

  let prices: ProductPriceOption[] = [];

  if (!requiresSellingPlan) {
    prices.push({
      id: `${id}_DAY_0`,
      name: 'One-time purchase',
      merchandiseId: id,
      hasDiscount: false,
      discountAmount: 0,
      discountType: 'PERCENTAGE',
      interval: 'DAY',
      intervalCount: 0,
      amountBeforeDiscount: amount,
      amount,
      currencyCode: price.currencyCode as ProductPriceCurrencyCode
    });
  }

  if (sellingPlanAllocations.nodes.length > 0) {
    const sellingPlans = sellingPlanAllocations.nodes.flatMap((node) => node.sellingPlan);

    prices = prices
      .concat(
        sellingPlans.map((plan) => {
          const subscriptionInterval = getStorefrontSubscriptionInterval(plan.options[0]);
          const discount = getStorefrontDiscount(amount, plan.priceAdjustments[0]);

          return {
            id: `${id}_${subscriptionInterval.interval}_${subscriptionInterval.intervalCount}`,
            name: discount.hasDiscount ? 'Subscribe & Save' : 'Subscribe',
            merchandiseId: id,
            subscriptionId: plan.id,
            hasDiscount: discount.hasDiscount,
            discountType: discount.type,
            discountAmount: discount.amount,
            interval: subscriptionInterval.interval,
            intervalCount: subscriptionInterval.intervalCount,
            amountBeforeDiscount: amount,
            amount: discount.amountAfterDiscount,
            currencyCode: defaultCurrency
          };
        })
      )
      .sort((a, b) => a.intervalCount - b.intervalCount);
  }

  return prices;
}

function getStorefrontProductVariant(
  shopifyProduct: StorefrontProduct,
  shopifyVariant: StorefrontProductVariant
): ProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyVariant.title}`);

  const {
    id,
    title,
    description,
    image,
    availableForSale,
    currentlyNotInStock,
    selectedOptions,
    sku,
    quantityAvailable
  } = shopifyVariant;

  return {
    id,
    name: title,
    description: description?.value ?? title,
    prices: getStorefrontProductVariantPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale || currentlyNotInStock,
    image: shopifyVariant.image && getImage(image),
    quantityAvailable,
    currentlyNotInStock,
    sku,
    options: selectedOptions.map(({ name, value }) => ({ name, value }))
  };
}

export function getStorefrontProductVariants(shopifyProduct: StorefrontProduct): ProductVariant[] {
  return shopifyProduct.variants.nodes.map((variant) => getStorefrontProductVariant(shopifyProduct, variant));
}

export function getStorefrontPrice(price: Pick<Storefront.MoneyV2, 'amount' | 'currencyCode'>): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toUpperCase() as ProductPriceCurrencyCode
  };
}
