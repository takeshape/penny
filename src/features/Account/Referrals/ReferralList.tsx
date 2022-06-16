import { GiftIcon } from '@heroicons/react/solid';
import { ReferralListItem, ReferralListItemProps } from './ReferralListItem';

export interface Reward {
  name: string;
  code: string;
}

const reward: Reward = {
  name: '20% Off One Order',
  code: '1XGHc80'
};

export interface ReferralListProps {
  referrals: ReferralListItemProps[];
}

export const ReferralList = ({ referrals }) => {
  return (
    <ul className="list-none">
      {referrals.map((referral) => (
        <li key={referral.email} className="my-1">
          <ReferralListItem {...referral} />
          {referral.earned && (
            <div className="rounded-md p-4 bg-red-100 mt-3">
              <div className="flex">
                <div className="flex-shrink-0">
                  <GiftIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-red-700 font-bold">{reward.name}</p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6 font-semibold">Use code {reward.code} at checkout</p>
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
