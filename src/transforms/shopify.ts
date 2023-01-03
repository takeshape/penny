import { defaultCurrency, defaultProductImage, productOptions } from 'config';
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
  Maybe,
  Shopify_MoneyV2,
  Shopify_Product,
  Shopify_ProductOption,
  Shopify_ProductVariant,
  Shopify_SellingPlan,
  Shopify_SellingPlanPricingPolicy,
  Shopify_SellingPlanPricingPolicyPercentageValue,
  Shopify_SellingPlanRecurringBillingPolicy,
  Shopify_Seo
} from 'types/takeshape';

type ShopifyImage = { height: Maybe<number>; width: Maybe<number>; altText: Maybe<string>; url: string };

type ShopifyAdminSellingPlanPricingPolicy = Pick<
  Shopify_SellingPlanPricingPolicy,
  'adjustmentType' | 'adjustmentValue'
>;
type ShopifyAdminProductOption = Pick<Shopify_ProductOption, 'id' | 'name' | 'values'>;
type ShopifyAdminProductVariant = Pick<
  Shopify_ProductVariant,
  | 'id'
  | 'title'
  | 'selectedOptions'
  | 'sku'
  | 'sellableOnlineQuantity'
  | 'inventoryPolicy'
  | 'price'
  | 'inventoryManagement'
> & {
  image?: ShopifyImage | null;
  description?: Pick<Storefront.Metafield, 'type' | 'value'> | null;
};
type ShopifyAdminSellingPlan = Pick<Shopify_SellingPlan, 'id' | 'options'> & {
  pricingPolicies: ShopifyAdminSellingPlanPricingPolicy[];
  billingPolicy: Partial<
    Pick<Shopify_SellingPlanRecurringBillingPolicy, 'maxCycles' | 'minCycles' | 'interval' | 'intervalCount'>
  >;
};

type ShopifyAdminProduct = Pick<
  Shopify_Product,
  | 'requiresSellingPlan'
  | 'sellingPlanGroupCount'
  | 'title'
  | 'hasOnlyDefaultVariant'
  | 'tracksInventory'
  | 'totalInventory'
  | 'publishedOnCurrentPublication'
> & {
  featuredImage?: ShopifyImage | null;
  sellingPlanGroups: {
    nodes: {
      sellingPlans: {
        nodes: ShopifyAdminSellingPlan[];
      };
    }[];
  };
  variants: {
    nodes: ShopifyAdminProductVariant[];
  };
};

