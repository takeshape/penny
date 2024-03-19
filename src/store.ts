import { defaultCurrency } from '@/config';
import { NotificationMessage } from '@/types/notification';
import { atom } from 'jotai';
import { atomWithReset, atomWithStorage } from 'jotai/utils';

/* Global */
export const currencyAtom = atomWithStorage('currency', defaultCurrency);

/* Nav */
export const isSearchOpenAtom = atom(false);
export const isMobileMenuOpenAtom = atom(false);

/* Notification */
export const notificationAtom = atomWithReset<NotificationMessage>({ title: '', body: '', status: 'info' });
