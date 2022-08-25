import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery } from 'features/AccountLoyaltyCard/queries';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetMyLoyaltyCardQueryResponse, GetMyLoyaltyLionCustomerQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';
import { GetMyLoyaltyLionCustomerQuery } from '../../features/AccountLoyaltyLion/queries';
import { AccountLoyaltyLion } from '../../features/AccountLoyaltyLion/AccountLoyaltyLion';

const AccountRewardsPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const { data } = useAuthenticatedQuery<GetMyLoyaltyCardQueryResponse>(GetMyLoyaltyCardQuery);
  const { data } = useAuthenticatedQuery<GetMyLoyaltyLionCustomerQueryResponse>(GetMyLoyaltyLionCustomerQuery);

  if (!data) {
    return null;
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      <AccountLoyaltyLion {...data.loyaltyCard} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
};

export default AccountRewardsPage;
