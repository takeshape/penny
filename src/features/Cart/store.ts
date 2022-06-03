import { cartLocalStorageKey, defaultProductImage } from 'config';
import { atom } from 'jotai';
import { atomWithStorage, splitAtom } from 'jotai/utils';
import type { CartItem, CartItemInput } from './types';

/* Cart UI */
export const isCartOpenAtom = atom(false);
export const isCartCheckingOutAtom = atom(false);

/* Cart Items */
export const cartItemsAtom = atomWithStorage<CartItem[]>(cartLocalStorageKey, []);
export const cartItemAtomsAtom = splitAtom(cartItemsAtom);

const withItemDefaults = (item: CartItemInput): CartItem => ({
  ...item,
  interval: item.interval ?? 'DAY',
  intervalCount: item.intervalCount ?? 0,
  imageSrc: item.imageSrc ?? defaultProductImage.url,
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
