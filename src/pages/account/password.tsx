import { AccountFormPassword } from 'features/AccountForm/AccountFormPassword';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPasswordPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer }) => {
  return (
    <Layout footer={footer} seo={{ title: 'Password' }}>
      <AccountFormPassword />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountPasswordPage;
