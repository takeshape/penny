import { useQuery } from '@apollo/client';
import AccountLoyaltyCard from 'features/Account/LoyaltyCard/LoyaltyCard';
import AccountReferrals from 'features/Account/Referrals/Referrals';
import Layout from 'layouts/Account';
import type { NextPage } from 'next';
import type { GetMyLoyaltyCardResponse } from 'queries';
import { GetMyLoyaltyCardQuery } from 'queries';

const AccountRewardsPage: NextPage = () => {
  const { data } = useQuery<GetMyLoyaltyCardResponse>(GetMyLoyaltyCardQuery);

  if (!data) {
    return null;
  }

  return (
    <Layout title="Rewards">
      <AccountReferrals />
      <AccountLoyaltyCard
        code={data?.loyaltyCard.code}
        loyalty_card={data?.loyaltyCard.loyalty_card}
        assets={data?.loyaltyCard.assets}
      />
    </Layout>
  );
};

export default AccountRewardsPage;
