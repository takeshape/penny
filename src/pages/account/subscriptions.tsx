import { getLayoutData } from 'data/getLayoutData';
import { AccountSubscriptions } from 'features/AccountSubscriptions/AccountSubscriptions';
import Layout from 'layouts/Account';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPurchasesPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Subscriptions' }}>
      <AccountSubscriptions />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default AccountPurchasesPage;
