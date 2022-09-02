import { ActiveSubscription } from 'features/AccountSubscriptions/components/ActiveSubscription';
import { EndedSubscription } from 'features/AccountSubscriptions/components/EndedSubscription';
import { RefetchSubscriptions, Subscription } from './types';
import { isActiveSubscription, isEndedSubscription } from './utils';

export interface AccountSubscriptionProps {
  subscription: Subscription;
  refetchSubscriptions: RefetchSubscriptions;
}

export const AccountSubscription = ({ subscription, refetchSubscriptions }: AccountSubscriptionProps) => {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden">
      <div className="bg-white py-6 sm:px-4 sm:p-6">
        {isActiveSubscription(subscription) && (
          <ActiveSubscription subscription={subscription} refetchSubscriptions={refetchSubscriptions} />
        )}
        {isEndedSubscription(subscription) && (
          <EndedSubscription subscription={subscription} refetchSubscriptions={refetchSubscriptions} />
        )}
      </div>
    </div>
  );
};
