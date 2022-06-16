import CardPanel from 'components/Card/Panel/Panel';
import { useState } from 'react';
import { CreateReferral } from './CreateReferral';
import { ReferralList } from './ReferralList';
import { ReferralListItemProps } from './ReferralListItem';

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
