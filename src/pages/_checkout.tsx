import { useApolloClient } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from 'components/PageLoader';
import { useAtomValue } from 'jotai';
import type { NextPage } from 'next';
import { CreateMyCheckoutSession } from 'queries';
import { useEffect } from 'react';
import getStripe from 'services/stripe/getStripe';
import useProfile from 'services/takeshape/useProfile';
import { cartItemsAtom } from 'store';
import { getCheckoutPayload } from 'utils/checkout';

// After a successful login, redirect here to automatically checkout with the cart
const _CheckoutPage: NextPage = () => {
  const { isProfileReady } = useProfile();
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
    if (isProfileReady) {
      doCheckout();
    }
  }, [client, cartItems, isProfileReady]);

  return <PageLoader />;
};

export default withAuthenticationRequired(_CheckoutPage, {
  onRedirecting: () => <PageLoader />
});
