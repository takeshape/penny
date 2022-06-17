import { useQuery } from '@apollo/client';
import { getLayoutData } from 'data/getLayoutData';
import { AccountLoyaltyCard } from 'features/AccountLoyaltyCard/AccountLoyaltyCard';
import { GetMyLoyaltyCardQuery, GetMyLoyaltyCardResponse } from 'features/AccountLoyaltyCard/queries';
import { AccountReferrals } from 'features/AccountReferrals/AccountReferrals';
import Layout from 'layouts/Account';
import { InferGetStaticPropsType, NextPage } from 'next';

const AccountRewardsPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useQuery<GetMyLoyaltyCardResponse>(GetMyLoyaltyCardQuery);

  if (!data) {
    return null;
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Rewards' }}>
      <AccountReferrals />
      <AccountLoyaltyCard
        code={data?.loyaltyCard.code}
        loyalty_card={data?.loyaltyCard.loyalty_card}
        assets={data?.loyaltyCard.assets}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default AccountRewardsPage;
