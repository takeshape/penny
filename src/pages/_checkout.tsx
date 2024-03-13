import PageLoader from '@/components/PageLoader';
import { CartCreateMutation } from '@/features/Cart/queries.storefront';
import { cartDiscountCodeAtom, cartItemsAtom } from '@/features/Cart/store';
import { getCheckoutUrl } from '@/features/Cart/transforms';
import { getCartVariables } from '@/features/Cart/utils';
import { CartCreateMutationResponse, CartCreateMutationVariables } from '@/types/storefront';
import { useStorefrontMutation } from '@/utils/storefront';
import { useAtomValue } from 'jotai';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { data: session } = useSession();
  const cartItems = useAtomValue(cartItemsAtom);
  const discountCode = useAtomValue(cartDiscountCodeAtom);

  const [setCartMutation, { data }] = useStorefrontMutation<CartCreateMutationResponse, CartCreateMutationVariables>(
    CartCreateMutation
  );

  useEffect(() => {
    if (session) {
      setCartMutation({
        mutation: CartCreateMutation,
        variables: getCartVariables(cartItems, session, discountCode)
      });
    }
  }, [session, setCartMutation, cartItems, discountCode]);

  useEffect(() => {
    const checkoutUrl = getCheckoutUrl(data);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }, [data]);

  return <PageLoader />;
};

export default _CheckoutPage;
