import { defaultCurrency } from 'config';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const currencyAtom = atomWithStorage('currency', defaultCurrency);
export const searchIsOpenAtom = atom(false);
