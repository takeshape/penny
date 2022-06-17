import { useQuery } from '@apollo/client';
import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery, GetMyLoyaltyCardResponse } from 'features/AccountLoyaltyCard/queries';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { NextPage } from 'next';

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
