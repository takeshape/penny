import { AccountLoyaltyCard } from '@/features/AccountLoyaltyCard/AccountLoyaltyCard';
import { AccountReferrals } from '@/features/AccountReferrals/AccountReferrals';

export default function AccountRewardsPage() {
  return (
    <>
      <AccountReferrals />
      <AccountLoyaltyCard />
    </>
  );
}
