'use client';

import { cartDiscountCodeAtom, cartItemsAtom, isCartCheckingOutAtom } from '@/features/Cart/store';
import { useRemoveQueryParams } from '@/lib/hooks/useRemoveQueryParams';
import { getSingle } from '@/lib/util/types';
import { currencyAtom, notificationAtom } from '@/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, PropsWithChildren, useEffect, useState } from 'react';

export const CartProvider = ({ children }: PropsWithChildren) => {
  const setCartItems = useSetAtom(cartItemsAtom);
  const setNotification = useSetAtom(notificationAtom);
  const setDiscountCode = useSetAtom(cartDiscountCodeAtom);
  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const currency = useAtomValue(currencyAtom);

  const [previousCurrency, setPreviousCurrency] = useState('');
  const router = useRouter();

  const searchParams = useSearchParams();
  const action = searchParams?.get('shopify_checkout_action');
  const discount = searchParams?.get('discount');
  const replacementUrl = useRemoveQueryParams({ remove: ['shopify_checkout_action', 'discount'] });

  useEffect(() => {
    if (action) {
      let title = '';
      let body = '';

      if (action === 'success') {
        title = 'Successfully checked out';
        body = 'Your cart has been cleared.';
        setCartItems([]);
        setDiscountCode(null);
      }

      if (action === 'canceled') {
        title = 'Checkout canceled';
        body = 'Your cart has been saved.';
      }

      setNotification({ title, body, showFor: 5000, status: 'info' });

      if (replacementUrl) {
        void router.replace(replacementUrl);
      }
    }
  }, [action, router, setCartItems, setDiscountCode, setNotification, replacementUrl]);

  useEffect(() => {
    const discountCode = getSingle(discount);
    if (discountCode) {
      const ucDiscountCode = discountCode.toUpperCase();
      setDiscountCode(ucDiscountCode);
      const title = `Discount code added`;
      const body = `<b>${ucDiscountCode}</b> has been added to your cart and will be applied at checkout.`;
      setNotification({ title, body, showFor: 5000, status: 'info' });
      if (replacementUrl) {
        void router.replace(replacementUrl);
      }
    }
  }, [discount, router, setDiscountCode, setNotification, replacementUrl]);

  useEffect(() => {
    // If the currency changes the cart needs to be reset to prevent out-of-sync
    // prices... a smarter system might look up all the new prices and re-populate
    // the cart
    if (previousCurrency && currency !== previousCurrency) {
      setNotification({ title: 'Currency changed', body: 'You cart has been cleared.', showFor: 5000, status: 'info' });
      setCartItems([]);
    }
    setPreviousCurrency(currency);
  }, [currency, previousCurrency, setCartItems, setNotification]);

  useEffect(() => {
    const handleBfCache = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setIsCartCheckingOut(false);
      }
    };
    window.addEventListener('pagehide', handleBfCache);
    return () => window.removeEventListener('pagehide', handleBfCache);
  }, [setIsCartCheckingOut]);

  return <Fragment>{children}</Fragment>;
};
