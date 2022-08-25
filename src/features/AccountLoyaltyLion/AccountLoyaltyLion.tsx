import CardPanel from 'components/Card/Panel/Panel';
import { GetMyLoyaltyLionCustomerQueryResponse } from 'types/takeshape';
import Button from '../../components/Button/Button';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

export type AccountLoyaltyCardProps = GetMyLoyaltyLionCustomerQueryResponse['loyaltyCard'];

export interface RewardProps {
  reward: AccountLoyaltyCardProps['rewards'][number];
  points: number;
}
function Reward({ reward, points }: RewardProps) {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">{reward.title}</h3>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {reward.point_cost}
            </span>
          </div>
          {points < reward.point_cost ? (
            <PointsProgress points={points} cost={reward.point_cost} />
          ) : (
            <Button>Claim Reward for {reward.point_cost} Points</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export interface PointsProgressProps {
  points: number;
  cost: number;
}

function PointsProgress({ points, cost }: PointsProgressProps) {
  const progress = Math.floor(points / cost);
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: `${progress}%` }}
      >
        {points}/{cost}
      </div>
    </div>
  );
}

export const AccountLoyaltyLion = ({ points_approved, rewards, loyalty_tier_membership }: AccountLoyaltyCardProps) => {
  return (
    <CardPanel primaryText="Rewards">
      <div>{points_approved} Points</div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <Reward key={reward.id} reward={reward} points={points_approved} />
        ))}
      </ul>
    </CardPanel>
  );
};
