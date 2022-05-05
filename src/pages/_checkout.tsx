import { useApolloClient } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAtomValue } from 'jotai';
import { CreateMyCheckoutSession } from 'queries';
import { useEffect } from 'react';
import getStripe from 'services/stripe/getStripe';
import useProfile from 'services/takeshape/useProfile';
import { cartItemsAtom } from 'store';
import { Container, Spinner } from 'theme-ui';
import { getCheckoutPayload } from 'utils/checkout';

// After a successful login, redirect here to automatically checkout with the cart
function _CheckoutPage() {
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

  return (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  );
}

export default withAuthenticationRequired(_CheckoutPage, {
  onRedirecting: () => (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  )
});
