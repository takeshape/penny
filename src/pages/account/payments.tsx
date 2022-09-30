import { AccountPayments } from 'features/AccountPayments/AccountPayments';
import { paymentMethods } from 'features/AccountPayments/fixtures';
import { getPaymentMethods } from 'features/AccountPayments/transforms';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountPaymentsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer }) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Payment Methods' }}>
      <AccountPayments paymentMethods={getPaymentMethods(paymentMethods)} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountPaymentsPage;
