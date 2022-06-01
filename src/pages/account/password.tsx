import Wrapper from 'components/Wrapper/Content';
import Account from 'features/Account/Account';
import AccountPassword from 'features/Account/Password/Password';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';

const AccountPage: NextPage = () => {
  return (
    <Layout title="Account">
      <div className="bg-gray-100 flex flex-col grow">
        <Wrapper>
          <Account>
            <AccountPassword />
          </Account>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AccountPage;
