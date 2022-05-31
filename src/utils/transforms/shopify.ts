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
  Shopify_ProductVariant
} from 'types/takeshape';

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
  const { sellingPlanGroups } = shopifyProduct;

  // variant.contextualPricing would be considered for a true multi-currency site
  const { id, price } = shopifyVariant;
  const amount = Number(price) * 100;

  const { hasOneTime, hasSubscription } = getPurchaseOptions(shopifyProduct.recharge);

  let prices: ProductPriceOption[] = [];

  if (hasOneTime) {
    prices.push({
      merchandiseId: id,
      discountAmount: 0,
      discountType: 'none',
      interval: 'day',
      intervalCount: 0,
      amount,
      currencyCode: defaultCurrency
    });
  }

  if (hasSubscription && sellingPlanGroups) {
    const {
      discount_amount,
      discount_type,
      subscription_defaults: { order_interval_frequency_options, order_interval_unit }
    } = shopifyProduct.recharge;

    const discountAmount = Number(discount_amount);
    const discountOffInCents = amount * (discountAmount / 100);

    prices = prices
      .concat(
        order_interval_frequency_options.map((intervalCount) => {
          const sellingPlanNodes = sellingPlanGroups.edges[0].node.sellingPlans.edges.map(({ node }) => node);
          const sellingPlan = sellingPlanNodes.find(({ options }) => {
            // Replace this dumb join once this lands: https://app.shortcut.com/takeshape/story/9034/graphql-fragment-namespaces-are-sent-to-delegated-apis
            const option = options[0].split(' ');
            return option[0] === intervalCount;
          });

          return {
            merchandiseId: id,
            subscriptionId: sellingPlan.id,
            // This will only ever be 'percentage'
            discountType: discount_type as ProductPriceOption['discountType'],
            discountAmount,
            // Recharge forces each product to have the same interval for all sub options
            interval: getSubscriptionInterval(order_interval_unit),
            intervalCount: Number(intervalCount),
            amount: amount - discountOffInCents,
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

function getSubscriptionInterval(interval: string): ProductPriceOption['interval'] {
  switch (interval) {
    case 'week':
      return 'week';
    case 'month':
      return 'month';
    case 'year':
      return 'year';
    case 'day':
    default:
      return 'day';
  }
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
