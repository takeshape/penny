import AccountOverviewAddress from 'features/Account/Form/Address';
import AccountFormMarketing from 'features/Account/Form/Marketing';
import AccountOverviewProfile from 'features/Account/Form/Profile';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <AccountOverviewProfile />
      <AccountOverviewAddress />
      <AccountFormMarketing />
    </Layout>
  );
};

export default AccountPage;
