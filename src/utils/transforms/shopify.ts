import { defaultCurrency, defaultProductImage } from 'config';
import type {
  Product,
  ProductImage,
  ProductListItem,
  ProductPrice,
  ProductPriceCurrencyCode,
  ProductPriceOption,
  ProductReview,
  ProductReviews,
  ProductSeo,
  ProductVariant
} from 'types/product';
import type {
  Recharge_Product,
  ReviewsIo_ListProductReviewsResponseReviewsProperty,
  ReviewsIo_ProductReview,
  Shopify_Image,
  Shopify_MoneyV2,
  Shopify_Product,
  Shopify_ProductVariant,
  Shopify_SellingPlanPricingPolicy,
  Shopify_SellingPlanPricingPolicyPercentageValue,
  Shopify_SellingPlanRecurringBillingPolicy
} from 'types/takeshape';
import { Shopify_SellingPlanInterval, Shopify_SellingPlanPricingPolicyAdjustmentType } from 'types/takeshape';

function getDiscount(amount: number, { adjustmentType, adjustmentValue }: Shopify_SellingPlanPricingPolicy) {
  switch (adjustmentType) {
    case Shopify_SellingPlanPricingPolicyAdjustmentType.Price: {
      const newAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;

      return {
        type: 'PRICE' as const,
        amountAfterDiscount: newAmount,
        amount: newAmount
      };
    }

    case Shopify_SellingPlanPricingPolicyAdjustmentType.FixedAmount: {
      const discountAmount = Number((adjustmentValue as Shopify_MoneyV2).amount) * 100;

      return {
        type: 'FIXED_AMOUNT' as const,
        amountAfterDiscount: amount - discountAmount,
        amount: discountAmount
      };
    }

    case Shopify_SellingPlanPricingPolicyAdjustmentType.Percentage:
    default: {
      const discountAmount = (adjustmentValue as Shopify_SellingPlanPricingPolicyPercentageValue).percentage ?? 0;
      const discountAmountOff = Math.round(amount * (discountAmount / 100));

      return {
        type: 'PERCENTAGE' as const,
        amountAfterDiscount: amount - discountAmountOff,
        amount: discountAmount
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

function getImage(shopifyImage?: Shopify_Image): ProductImage {
  const { height, width, url } = shopifyImage ?? defaultProductImage;
  return {
    height,
    url,
    width
  };
}

function getPriceOptions(
  shopifyProduct: Shopify_Product,
  shopifyVariant: Shopify_ProductVariant
): ProductPriceOption[] {
  // variant.contextualPricing would be better for a true multi-currency site
  const { id, price } = shopifyVariant;
  const amount = Number(price) * 100;

  const { hasOneTime, hasSubscription } = getPurchaseOptions(shopifyProduct.recharge);

  let prices: ProductPriceOption[] = [];

  if (hasOneTime) {
    prices.push({
      merchandiseId: id,
      discountAmount: 0,
      discountType: 'PERCENTAGE',
      interval: 'DAY',
      intervalCount: 0,
      amountBeforeDiscount: amount,
      amount,
      currencyCode: defaultCurrency
    });
  }

  if (hasSubscription && shopifyProduct.sellingPlanGroups) {
    const sellingPlans = shopifyProduct.sellingPlanGroups.edges.flatMap(({ node }) =>
      node.sellingPlans.edges.map(({ node }) => node)
    );

    prices = prices
      .concat(
        sellingPlans.map((plan) => {
          const subscriptionInterval = getSubscriptionInterval(plan.billingPolicy);
          const discount = getDiscount(amount, plan.pricingPolicies[0]);

          return {
            merchandiseId: id,
            subscriptionId: plan.id,
            // This will only ever be 'percentage'
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
  const { id, title, price, image, availableForSale, sellableOnlineQuantity, selectedOptions, sku } = shopifyVariant;
  return {
    id,
    name: title,
    prices: getPriceOptions(shopifyProduct, shopifyVariant),
    available: availableForSale,
    image: getImage(image),
    inventory: sellableOnlineQuantity,
    sku,
    options: selectedOptions
  };
}

function getVariants(shopifyProduct: Shopify_Product): ProductVariant[] {
  return shopifyProduct.variants.edges.map(({ node }) => getVariant(shopifyProduct, node));
}

function getPrice(price: Shopify_MoneyV2): ProductPrice {
  return {
    amount: Number(price.amount) * 100,
    currencyCode: price.currencyCode.toLowerCase() as ProductPriceCurrencyCode
  };
}

function getReview(review: ReviewsIo_ProductReview): ProductReview {
  const { rating, title, review: body, date_created, timeago, reviewer } = review;

  return {
    rating,
    title,
    body,
    // Reviews.io is ISO 9075, convert to ISO 8601
    createdAt: new Date(`${date_created}.000Z`).toISOString(),
    timeAgo: timeago,
    reviewer: {
      firstName: reviewer.first_name,
      lastName: reviewer.last_name,
      verifiedBuyer: reviewer.verified_buyer,
      address: reviewer.address,
      imageUrl: reviewer.profile_picture ?? reviewer.gravatar
    }
  };
}

function getReviews(reviews?: ReviewsIo_ListProductReviewsResponseReviewsProperty): ProductReviews {
  const { total, per_page, current_page, data } = reviews;

  return {
    currentPage: current_page,
    totalPages: total,
    perPage: per_page,
    data: data.map(getReview)
  };
}

function getSeo(shopifyProduct: Shopify_Product): ProductSeo {
  return {
    title: shopifyProduct.seo.title ?? shopifyProduct.title,
    description: shopifyProduct.seo.description ?? shopifyProduct.description
  };
}

function getPurchaseOptions(recharge?: Recharge_Product) {
  let hasOneTime = true;
  let hasSubscription = false;

  if (recharge?.subscription_defaults?.storefront_purchase_options) {
    hasOneTime = Boolean(recharge.subscription_defaults.storefront_purchase_options === 'subscription_and_onetime');
    hasSubscription = true;
  }

  return {
    hasOneTime,
    hasSubscription
  };
}

export function shopifyGidToId(gid: string): string {
  return gid.replace(/gid:\/\/shopify\/Product\//, '');
}

export function shopifyIdToGid(id: string): string {
  return `gid://shopify/Product/${id}`;
}

export function shopifyProductToProductListItem(shopifyProduct: Shopify_Product): ProductListItem {
  const purchaseOptions = getPurchaseOptions(shopifyProduct.recharge);

  return {
    id: shopifyProduct.id,
    url: `/product/${shopifyGidToId(shopifyProduct.id)}`,
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    featuredImage: getImage(shopifyProduct.featuredImage),
    images: shopifyProduct.images?.edges?.map(({ node }) => getImage(node)) ?? [getImage()],
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    reviewsAverage: shopifyProduct.reviews?.stats?.average ?? null,
    reviewsCount: shopifyProduct.reviews?.stats?.count ?? 0,
    hasOneTimePurchaseOption: purchaseOptions.hasOneTime,
    hasSubscriptionPurchaseOption: purchaseOptions.hasSubscription,
    data: {}
  };
}

export function shopifyProductToProduct(shopifyProduct: Shopify_Product): Product {
  const purchaseOptions = getPurchaseOptions(shopifyProduct.recharge);

  return {
    id: shopifyProduct.id,
    url: `/product/${shopifyGidToId(shopifyProduct.id)}`,
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    featuredImage: getImage(shopifyProduct.featuredImage),
    images: shopifyProduct.images?.edges?.map(({ node }) => getImage(node)) ?? [getImage()],
    priceMin: getPrice(shopifyProduct.priceRangeV2.minVariantPrice),
    priceMax: getPrice(shopifyProduct.priceRangeV2.maxVariantPrice),
    variantsCount: shopifyProduct.totalVariants,
    variants: getVariants(shopifyProduct),
    reviews: shopifyProduct.reviews?.reviews ? getReviews(shopifyProduct.reviews.reviews) : null,
    reviewsAverage: shopifyProduct.reviews?.stats?.average ?? null,
    reviewsCount: shopifyProduct.reviews?.stats?.count ?? 0,
    seo: getSeo(shopifyProduct),
    hasOneTimePurchaseOption: purchaseOptions.hasOneTime,
    hasSubscriptionPurchaseOption: purchaseOptions.hasSubscription,
    data: {}
  };
}
