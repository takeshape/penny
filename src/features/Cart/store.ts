import { cartLocalStorageKey, defaultProductImage } from 'config';
import { atom } from 'jotai';
import { atomWithStorage, splitAtom } from 'jotai/utils';
import type { AddToCartInput, CartItem, CartItemInput } from './types';

/* Cart UI */
export const isCartOpenAtom = atom(false);
export const isCartCheckingOutAtom = atom(false);

/* Cart Items */
export const cartItemsAtom = atomWithStorage<CartItem[]>(cartLocalStorageKey, []);
export const cartItemAtomsAtom = splitAtom(cartItemsAtom);

const withCartItemDefaults = (item: CartItemInput): CartItem => ({
  ...item,
  interval: item.interval ?? 'DAY',
  intervalCount: item.intervalCount ?? 0,
  imageSrc: item.imageSrc ?? defaultProductImage.url,
  imageAlt: item.imageAlt ?? 'Default product image',
  data: item.data ?? {}
});

const addToCartInputToCartItem = ({ product, variant, price }: AddToCartInput) => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    href: product.url,
    unitAmount: price.amount,
    currency: price.currencyCode,
    quantity: 1,
    imageSrc: product.featuredImage.url,
    imageAlt: product.featuredImage.altText,
    interval: price.interval,
    intervalCount: price.intervalCount,
    data: {
      product,
      productVariant: variant,
      price
    }
  };
};

export const addToCartAtom = atom<null, AddToCartInput>(null, (get, set, input) => {
  const cartItem = addToCartInputToCartItem(input);
  const itemToAdd = withCartItemDefaults(cartItem);

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
