import Button from '@/components/Button/Button';
import { signedInCheckout } from '@/config';
import { getCheckoutUrl } from '@/features/Cart/transforms';
import { CartCreateMutationResponse, CartCreateMutationVariables } from '@/types/storefront';
import { useStorefrontMutation } from '@/utils/storefront';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { CartCreateMutation } from '../queries.storefront';
import { cartDiscountCodeAtom, cartItemsAtom, cartQuantityAtom, isCartCheckingOutAtom } from '../store';
import { getCartVariables } from '../utils';

export const CartCheckout = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  const setIsCartCheckingOut = useSetAtom(isCartCheckingOutAtom);
  const quantity = useAtomValue(cartQuantityAtom);
  const items = useAtomValue(cartItemsAtom);
  const discountCode = useAtomValue(cartDiscountCodeAtom);

  const [setCartMutation, { data }] = useStorefrontMutation<CartCreateMutationResponse, CartCreateMutationVariables>(
    CartCreateMutation
  );

  const handleCheckout = useCallback(() => {
    if (signedInCheckout && !session) {
      push(`/auth/signin?error=CheckoutSessionRequired&callbackUrl=${encodeURIComponent('/_checkout')}`);
      return;
    }

    setIsCartCheckingOut(true);
    setCartMutation({
      variables: getCartVariables(items, session, discountCode)
    });
  }, [session, setIsCartCheckingOut, setCartMutation, items, discountCode, push]);

  useEffect(() => {
    const checkoutUrl = getCheckoutUrl(data);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
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
