import { useQuery } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import PageLoader from 'components/PageLoader';
import Section from 'components/Section';
import Container from 'features/Container';
import LoyaltyCard from 'features/purchases/LoyaltyCard';
import PaymentList from 'features/purchases/PaymentList';
import SubscriptionList from 'features/SubscriptionList';
import Page from 'layouts/Page';
import type { NextPage } from 'next';
import type { GetMyPurchasesDataResponse } from 'queries';
import { GetMyPurchasesData } from 'queries';
import useProfile from 'services/takeshape/useProfile';
import { Alert, Box, Divider, Flex, Heading, Spinner } from 'theme-ui';

const PurchasesPage: NextPage = () => {
  const { isProfileReady } = useProfile();
  const skip = !isProfileReady;

  const { data: purchasesData, error } = useQuery<GetMyPurchasesDataResponse>(GetMyPurchasesData, {
    skip,
    pollInterval: 15000
  });

  if ((!purchasesData && !error) || error) {
    return (
      <Container title="Purchases">
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
      </Container>
    );
  }

  const { payments, subscriptions, loyaltyCard } = purchasesData;

  return (
    <Container title="Purchases">
      <Page>
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
      </Page>
    </Container>
  );
};

export default withAuthenticationRequired(PurchasesPage, {
  onRedirecting: () => <PageLoader />
});
