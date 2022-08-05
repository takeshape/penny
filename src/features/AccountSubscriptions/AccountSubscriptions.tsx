import { RefreshIcon } from '@heroicons/react/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { ActiveSubscription } from 'features/AccountSubscriptions/components/ActiveSubscription';
import { EndedSubscription } from 'features/AccountSubscriptions/components/EndedSubscription';
import { Subscription } from './types';
import { isActiveSubscription, isEndedSubscription } from './utils';

export interface AccountSubscriptionsProps {
  subscriptions: Subscription[];
}

export const AccountSubscriptions = ({ subscriptions }: AccountSubscriptionsProps) => {
  const activeSubscriptions = subscriptions.filter(isActiveSubscription);
  const endedSubscriptions = subscriptions.filter(isEndedSubscription);

  return (
    <>
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        {activeSubscriptions?.length ? (
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {activeSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
              >
                <ActiveSubscription subscription={subscription} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative block w-full p-12 text-center">
            <RefreshIcon className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">No active subscriptions</span>
          </div>
        )}
      </CardPanel>

      {endedSubscriptions?.length && (
        <CardPanel primaryText="Past Subscriptions" secondaryText="Expired or canceled subscriptions.">
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {endedSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
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
