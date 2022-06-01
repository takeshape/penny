import Wrapper from 'components/Wrapper/Content';
import AccountOverviewAddress from './Address';
import AccountOverviewMarketing from './Marketing';
import AccountOverviewProfile from './Profile';

export const AccountOverview = () => {
  return (
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

        <AccountOverviewMarketing />
      </Wrapper>
    </div>
  );
};

export default AccountOverview;
