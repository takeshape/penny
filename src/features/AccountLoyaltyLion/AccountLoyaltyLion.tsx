import CardPanel from 'components/Card/Panel/Panel';
import { GetMyLoyaltyLionCustomerQueryResponse } from 'types/takeshape';
import Button from '../../components/Button/Button';

export type AccountLoyaltyCardProps = GetMyLoyaltyLionCustomerQueryResponse['loyaltyCard'];

export interface RewardProps {
  reward: AccountLoyaltyCardProps['rewards'][number];
  points: number;
}
function Reward({ reward, points }: RewardProps) {
  const enoughPoints = points >= reward.point_cost;
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-xl font-medium truncate w-full text-center">{reward.title}</h3>
          </div>
          <div className="font-medium text-sm w-full text-center mt-2">{reward.point_cost.toLocaleString()} points</div>
          <div className="mt-2">
            {enoughPoints ? (
              <Button disabled={!enoughPoints} color="primary" className="w-full mt-2">
                {enoughPoints ? `Claim Reward for ${reward.point_cost} Points` : `More Points Needed`}
              </Button>
            ) : (
              <PointsProgress points={points} cost={reward.point_cost} />
            )}
          </div>
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
  const progress = Math.floor((points / cost) * 100);
  return (
    <div className="w-full bg-gray-700 rounded-md overflow-auto h-9 mt-4 relative">
      <div
        className="bg-accent-800 font-medium text-blue-100 text-center p-0.5 leading-none rounded-md py-2 absolute h-9"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute text-center w-full leading-9 text-sm text-primary-200">
        Need {cost - points} more points
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
