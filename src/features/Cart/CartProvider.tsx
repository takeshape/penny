import { cartItemsAtom } from 'features/Cart/store';
import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { currencyAtom, notificationAtom } from 'store';

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const setCartItems = useSetAtom(cartItemsAtom);
  const setNotification = useSetAtom(notificationAtom);

  const [previousCurrency, setPreviousCurrency] = useState('');
  const currency = useAtomValue(currencyAtom);

  const {
    replace,
    pathname,
    query: { shopify_checkout_action: action, ...query }
  } = useRouter();

  useEffect(() => {
    if (action) {
      let title = '';
      let body = '';

      if (action === 'success') {
        title = 'Successfully checked out';
        body = 'Your cart has been cleared.';
        setCartItems([]);
      }

      if (action === 'canceled') {
        title = 'Checkout canceled';
        body = 'Your cart has been saved.';
      }

      setNotification({ title, body, showFor: 5000, status: 'info' });
      replace(pathname, query, { shallow: true });
    }
  }, [action, pathname, query, replace, setCartItems, setNotification]);

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

  return <Fragment>{children}</Fragment>;
};

export default CartProvider;
