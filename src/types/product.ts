import { currencyList } from 'config';

export type ProductImage = {
  height: number;
  url: string;
  width: number;
};

export type ProductPriceOption = {
  merchandiseId: string;
  subscriptionId?: string;
  interval: 'day' | 'week' | 'month' | 'year';
  intervalCount: number;
  discountType: 'percentage' | 'none';
  discountAmount: number;
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

export type ProductReviewReviewer = {
  firstName: string;
  lastName: string;
  verifiedBuyer: string;
  address: string;
  imageUrl: string;
};

export type ProductReview = {
  rating: number;
  title: string;
  body: string;
  createdAt: string;
  timeAgo: string;
  reviewer: ProductReviewReviewer;
};

export type ProductReviews = {
  perPage: number;
  currentPage: number;
  totalPages: number;
  data: ProductReview[];
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
  reviewsCount: number;
  reviewsAverage: number;
  reviews?: ProductReviews;
  seo?: ProductSeo;
};

export type ProductListItem = ProductBase;

export type Product = ProductBase & {
  variants: ProductVariant[];
  seo: ProductSeo;
};
