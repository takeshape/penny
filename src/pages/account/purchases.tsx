import { getLayoutData } from 'data/getLayoutData';
import { AccountPurchaseList } from 'features/AccountPurchases/AccountPurchaseList';
import Layout from 'layouts/Account';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPurchasesPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Purchases' }}>
      <AccountPurchaseList />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default AccountPurchasesPage;
