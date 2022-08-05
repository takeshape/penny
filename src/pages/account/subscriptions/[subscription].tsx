import PageLoader from 'components/PageLoader';
import { AccountSubscription } from 'features/AccountSubscriptions/AccountSubscription';
import { subscriptions as rawSubscriptions } from 'features/AccountSubscriptions/fixtures';
import { getSubscription } from 'features/AccountSubscriptions/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId } from 'transforms/shopify';
import { getSingle } from 'utils/types';

const AccountSubscriptionsPage: NextPage = ({
  navigation,
  footer,
  subscriptionId
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscription is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  const subscription = rawSubscriptions.find((sub) => shopifyGidToId(sub.id) === subscriptionId);

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscription subscription={getSubscription(subscription)} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { navigation, footer } = await getLayoutData();
  const subscriptionId = getSingle(params.subscription);

  return {
    props: {
      subscriptionId,
      navigation,
      footer
    }
  };
};

export default AccountSubscriptionsPage;
