import { cartLocalStorageKey } from 'config';
import { atom } from 'jotai';
import { atomWithStorage, splitAtom } from 'jotai/utils';
import type { SetOptional } from 'type-fest';

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
  interval: 'none' | 'day' | 'week' | 'month' | 'year';
  intervalCount: number;
  // Freeform data, for display or later API calls
  data: Record<string, unknown>;
};

export type CartItemInput = SetOptional<CartItem, 'interval' | 'intervalCount' | 'imageSrc' | 'imageAlt' | 'data'>;

/* Cart UI */
export const isCartOpenAtom = atom(false);
export const cartCheckoutResultAtom = atom<string>('');
export const cartTimeoutMsAtom = atom<number>(0);

/* Cart Items */
export const cartItemsAtom = atomWithStorage<CartItem[]>(cartLocalStorageKey, []);
export const cartItemAtomsAtom = splitAtom(cartItemsAtom);

const withItemDefaults = (item: CartItemInput): CartItem => ({
  ...item,
  interval: item.interval ?? 'none',
  intervalCount: item.intervalCount ?? 0,
  imageSrc: item.imageSrc ?? '/images/default-product-image.webp',
  imageAlt: item.imageAlt ?? 'Default product image',
  data: item.data ?? {}
});

export const addToCartAtom = atom<null, CartItemInput>(null, (get, set, itemInput) => {
  const itemToAdd = withItemDefaults(itemInput);

  const items = get(cartItemAtomsAtom);

  const itemAlreadyInCart = items.find((item) => {
    const i = get(item);
    return i.id === itemToAdd.id && i.interval === itemToAdd.interval;
  });

  if (itemAlreadyInCart) {
    // Increase quantity of the existing item
    set(itemAlreadyInCart, (i) => ({ ...i, quantity: i.quantity + itemToAdd.quantity }));
  } else {
    // Insert a new item
    set(cartItemAtomsAtom, { type: 'insert', value: itemToAdd });
  }
});

export const cartQuantityAtom = atom<number>((get) => {
  return get(cartItemsAtom).reduce((q, i) => q + i.quantity, 0);
});

export const cartSubtotalAtom = atom<number>((get) => {
  return get(cartItemsAtom)
    .map((item) => item.unitAmount * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);
});
