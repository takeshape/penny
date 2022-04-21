import { useQuery } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Alert, Box, Container, Divider, Flex, Heading, Spinner } from '@theme-ui/components';
import { Page, Section } from 'components/layout';
import LoyaltyCard from 'components/loyalty-card';
import { PaymentList } from 'components/payments';
import { SubscriptionList } from 'components/subscriptions';
import type { GetMyPurchasesDataResponse } from 'lib/queries';
import { GetMyPurchasesData } from 'lib/queries';
import { useProfile } from 'lib/takeshape';
import type { NextPage } from 'next';

const PurchasesPage: NextPage = () => {
  const { isProfileReady } = useProfile();
  const skip = !isProfileReady;

  const { data: purchasesData, error } = useQuery<GetMyPurchasesDataResponse>(GetMyPurchasesData, {
    skip,
    pollInterval: 15000
  });

  if ((!purchasesData && !error) || error) {
    return (
      <Page>
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
      </Page>
    );
  }

  const { payments, subscriptions, loyaltyCard } = purchasesData;

  return (
    <Page>
      <Heading as="h1" variant="styles.pageTitle">
        Purchases
      </Heading>
      <Flex sx={{ gap: '2rem' }}>
        <Box sx={{ flex: '0 1 24rem' }}>
          <Section>
            {!loyaltyCard && !error ? <Spinner /> : null}
            {loyaltyCard ? <LoyaltyCard {...loyaltyCard} /> : null}
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
    </Page>
  );
};

export default withAuthenticationRequired(PurchasesPage, {
  onRedirecting: () => (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  )
});
