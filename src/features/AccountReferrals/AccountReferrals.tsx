import CardPanel from '@/components/Card/Panel/Panel';
import { useState } from 'react';
import { CreateReferral } from './components/CreateReferral';
import { ReferralList } from './components/ReferralList';
import { ReferralListItemProps } from './components/ReferralListItem';

const referralsFixtureData: ReferralListItemProps[] = [
  {
    email: 'mark@takeshape.io',
    sent: new Date(2022, 1, 23),
    earned: true
  }
];

export const AccountReferrals = () => {
  const [referrals, setReferrals] = useState<ReferralListItemProps[]>(referralsFixtureData);

  return (
    <CardPanel primaryText="Referrals" secondaryText="Refer your friends and get cool stuff">
      <CreateReferral sendReferral={(data) => setReferrals([...referrals, data])} />
      <ReferralList referrals={referrals} />
    </CardPanel>
  );
};
