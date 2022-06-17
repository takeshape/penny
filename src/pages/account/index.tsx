import { getLayoutData } from 'data/getLayoutData';
import { AccountFormAddress } from 'features/AccountForm/AccountFormAddress';
import { AccountFormMarketing } from 'features/AccountForm/AccountFormMarketing';
import { AccountFormProfile } from 'features/AccountForm/AccountFormProfile';
import Layout from 'layouts/Account';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Account' }}>
      <AccountFormProfile />
      <AccountFormAddress />
      <AccountFormMarketing />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default AccountPage;
