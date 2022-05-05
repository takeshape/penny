import { defaultCurrency } from 'config';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { Stripe_Price, Stripe_Product } from 'types/takeshape';

/* Global */
export const currencyAtom = atomWithStorage('currency', defaultCurrency);

/* Nav */
export const isSearchOpenAtom = atom(false);
export const isMobileMenuOpenAtom = atom(false);

/* Cart */
export const isCartOpenAtom = atom(false);

// Temporary, see note in services/cart/jotai
type CartItem = Stripe_Product & {
  price: Stripe_Price;
  quantity: number;
};
export const cartItemsAtom = atomWithStorage<CartItem[]>('cartItems', []);
export const cartCheckoutResult = atom<string>('');
export const cartTimeoutMsAtom = atom<number>(0);