function getDiscount(amount: number, { adjustmentType, adjustmentValue }: ShopifyAdminSellingPlanPricingPolicy) {
  switch (adjustmentType) {
    case 'PRICE': {
      const newAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;

      return {
        type: 'PRICE' as const,
        amountAfterDiscount: newAmount,
        amount: newAmount,
        hasDiscount: amount !== newAmount
      };
    }

    case 'FIXED_AMOUNT': {
      const discountAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;
      const amountAfterDiscount = amount - discountAmount;

      return {
        type: 'FIXED_AMOUNT' as const,
        amountAfterDiscount,
        amount: discountAmount,
        hasDiscount: amount !== amountAfterDiscount
      };
    }

    case 'PERCENTAGE':
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

export function createImageGetter(defaultAltText: string) {
  return (shopifyImage?: ShopifyImage | null): ProductImage => {
    const { height, width, url, altText } = shopifyImage ?? defaultProductImage;
    return {
      height: height ?? 0,
      url,
      width: width ?? 0,
      altText: altText ?? defaultAltText
    };
  };
}

export function getProductVariantPriceOptions(
  shopifyProduct: ShopifyAdminProduct,
  shopifyVariant: ShopifyAdminProductVariant
): ProductPriceOption[] {
  // variant.contextualPricing would be better for a true multi-currency site
  const { id, price } = shopifyVariant;
  const amount = Number(price) * 100;

  const { requiresSellingPlan, sellingPlanGroups, sellingPlanGroupCount } = shopifyProduct;

  let prices: ProductPriceOption[] = [];

  if (!requiresSellingPlan) {
    prices.push({
      id: `${id}_DAY_0`,
      name: 'One-time purchase',
      merchandiseId: id,
      hasDiscount: false,
      discountAmount: 0,
      discountType: 'PERCENTAGE',
      intervalId: `DAY_0`,
      interval: 'DAY',
      intervalCount: 0,
      amountBeforeDiscount: amount,
      amount,
      currencyCode: defaultCurrency
    });
  }

  if (sellingPlanGroupCount > 0) {
    const sellingPlans = sellingPlanGroups.nodes.flatMap((node) => node.sellingPlans.nodes);
    prices = prices
      .concat(
        sellingPlans.map((plan) => {
          const { interval, intervalCount, maxCycles, minCycles, anchors } =
            plan.billingPolicy as Shopify_SellingPlanRecurringBillingPolicy;
          const discount = getDiscount(amount, plan.pricingPolicies[0]);
          const name = `${intervalCount} ${interval.toLowerCase()} subscription`;

          return {
            id: `${id}_${interval}_${intervalCount}`,
            name,
            merchandiseId: id,
            subscriptionId: plan.id,
            // This will only ever be 'percentage'
            hasDiscount: discount.hasDiscount,
            discountType: discount.type,
            discountAmount: discount.amount,
            // Recharge forces each product to have the same interval for all sub options
            intervalId: `${interval}_${intervalCount}`,
            interval: interval,
            intervalCount: intervalCount,
            intervalMaxCycles: maxCycles ?? null,
            intervalMinCycles: minCycles ?? null,
            intervalAnchors: anchors ?? null,
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

function getVariant(shopifyProduct: ShopifyAdminProduct, shopifyVariant: ShopifyAdminProductVariant): ProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const { hasOnlyDefaultVariant } = shopifyProduct;
  const { id, sellableOnlineQuantity, selectedOptions, sku, inventoryPolicy, inventoryManagement } = shopifyVariant;

  const title = hasOnlyDefaultVariant ? shopifyProduct.title : shopifyVariant.title;
  const image = hasOnlyDefaultVariant ? shopifyProduct.featuredImage : shopifyVariant.image;
  const options = hasOnlyDefaultVariant ? [] : selectedOptions.map(({ name, value }) => ({ name, value }));

  return {
    id,
    name: title,
    // TODO use a metafield
    description: title,
    prices: getProductVariantPriceOptions(shopifyProduct, shopifyVariant),
    // Should this variant show up for sale, multiple factors
    available: sellableOnlineQuantity > 0 || inventoryPolicy === 'CONTINUE' || inventoryManagement === 'NOT_MANAGED',
    image: getImage(image),
    quantityAvailable: sellableOnlineQuantity,
    currentlyNotInStock: sellableOnlineQuantity === 0 && inventoryPolicy == 'CONTINUE',
    sku: sku ?? shopifyGidToId(id),
    options
  };
}

export function getProductVariants(shopifyProduct: ShopifyAdminProduct): ProductVariant[] {
  return shopifyProduct.variants.nodes.map((node) => getVariant(shopifyProduct, node));
}

export function getPrice(price: Pick<Shopify_MoneyV2, 'amount' | 'currencyCode'>): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toUpperCase() as ProductPriceCurrencyCode
  };
}

export function getSeo(
  shopifyObject: Pick<Shopify_Seo, 'title' | 'description'> & { seo: Pick<Shopify_Seo, 'title' | 'description'> }
): ProductSeo {
  return {
    title: shopifyObject.seo?.title ?? shopifyObject.title ?? '',
    description: shopifyObject.seo?.description ?? shopifyObject.description ?? ''
  };
}

export function getProductVariantOptions(
  options: ShopifyAdminProductOption[],
  variants?: Pick<ProductVariant, 'options' | 'available'>[]
) {
  // No options if there is only one variant
  if (!variants || variants.length < 2) {
    return [];
  }

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

export function getProductHasStock(
  product: Pick<ShopifyAdminProduct, 'tracksInventory' | 'totalInventory' | 'publishedOnCurrentPublication'>
) {
  const { publishedOnCurrentPublication, tracksInventory, totalInventory } = product;
  return publishedOnCurrentPublication && (!tracksInventory || totalInventory > 0);
}

export function getProductUrl(handle: string) {
  return `/products/${handle}`;
}

export function getCollectionUrl(handle: string) {
  return `/collections/${handle}`;
}

export function shopifyGidToId(gid: string): string {
  return gid.replace(/gid:\/\/shopify\/\w+\//, '');
}

/**
 * Storefront Transforms
 */
type ShopifyStorefrontProductVariant = Pick<
  Storefront.ProductVariant,
  | 'id'
  | 'title'
  | 'availableForSale'
  | 'currentlyNotInStock'
  | 'selectedOptions'
  | 'sku'
  | 'quantityAvailable'
  | 'priceV2'
> & {
  image?: ShopifyImage | null;
  description?: Pick<Storefront.Metafield, 'type' | 'value'> | null;
  sellingPlanAllocations: {
    nodes: {
      sellingPlan: Pick<Storefront.SellingPlan, 'id' | 'options'> & {
        priceAdjustments: Pick<Storefront.SellingPlanPriceAdjustment, 'adjustmentValue'>[];
      };
    }[];
  };
};

type ShopifyStorefrontProduct = Pick<Storefront.Product, 'title' | 'requiresSellingPlan'> & {
  featuredImage?: ShopifyImage | null;
  variants: {
    nodes: ShopifyStorefrontProductVariant[];
  };
};

function getStorefrontDiscount(
  amount: number,
  { adjustmentValue }: Pick<Storefront.SellingPlanPriceAdjustment, 'adjustmentValue'>
) {
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
  const [, intervalCount, interval] = value?.match(/(\d+)\s(\w+)/) ?? ['', '', ''];

  const subscriptionInterval = {
    intervalCount: Number(intervalCount ?? 0)
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
  shopifyProduct: ShopifyStorefrontProduct,
  shopifyVariant: ShopifyStorefrontProductVariant
): ProductPriceOption[] {
  const { requiresSellingPlan } = shopifyProduct;
  const { id, priceV2: price, sellingPlanAllocations } = shopifyVariant;

  const amount = Number(price.amount) * 100;

  let prices: ProductPriceOption[] = [];

  if (!requiresSellingPlan) {
    prices.push({
      id: `${id}_DAY_0`,
      intervalId: `DAY_0`,
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
          const { interval, intervalCount } = getStorefrontSubscriptionInterval(plan.options[0]);
          const discount = getStorefrontDiscount(amount, plan.priceAdjustments[0]);
          const name = `${intervalCount} ${interval.toLowerCase()} subscription`;

          return {
            id: `${id}_${interval}_${intervalCount}`,
            name,
            merchandiseId: id,
            subscriptionId: plan.id,
            hasDiscount: discount.hasDiscount,
            discountType: discount.type,
            discountAmount: discount.amount,
            intervalId: `${interval}_${intervalCount}`,
            interval: interval,
            intervalCount: intervalCount,
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

/**
 * Apparently the only way to match the admin boolean
 */
function getHasOnlyDefaultVariant({ variants }: ShopifyStorefrontProduct) {
  return variants.nodes.length === 1 && variants.nodes[0].title === 'Default Title';
}

function getStorefrontProductVariant(
  shopifyProduct: ShopifyStorefrontProduct,
  shopifyVariant: ShopifyStorefrontProductVariant
): ProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyVariant.title}`);
  const hasOnlyDefaultVariant = getHasOnlyDefaultVariant(shopifyProduct);

  const { id, description, availableForSale, currentlyNotInStock, selectedOptions, sku, quantityAvailable } =
    shopifyVariant;

  const title = hasOnlyDefaultVariant ? shopifyProduct.title : shopifyVariant.title;
  const image = hasOnlyDefaultVariant ? shopifyProduct.featuredImage : shopifyVariant.image;
  const options = hasOnlyDefaultVariant ? [] : selectedOptions.map(({ name, value }) => ({ name, value }));

  return {
    id,
    name: title,
    description: description?.value ?? title,
    prices: getStorefrontProductVariantPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale || currentlyNotInStock,
    image: getImage(image),
    quantityAvailable: quantityAvailable ?? 0,
    currentlyNotInStock,
    sku: sku ?? shopifyGidToId(id),
    options
  };
}

export function getStorefrontProductVariants(shopifyProduct: ShopifyStorefrontProduct): ProductVariant[] {
  return shopifyProduct.variants.nodes.map((variant) => getStorefrontProductVariant(shopifyProduct, variant));
}

export function getStorefrontPrice(price: Pick<Storefront.MoneyV2, 'amount' | 'currencyCode'>): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toUpperCase() as ProductPriceCurrencyCode
  };
}
