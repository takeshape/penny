import { defaultCurrency } from 'config';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

/* Global */
export const currencyAtom = atomWithStorage('currency', defaultCurrency);

/* Nav */
export const isSearchOpenAtom = atom(false);
export const isMobileMenuOpenAtom = atom(false);
