import { useEffect } from 'react';
import { Container, Spinner } from '@theme-ui/components';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useCart } from 'lib/cart';
import { useApolloClient } from '@apollo/client';
import { getCheckoutPayload } from 'lib/utils/checkout';
import { CreateMyCheckoutSession } from 'lib/queries';
import getStripe from 'lib/utils/stripe';
import { useProfile } from 'lib/takeshape';

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
