import AccountOverview from 'features/AccountOverview/AccountOverview';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <AccountOverview />
    </Layout>
  );
};

export default AccountPage;
