import Wrapper from 'components/Wrapper/Content';
import Account from 'features/Account/Account';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';

const AccountPurchasesPage: NextPage = () => {
  return (
    <Layout title="Account">
      <div className="bg-gray-100 flex flex-col grow">
        <Wrapper>
          <Account>
            <div>PLACEHOLDER</div>
          </Account>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AccountPurchasesPage;
