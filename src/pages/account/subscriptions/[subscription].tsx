import PageLoader from 'components/PageLoader';
import { AccountSubscription } from 'features/AccountSubscriptions/AccountSubscription';
import { GetMySubscriptionQuery } from 'features/AccountSubscriptions/queries';
import { getSubscription } from 'features/AccountSubscriptions/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const AccountSubscriptionsPage: NextPage = ({
  navigation,
  footer,
  subscriptionId
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  const { data, refetch } = useAuthenticatedQuery<GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables>(
    GetMySubscriptionQuery,
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
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscription' }}>
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 sm:px-4 sm:p-6">
          <AccountSubscription subscription={getSubscription(data)} refetchSubscriptionList={refetch} />
        </div>
      </div>
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
