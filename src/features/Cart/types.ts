import { ProductPageProduct } from 'features/ProductPage/types';
import { QuickAddProduct } from 'features/QuickAdd/types';
import { SetOptional } from 'type-fest';
import { ProductPriceOption, ProductVariant } from 'types/product';

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
  product: QuickAddProduct | ProductPageProduct;
  variant: ProductVariant;
  price: ProductPriceOption;
};
