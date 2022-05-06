/**
 * TODO: Should be able to remove / rename this.
 */
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { Fragment, useEffect } from 'react';
import { cartCheckoutResultAtom, cartItemsAtom } from 'store';

const stripeCheckoutActionSuccess = 'success';

export const CartProvider = ({ children }: PropsWithChildren<{}>) => {
  const setCartItems = useSetAtom(cartItemsAtom);
  const setCheckoutResult = useSetAtom(cartCheckoutResultAtom);

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

    if (action === stripeCheckoutActionSuccess) {
      setCartItems([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, pathname, query, replace]);

  return <Fragment>{children}</Fragment>;
};

export default CartProvider;
