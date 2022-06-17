import { AccountFormAddress } from 'features/AccountForm/AccountFormAddress';
import { AccountFormMarketing } from 'features/AccountForm/AccountFormMarketing';
import { AccountFormProfile } from 'features/AccountForm/AccountFormProfile';
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
