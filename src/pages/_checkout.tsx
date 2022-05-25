import { useApolloClient } from '@apollo/client';
import PageLoader from 'components/PageLoader';
import { useAtomValue } from 'jotai';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import type { CreateMyCartResponse } from 'queries';
import { CreateMyCartQuery } from 'queries';
import { useEffect } from 'react';
import { cartItemsAtom } from 'services/cart/store';
import { getCheckoutPayload } from 'services/cart/utils';
import type { MutationShopifyStorefront_CartCreateArgs } from 'types/takeshape';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { status } = useSession();
  const client = useApolloClient();
  const cartItems = useAtomValue(cartItemsAtom);

  useEffect(() => {
    const doCheckout = async () => {
      const { data } = await client.mutate<CreateMyCartResponse, MutationShopifyStorefront_CartCreateArgs>({
        mutation: CreateMyCartQuery,
        variables: getCheckoutPayload(cartItems)
      });

      if (data?.myCart?.cart?.checkoutUrl) {
        window.location.href = data.myCart.cart.checkoutUrl;
      }
    };

    if (status === 'authenticated') {
      doCheckout();
    }
  }, [client, cartItems, status]);

  return <PageLoader />;
};

export default _CheckoutPage;
