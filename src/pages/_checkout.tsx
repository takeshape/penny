import { useApolloClient } from '@apollo/client';
import PageLoader from 'components/PageLoader';
import { useAtomValue } from 'jotai';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { CreateMyCheckoutSession } from 'queries';
import { useEffect } from 'react';
import { cartItemsAtom } from 'services/cart/store';
import getStripe from 'services/stripe/getStripe';
import { getCheckoutPayload } from 'utils/checkout';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { status } = useSession();
  const client = useApolloClient();
  const cartItems = useAtomValue(cartItemsAtom);

  useEffect(() => {
    const doCheckout = async () => {
      const { data } = await client.mutate({
        mutation: CreateMyCheckoutSession,
        variables: getCheckoutPayload(cartItems, '/')
      });

      const stripe = await getStripe();

      stripe.redirectToCheckout({
        sessionId: data.session.id
      });
    };
    if (status === 'authenticated') {
      doCheckout();
    }
  }, [client, cartItems, status]);

  return <PageLoader />;
};

export default _CheckoutPage;
