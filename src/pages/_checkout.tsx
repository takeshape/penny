import { useApolloClient } from '@apollo/client';
import PageLoader from 'components/PageLoader';
import { cartItemsAtom } from 'features/Cart/store';
import { getCheckoutPayload } from 'features/Cart/utils';
import { useAtomValue } from 'jotai';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { CreateMyCartMutation, CreateMyCartResponse } from 'queries';
import { useEffect } from 'react';
import { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { data: session } = useSession();
  const client = useApolloClient();
  const cartItems = useAtomValue(cartItemsAtom);

  useEffect(() => {
    const doCheckout = async () => {
      const { data } = await client.mutate<CreateMyCartResponse, MutationShopifyStorefront_CartCreateArgs>({
        mutation: CreateMyCartMutation,
        variables: getCheckoutPayload(cartItems, session)
      });

      if (data?.myCart?.cart?.checkoutUrl) {
        window.location.href = data.myCart.cart.checkoutUrl;
      }
    };

    if (session) {
      doCheckout();
    }
  }, [client, cartItems, session]);

  return <PageLoader />;
};

export default _CheckoutPage;
