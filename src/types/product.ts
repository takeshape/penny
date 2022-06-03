import { currencyList } from 'config';

export type ProductImage = {
  height: number;
  url: string;
  width: number;
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
  merchandiseId: string;
  subscriptionId?: string;
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  intervalCount: number;
  intervalMaxCycles?: number | null;
  intervalMinCycles?: number | null;
  intervalAnchor?: ProductPriceRecurringAnchor | null;
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

export type ProductVariantOption = {
  name: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  image: ProductImage;
  prices: ProductPriceOption[];
  available: boolean;
  inventory: number;
  sku: string;
  options: ProductVariantOption[];
};

export type ProductSeo = {
  title: string;
  description: string;
};

export type ProductBase = {
  id: string;
  name: string;
  url: string;
  description: string;
  descriptionHtml: string;
  featuredImage: ProductImage;
  images: ProductImage[];
  priceMin: ProductPrice;
  priceMax: ProductPrice;
  variantsCount: number;
  variants?: ProductVariant[];
  hasOneTimePurchaseOption: boolean;
  hasSubscriptionPurchaseOption: boolean;
  // Freeform data, for display or later API calls
  data: Record<string, unknown>;
  seo?: ProductSeo;
};

export type ProductListItem = ProductBase;

export type Product = ProductBase & {
  variants: ProductVariant[];
  seo: ProductSeo;
};
