import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery } from 'features/AccountLoyaltyCard/queries';
import { getLoyaltyCard } from 'features/AccountLoyaltyCard/transforms';
import { LoyaltyCard } from 'features/AccountLoyaltyCard/types';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { NextPage } from 'next';
import { GetMyLoyaltyCardQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';

const AccountRewardsPage: NextPage = () => {
  const { transformedData: loyaltyCard } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse, {}, LoyaltyCard>(
    GetMyLoyaltyCardQuery,
    { transform: { data: getLoyaltyCard } }
  );

  if (!loyaltyCard) {
    return null;
  }

  return (
    <Layout seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      {loyaltyCard && <AccountLoyaltyCard loyaltyCard={loyaltyCard} />}
    </Layout>
  );
};

export default AccountRewardsPage;
