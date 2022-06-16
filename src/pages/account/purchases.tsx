import AccountPastPurchases from 'features/Account/Purchases/components/PurchaseList/PurchaseList';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

const AccountPurchasesPage: NextPage = () => {
  return (
    <Layout title="Purchases">
      <AccountPastPurchases />
    </Layout>
  );
};

export default AccountPurchasesPage;
