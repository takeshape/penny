import { useMutation } from '@apollo/client';
import { useAtomValue, useSetAtom } from 'jotai';
import { signIn, useSession } from 'next-auth/react';
import type { CreateMyCartResponse } from 'queries';
import { CreateMyCartQuery } from 'queries';
import { useCallback, useEffect } from 'react';
import { cartItemsAtom, cartQuantityAtom, isCartCheckingOutAtom } from 'services/cart/store';
import type { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';
import { getCheckoutPayload } from 'utils/checkout';

export const Checkout = () => {
  const { status } = useSession();

  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);

  const [setCheckoutPayload, { data: checkoutData }] = useMutation<
    CreateMyCartResponse,
    MutationShopifyStorefront_CartCreateArgs
  >(CreateMyCartQuery);

  const handleCheckout = useCallback(() => {
    if (status !== 'authenticated') {
      signIn(undefined, { callbackUrl: '/_checkout' });
      return;
    }

    setIsCartCheckingOut(true);
    setCheckoutPayload({
      variables: getCheckoutPayload(items)
    });
  }, [items, setCheckoutPayload, status]);

  useEffect(() => {
    if (checkoutData?.myCart?.cart?.checkoutUrl) {
      window.location.href = checkoutData.myCart.cart.checkoutUrl;
    }
  }, [checkoutData]);

  return (
    <button
      onClick={handleCheckout}
      disabled={quantity === 0}
      className="flex items-center justify-center w-full cursor-pointer rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      Checkout
    </button>
  );
};

export default Checkout;
