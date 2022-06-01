import Wrapper from 'components/Wrapper/Content';
import Account from 'features/Account/Account';
import AccountOverviewAddress from 'features/Account/Overview/Address';
import AccountOverviewMarketing from 'features/Account/Overview/Marketing';
import AccountOverviewProfile from 'features/Account/Overview/Profile';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <div className="bg-gray-100 flex flex-col grow">
        <Wrapper>
          <Account>
            <AccountOverviewProfile />
            <AccountOverviewAddress />
            <AccountOverviewMarketing />
          </Account>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AccountPage;
