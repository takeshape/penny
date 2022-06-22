import { useApolloClient } from '@apollo/client';
import PageLoader from 'components/PageLoader';
import { CreateCartMutation, CreateCartResponse } from 'features/Cart/queries';
import { cartItemsAtom } from 'features/Cart/store';
import { getCartVariables } from 'features/Cart/utils';
import { useAtomValue } from 'jotai';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { data: session } = useSession();
  const client = useApolloClient();
  const cartItems = useAtomValue(cartItemsAtom);

  useEffect(() => {
    const doCheckout = async () => {
      const { data } = await client.mutate<CreateCartResponse, MutationShopifyStorefront_CartCreateArgs>({
        mutation: CreateCartMutation,
        variables: getCartVariables(cartItems, session)
      });

      if (data?.cart?.cart?.checkoutUrl) {
        window.location.href = data.cart.cart.checkoutUrl;
      }
    };

    if (session) {
      doCheckout();
    }
  }, [client, cartItems, session]);

  return <PageLoader />;
};

export default _CheckoutPage;
