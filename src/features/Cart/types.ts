import { ProductPageProduct } from '@/features/ProductPage/types';
import { QuickAddProduct } from '@/features/QuickAdd/types';
import { ProductPriceOption, ProductVariant } from '@/types/product';
import { SetOptional } from 'type-fest';

export type CartItemAttribute = {
  key: string;
  value: string;
};

export type CartItem = {
  id: string;
  name: string;
  description: string;
  href: string;
  currency: string;
  unitAmount: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  intervalCount: number;
  variantId: string;
  variantName: string;
  attributesKey?: string;
  attributes?: CartItemAttribute[];
  // Freeform data, for display or later API calls
  data?: Record<string, unknown>;
};

export type CartItemInput = SetOptional<CartItem, 'interval' | 'intervalCount' | 'imageSrc' | 'imageAlt' | 'data'>;

export type AddToCartInput = {
  product: QuickAddProduct | ProductPageProduct;
  variant: ProductVariant;
  price: ProductPriceOption;
  attributes?: CartItemAttribute[];
};
