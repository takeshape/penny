import { AccountFormAddress } from 'features/Account/Form/Address';
import { AccountFormMarketing } from 'features/Account/Form/Marketing';
import { AccountFormProfile } from 'features/Account/Form/Profile';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <AccountFormProfile />
      <AccountFormAddress />
      <AccountFormMarketing />
    </Layout>
  );
};

export default AccountPage;
