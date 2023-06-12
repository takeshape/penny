import { cartDiscountCodeAtom, cartItemsAtom, isCartCheckingOutAtom } from 'features/Cart/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { currencyAtom, notificationAtom } from 'store';
import { getSingle } from 'utils/types';

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const setCartItems = useSetAtom(cartItemsAtom);
  const setNotification = useSetAtom(notificationAtom);
  const setDiscountCode = useSetAtom(cartDiscountCodeAtom);
  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);

  const [previousCurrency, setPreviousCurrency] = useState('');
  const currency = useAtomValue(currencyAtom);

  const [listenerAdded, setListenerAdded] = useState(false);

  const handlePageshow = useCallback(
    (event: PageTransitionEvent) => {
      // This is restoring the back/forward cache snapshot, and needs to be
      // reset explicitly
      if (event.persisted) {
        setIsCartCheckingOut(false);
      }
    },
    [setIsCartCheckingOut]
  );

  const {
    replace,
    query: { shopify_checkout_action: action, discount, ...query }
  } = useRouter();

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
      replace({ query }, undefined, { shallow: true });
    }
  }, [action, query, replace, setCartItems, setDiscountCode, setNotification]);

  useEffect(() => {
    const discountCode = getSingle(discount);
    if (discountCode) {
      const ucDiscountCode = discountCode.toUpperCase();
      setDiscountCode(ucDiscountCode);
      const title = `Discount code added`;
      const body = `<b>${ucDiscountCode}</b> has been added to your cart and will be applied at checkout.`;
      setNotification({ title, body, showFor: 5000, status: 'info' });
      replace({ query }, undefined, { shallow: true });
    }
  }, [discount, query, replace, setDiscountCode, setNotification]);

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

  // useEffect(() => {
  //   // Can only add once, otherwise the handler won't be in place
  //   if (!listenerAdded) {
  //     setListenerAdded(true);
  //     window.addEventListener('pageshow', handlePageshow);
  //   }
  //   return () => window.removeEventListener('pageshow', handlePageshow);
  // }, [handlePageshow, listenerAdded]);

  useEffect(() => {
    const checkBfcache = (e: any) => {
      // eslint-disable-next-line no-console
      console.log('This page is restored from bfcache?', e.persisted);
      if (e.persisted) {
        setIsCartCheckingOut(false);
      }
    };
    window.addEventListener('pageshow', checkBfcache);
    return () => window.removeEventListener('pageshow', checkBfcache);
  }, [setIsCartCheckingOut]);

  return <Fragment>{children}</Fragment>;
};
