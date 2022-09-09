import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import { GetMySubscriptionListQuery } from 'features/AccountSubscriptions/queries';
import { getSubscriptionList } from 'features/AccountSubscriptions/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetMySubscriptionListQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';

const AccountSubscriptionsPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, refetch } = useAuthenticatedQuery<GetMySubscriptionListQueryResponse>(GetMySubscriptionListQuery);

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions subscriptions={getSubscriptionList(data)} refetchSubscriptionList={refetch} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountSubscriptionsPage;
