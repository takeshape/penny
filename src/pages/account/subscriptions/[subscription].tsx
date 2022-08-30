import PageLoader from 'components/PageLoader';
import { AccountSubscription } from 'features/AccountSubscriptions/AccountSubscription';
import { GetSubscriptionQuery } from 'features/AccountSubscriptions/queries';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetSubscriptionQueryResponse, GetSubscriptionQueryVariables } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const AccountSubscriptionsPage: NextPage = ({
  navigation,
  footer,
  subscriptionId
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  const { data } = useAuthenticatedQuery<GetSubscriptionQueryResponse, GetSubscriptionQueryVariables>(
    GetSubscriptionQuery,
    { variables: { id: subscriptionId } }
  );

  if (isFallback || !data) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscription is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscription subscription={data.subscription} />
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
