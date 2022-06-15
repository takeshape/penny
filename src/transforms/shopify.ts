import { defaultCurrency, defaultProductImage, productOptions } from 'config';
import {
  ProductImage,
  ProductPrice,
  ProductPriceCurrencyCode,
  ProductPriceOption,
  ProductSeo,
  ProductVariant
} from 'types/product';
import {
  Shopify_Customer,
  Shopify_Image,
  Shopify_LineItem,
  Shopify_MoneyV2,
  Shopify_Order,
  Shopify_Product,
  Shopify_ProductOption,
  Shopify_ProductVariant,
  Shopify_SellingPlanInterval,
  Shopify_SellingPlanPricingPolicy,
  Shopify_SellingPlanPricingPolicyAdjustmentType,
  Shopify_SellingPlanPricingPolicyPercentageValue,
  Shopify_SellingPlanRecurringBillingPolicy
} from 'types/takeshape';

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
}: Shopify_SellingPlanRecurringBillingPolicy) {
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
  return (shopifyImage?: Shopify_Image): ProductImage => {
    const { height, width, url, altText } = shopifyImage ?? defaultProductImage;
    return {
      height,
      url,
      width,
      altText: altText ?? defaultAltText
    };
  };
}

export function getPriceOptions(
  shopifyProduct: Pick<Shopify_Product, 'requiresSellingPlan' | 'sellingPlanGroups' | 'sellingPlanGroupCount'>,
  shopifyVariant: Shopify_ProductVariant
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
          const subscriptionInterval = getSubscriptionInterval(plan.billingPolicy);
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

function getVariant(
  shopifyProduct: Pick<
    Shopify_Product,
    'title' | 'requiresSellingPlan' | 'sellingPlanGroups' | 'sellingPlanGroupCount'
  >,
  shopifyVariant: Shopify_ProductVariant
): ProductVariant {
  const getImage = createImageGetter(`Image of ${shopifyProduct.title}`);
  const { id, title, image, availableForSale, sellableOnlineQuantity, selectedOptions, sku, inventoryPolicy } =
    shopifyVariant;

  return {
    id,
    name: title,
    description: title, // use a metafield
    prices: getPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale && (sellableOnlineQuantity > 0 || inventoryPolicy === 'CONTINUE'),
    image: getImage(image),
    inventory: sellableOnlineQuantity,
    inventoryPolicy,
    sku,
    options: selectedOptions
  };
}

export function getVariants(
  shopifyProduct: Pick<
    Shopify_Product,
    'variants' | 'title' | 'requiresSellingPlan' | 'sellingPlanGroups' | 'sellingPlanGroupCount'
  >
): ProductVariant[] {
  return shopifyProduct.variants.edges.map(({ node }) => getVariant(shopifyProduct, node));
}

export function getPrice(price: Shopify_MoneyV2): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toLowerCase() as ProductPriceCurrencyCode
  };
}

export function getSeo(shopifyProduct: Pick<Shopify_Product, 'seo' | 'title' | 'description'>): ProductSeo {
  return {
    title: shopifyProduct.seo?.title ?? shopifyProduct.title,
    description: shopifyProduct.seo?.description ?? shopifyProduct.description
  };
}

export function getOptions(options: Shopify_ProductOption[], variants?: ProductVariant[]) {
  return (
    options?.map(({ name, position, id, values }) => {
      return {
        name,
        position,
        id,
        values: values.map((value) => {
          const hasStock =
            variants?.some((variant) => {
              if (variant.options.find((o) => o.value === value)) {
                return variant.available;
              }
            }) ?? null;

          return {
            value,
            name: value,
            hasStock,
            ...productOptions?.[name.toLowerCase()]?.[value.toLowerCase()]
          };
        })
      };
    }) ?? []
  );
}

export function shopifyGidToId(gid: string): string {
  return gid.replace(/gid:\/\/shopify\/\w+\//, '');
}

export function shopifyIdToGid(id: string): string {
  return `gid://shopify/Product/${id}`;
}

export function shopifyOrderToLineItems(order?: Shopify_Order): Shopify_LineItem[] {
  return order?.lineItems?.edges.map((edge) => edge.node);
}

export function shopifyCustomerToShopifyOrderArray(customer?: Shopify_Customer): Shopify_Order[] {
  return customer?.orders.edges.map(({ node }) => node);
}
