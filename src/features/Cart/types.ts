import type { ProductPageProduct } from 'features/ProductPage/types';
import type { SetOptional } from 'type-fest';
import type { ProductPriceOption, ProductVariant } from 'types/product';
import type { CartQuickAddProduct } from './QuickAdd/types';

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
  // Freeform data, for display or later API calls
  data: Record<string, unknown>;
};

export type CartItemInput = SetOptional<CartItem, 'interval' | 'intervalCount' | 'imageSrc' | 'imageAlt' | 'data'>;

export type AddToCartInput = {
  product: CartQuickAddProduct | ProductPageProduct;
  variant: ProductVariant;
  price: ProductPriceOption;
};

export type CartQuickAdd = {
  productId: string;
};
