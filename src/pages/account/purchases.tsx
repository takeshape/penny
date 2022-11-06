import { AccountPurchaseList } from 'features/AccountPurchases/AccountPurchaseList';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPurchasesPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer }) => {
  return (
    <Layout footer={footer} seo={{ title: 'Purchases' }}>
      <AccountPurchaseList />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountPurchasesPage;
