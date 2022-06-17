import { getLayoutData } from 'data/getLayoutData';
import { AccountFormPassword } from 'features/AccountForm/AccountFormPassword';
import Layout from 'layouts/Account';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPasswordPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Password' }}>
      <AccountFormPassword />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default AccountPasswordPage;
