import { ArrowPathIcon } from '@heroicons/react/24/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { EndedSubscription } from 'features/AccountSubscriptions/components/EndedSubscription';
import { AccountSubscription } from './AccountSubscription';
import { SubscriptionSkeleton } from './components/SubscriptionSkeleton';
import { RefetchSubscriptions, Subscription } from './types';
import { isActiveSubscription, isEndedSubscription } from './utils';

export interface AccountSubscriptionsProps {
  subscriptions: Subscription[];
  refetchSubscriptionList: RefetchSubscriptions;
}

export const AccountSubscriptions = ({ subscriptions, refetchSubscriptionList }: AccountSubscriptionsProps) => {
  if (!subscriptions) {
    return (
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
          <div className="bg-background border-t border-b border-body-200 shadow-sm sm:rounded-lg sm:border">
            <SubscriptionSkeleton />
          </div>
        </div>
      </CardPanel>
    );
  }

  const activeSubscriptions = subscriptions.filter(isActiveSubscription) ?? [];
  const endedSubscriptions = subscriptions.filter(isEndedSubscription) ?? [];

  return (
    <>
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        {activeSubscriptions?.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {activeSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-background border-t border-b border-body-200 shadow-sm sm:rounded-lg sm:border"
              >
                <AccountSubscription subscription={subscription} refetchSubscriptionList={refetchSubscriptionList} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative block w-full p-12 text-center">
            <ArrowPathIcon className="mx-auto h-12 w-12 text-body-400" />
            <span className="mt-2 block text-sm font-medium text-body-900">No active subscriptions</span>
          </div>
        )}
      </CardPanel>

      {endedSubscriptions?.length > 0 && (
        <CardPanel primaryText="Past Subscriptions" secondaryText="Expired or canceled subscriptions.">
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {endedSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-background border-t border-b border-body-200 shadow-sm sm:rounded-lg sm:border"
              >
                <EndedSubscription subscription={subscription} />
              </div>
            ))}
          </div>
        </CardPanel>
      )}
    </>
  );
};
