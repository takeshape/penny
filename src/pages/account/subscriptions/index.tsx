import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountSubscriptionsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer }) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountSubscriptionsPage;
