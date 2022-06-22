import { useMutation } from '@apollo/client';
import Button from 'components/Button/Button';
import { signedInCheckout } from 'config';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';
import { CreateCartMutation, CreateCartResponse } from '../queries';
import { cartItemsAtom, cartQuantityAtom, isCartCheckingOutAtom } from '../store';
import { getCartVariables } from '../utils';

export const CartCheckout = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);

  const [setCartMutation, { data }] = useMutation<CreateCartResponse, MutationShopifyStorefront_CartCreateArgs>(
    CreateCartMutation
  );

  const handleCheckout = useCallback(() => {
    if (signedInCheckout && !session) {
      push(`/auth/signin?error=CheckoutSessionRequired&callbackUrl=${encodeURIComponent('/_checkout')}`);
      return;
    }

    setIsCartCheckingOut(true);
    setCartMutation({
      variables: getCartVariables(items, session)
    });
  }, [session, setIsCartCheckingOut, setCartMutation, items, push]);

  useEffect(() => {
    if (data?.cart?.cart?.checkoutUrl) {
      window.location.href = data.cart.cart.checkoutUrl;
    }
  }, [data]);

  return (
    <Button
      onClick={handleCheckout}
      disabled={quantity === 0}
      color="primary"
      size="large"
      className="flex justify-center w-full cursor-pointer"
    >
      Checkout
    </Button>
  );
};
