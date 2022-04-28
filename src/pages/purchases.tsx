import { useQuery } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoyaltyCard from 'components/LoyaltyCard';
import PageLayout from 'components/PageLayout';
import PaymentList from 'components/PaymentList';
import Section from 'components/Section';
import SubscriptionList from 'components/SubscriptionList';
import type { GetMyPurchasesDataResponse } from 'lib/queries';
import { GetMyPurchasesData } from 'lib/queries';
import type { NextPage } from 'next';
import useProfile from 'services/takeshape/useProfile';
import { Alert, Box, Container, Divider, Flex, Heading, Spinner } from 'theme-ui';

const PurchasesPage: NextPage = () => {
  const { isProfileReady } = useProfile();
  const skip = !isProfileReady;

  const { data: purchasesData, error } = useQuery<GetMyPurchasesDataResponse>(GetMyPurchasesData, {
    skip,
    pollInterval: 15000
  });

  if ((!purchasesData && !error) || error) {
    return (
      <PageLayout>
        <Heading as="h1" variant="styles.pageTitle">
          Purchases
        </Heading>
        <Box variant="layout.loading">
          {!purchasesData && !error ? <Spinner /> : null}
          {error ? (
            <>
              <Alert>Error loading purchases</Alert>
              <pre style={{ color: 'red' }}>{JSON.stringify(error, null, 2)}</pre>
            </>
          ) : null}
        </Box>
      </PageLayout>
    );
  }

  const { payments, subscriptions, loyaltyCard } = purchasesData;

  return (
    <PageLayout>
      <Heading as="h1" variant="styles.pageTitle">
        Purchases
      </Heading>
      <Flex sx={{ gap: '2rem' }}>
        <Box sx={{ flex: '0 1 24rem' }}>
          <Section>
            {!loyaltyCard && !error ? <Spinner /> : null}
            {loyaltyCard ? (
              <LoyaltyCard
                code={loyaltyCard.code}
                loyalty_card={loyaltyCard.loyalty_card}
                assets={loyaltyCard.assets}
              />
            ) : null}
          </Section>
          <Section>
            <Heading variant="smallHeading" id="payments">
              Past Purchases
            </Heading>
            <Divider />
            {!payments && !error ? <Spinner /> : null}
            {payments && <PaymentList payments={payments.items} />}
          </Section>
        </Box>
        <Box sx={{ flex: '1 1 32rem' }}>
          <Section>
            <Heading variant="smallHeading" id="subscriptions">
              Active Subscriptions
            </Heading>
            <Divider />
            {!subscriptions && !error ? <Spinner /> : null}
            {subscriptions && <SubscriptionList subscriptions={subscriptions} />}
          </Section>
        </Box>
      </Flex>
    </PageLayout>
  );
};

export default withAuthenticationRequired(PurchasesPage, {
  onRedirecting: () => (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  )
});
