import AccountOverviewAddress from 'features/Account/Form/Address';
import AccountFormMarketing from 'features/Account/Form/Marketing';
import AccountOverviewProfile from 'features/Account/Form/Profile';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const AccountPage: NextPage = () => {
  useSession({ required: true });
  return (
    <Layout title="Account">
      <AccountOverviewProfile />
      <AccountOverviewAddress />
      <AccountFormMarketing />
    </Layout>
  );
};

export default AccountPage;
