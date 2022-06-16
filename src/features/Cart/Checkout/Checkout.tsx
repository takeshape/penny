import { useMutation } from '@apollo/client';
import Button from 'components/Button/Button';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { CreateMyCartMutation, CreateMyCartResponse } from 'queries';
import { useCallback, useEffect } from 'react';
import { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';
import { cartItemsAtom, cartQuantityAtom, isCartCheckingOutAtom } from '../store';
import { getCheckoutPayload } from '../utils';

export const CartCheckout = () => {
  const { data: session } = useSession();

  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);

  const [setCheckoutPayload, { data: checkoutData }] = useMutation<
    CreateMyCartResponse,
    MutationShopifyStorefront_CartCreateArgs
  >(CreateMyCartMutation);

  const handleCheckout = useCallback(() => {
    setIsCartCheckingOut(true);
    setCheckoutPayload({
      variables: getCheckoutPayload(items, session)
    });
  }, [items, setCheckoutPayload, setIsCartCheckingOut, session]);

  useEffect(() => {
    if (checkoutData?.myCart?.cart?.checkoutUrl) {
      window.location.href = checkoutData.myCart.cart.checkoutUrl;
    }
  }, [checkoutData]);

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

export default CartCheckout;
