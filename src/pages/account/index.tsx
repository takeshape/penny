import { AccountFormAddress } from 'features/AccountForm/AccountFormAddress';
import { AccountFormMarketing } from 'features/AccountForm/AccountFormMarketing';
import { AccountFormProfile } from 'features/AccountForm/AccountFormProfile';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
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

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountPage;
