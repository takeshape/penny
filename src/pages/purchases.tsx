import { useQuery } from '@apollo/client';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper/Content';
import LoyaltyCard from 'features/purchases/LoyaltyCard';
import PaymentList from 'features/purchases/PaymentList';
import SubscriptionList from 'features/SubscriptionList';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import type { GetMyPurchasesDataResponse } from 'queries';
import { GetMyPurchasesData } from 'queries';
import { Alert, Box, Divider, Flex, Heading, Spinner } from 'theme-ui';

const PurchasesPage: NextPage = () => {
  const { status } = useSession({ required: true });

  const skip = status !== 'authenticated';

  const { data: purchasesData, error } = useQuery<GetMyPurchasesDataResponse>(GetMyPurchasesData, {
    skip,
    pollInterval: 15000
  });

  if ((!purchasesData && !error) || error) {
    return (
      <Layout title="Purchases">
        <Wrapper>
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
        </Wrapper>
      </Layout>
    );
  }

  const { profile, subscriptions, loyaltyCard } = purchasesData;
  const orders = profile.shopifyCustomer?.orders.edges.map(({ node }) => node);

  return (
    <Layout title="Purchases">
      <Wrapper>
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
              {!orders && !error ? <Spinner /> : null}
              {orders && <PaymentList orders={orders} />}
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
      </Wrapper>
    </Layout>
  );
};

export default PurchasesPage;
