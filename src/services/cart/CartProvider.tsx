import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { currencyAtom } from 'store';
import { cartCheckoutResultAtom, cartItemsAtom } from './store';

const STRIPE_CHECKOUT_ACTION_SUCCESS = 'success';

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const [previousCurrency, setPreviousCurrency] = useState('');
  const setCartItems = useSetAtom(cartItemsAtom);
  const setCheckoutResult = useSetAtom(cartCheckoutResultAtom);
  const currency = useAtomValue(currencyAtom);

  const {
    replace,
    pathname,
    query: { stripe_checkout_action: action, ...query }
  } = useRouter();

  useEffect(() => {
    if (action) {
      setCheckoutResult(action as string);
      replace(pathname, query, { shallow: true });
    }

    if (action === STRIPE_CHECKOUT_ACTION_SUCCESS) {
      setCartItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, pathname, query, replace]);

  useEffect(() => {
    // If the currency changes the cart needs to be reset to prevent out-of-sync
    // prices... a smarter system might look up all the new prices and re-populate
    // the cart
    if (previousCurrency && currency !== previousCurrency) {
      setCartItems([]);
    }
    setPreviousCurrency(currency);
  }, [currency, previousCurrency, setCartItems]);

  return <Fragment>{children}</Fragment>;
};

export default CartProvider;
