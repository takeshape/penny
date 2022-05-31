import Wrapper from 'components/Wrapper/Content';
import AccountOverviewAddress from 'features/AccountOverview/Address/Address';
import AccountOverviewNotifications from 'features/AccountOverview/Notifications/Notifications';
import AccountOverviewProfile from 'features/AccountOverview/Profile/Profile';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <div className="bg-gray-100">
        <Wrapper>
          <AccountOverviewProfile />

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <AccountOverviewAddress />

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <AccountOverviewNotifications />
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AccountPage;
