import { currencyList } from 'config';
import { SetRequired } from 'type-fest';

export type ProductImage = {
  height: number;
  url: string;
  width: number;
  altText: string;
};

export type ProductPriceRecurringAnchor = {
  day: number;
  month?: number;
  type: 'WEEKDAY' | 'MONTHDAY' | 'YEARDAY';
};

/**
 * All amounts in cents
 */
export type ProductPriceOption = {
  id: string;
  name: string;
  merchandiseId: string;
  subscriptionId?: string;
  intervalId: string;
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  intervalCount: number;
  intervalMaxCycles?: number | null;
  intervalMinCycles?: number | null;
  intervalAnchor?: ProductPriceRecurringAnchor | null;
  hasDiscount: boolean;
  discountType: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'PRICE';
  discountAmount: number;
  amountBeforeDiscount: number;
  amount: number;
  currencyCode: ProductPriceCurrencyCode;
};

export type ProductPriceCurrencyCode = typeof currencyList[number];

export type ProductPrice = {
  // in cents
  amount: number;
  currencyCode: ProductPriceCurrencyCode;
};

export type ProductVariantSelection = {
  name: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  description: string;
  image?: ProductImage;
  prices: ProductPriceOption[];
  available: boolean;
  quantityAvailable: number;
  currentlyNotInStock: boolean;
  sku: string;
  options: ProductVariantSelection[];
};

export type ProductSeo = {
  title: string;
  description: string;
};

export type ProductVariantOptionValue = {
  value: string;
  name: string;
  hasStock: boolean | null;
  hasStockFor: ProductVariantSelection[];
} & Record<string, unknown>;

export type ProductVariantOption = {
  id: string;
  name: string;
  values: ProductVariantOptionValue[];
};

export type ProductLineItemAttribute = {
  key: string;
  values: string[] | null;
};

export type ProductCore = {
  id: string;
  handle: string;
  name: string;
  url: string;
  description: string;
  featuredImage: ProductImage;
  hasStock: boolean;
};

export type ProductBase = ProductCore & {
  descriptionHtml: string;
  images?: ProductImage[];
  priceMin: ProductPrice;
  priceMax: ProductPrice;
  variantOptions: ProductVariantOption[];
  lineItemAttributes?: ProductLineItemAttribute[];
  variantsCount?: number;
  variants?: ProductVariant[];
  hasOneTimePurchaseOption?: boolean;
  hasSubscriptionPurchaseOption?: boolean;
  seo?: ProductSeo;
  tags?: string[];
};

export type ProductListItem = ProductBase;

export type Product = SetRequired<
  ProductBase,
  | 'images'
  | 'variants'
  | 'variantsCount'
  | 'seo'
  | 'hasOneTimePurchaseOption'
  | 'hasSubscriptionPurchaseOption'
  | 'hasStock'
>;
