import { useApolloClient } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { CreateMyCheckoutSession } from 'queries';
import { useEffect } from 'react';
import useCart from 'services/cart/useCart';
import useProfile from 'services/takeshape/useProfile';
import { Container, Spinner } from 'theme-ui';
import { getCheckoutPayload } from 'utils/checkout';
import getStripe from 'utils/stripe';

// After a successful login, redirect here to automatically checkout with the cart
function _CheckoutPage() {
  const { isProfileReady } = useProfile();
  const client = useApolloClient();
  const { items } = useCart();

  useEffect(() => {
    const doCheckout = async () => {
      const { data } = await client.mutate({
        mutation: CreateMyCheckoutSession,
        variables: getCheckoutPayload(items, '/')
      });

      const stripe = await getStripe();

      stripe.redirectToCheckout({
        sessionId: data.session.id
      });
    };
    if (isProfileReady) {
      doCheckout();
    }
  }, [client, items, isProfileReady]);

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
