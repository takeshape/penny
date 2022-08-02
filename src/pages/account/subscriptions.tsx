import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import { subscriptions as rawSubscriptions } from 'features/AccountSubscriptions/fixtures';
import { getSubscription } from 'features/AccountSubscriptions/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountSubscriptionsPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const subscriptions = rawSubscriptions.map(getSubscription);

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions subscriptions={subscriptions} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountSubscriptionsPage;
