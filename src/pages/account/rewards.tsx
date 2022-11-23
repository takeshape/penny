import { ErrorMessage } from 'components/Error/ErrorMessage';
import Wrapper from 'components/Wrapper/Content';
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
  const { transformedData: loyaltyCard, error } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse, {}, LoyaltyCard>(
    GetMyLoyaltyCardQuery,
    { transform: { data: getLoyaltyCard } }
  );

  if (error) {
    return (
      <Layout seo={{ title: 'Rewards' }}>
        <Wrapper>
          <ErrorMessage headline="API error" subhead="Could not fetch rewards" body="" />
        </Wrapper>
      </Layout>
    );
  }

  if (!loyaltyCard) {
    return null;
  }

  return (
    <Layout seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      <AccountLoyaltyCard loyaltyCard={loyaltyCard} />
    </Layout>
  );
};

export default AccountRewardsPage;
