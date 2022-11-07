import { AccountPayments } from 'features/AccountPayments/AccountPayments';
import { paymentMethods } from 'features/AccountPayments/fixtures';
import { getPaymentMethods } from 'features/AccountPayments/transforms';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPaymentsPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Payment Methods' }}>
      <AccountPayments paymentMethods={getPaymentMethods(paymentMethods)} />
    </Layout>
  );
};

export default AccountPaymentsPage;
