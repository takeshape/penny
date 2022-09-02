import { RefreshIcon } from '@heroicons/react/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { ActiveSubscription } from 'features/AccountSubscriptions/components/ActiveSubscription';
import { EndedSubscription } from 'features/AccountSubscriptions/components/EndedSubscription';
import { GetMySubscriptionsQuery } from 'features/AccountSubscriptions/queries';
import { GetMySubscriptionsQueryResponse } from 'types/takeshape';
import { useAuthenticatedQuery } from 'utils/takeshape';
import { isActiveSubscription, isEndedSubscription } from './utils';

export const AccountSubscriptions = () => {
  const { data, refetch } = useAuthenticatedQuery<GetMySubscriptionsQueryResponse>(GetMySubscriptionsQuery);

  const activeSubscriptions = data?.subscriptions.filter(isActiveSubscription) ?? [];
  const endedSubscriptions = data?.subscriptions.filter(isEndedSubscription) ?? [];

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
                <ActiveSubscription subscription={subscription} refetchSubscriptions={refetch} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative block w-full p-12 text-center">
            <RefreshIcon className="mx-auto h-12 w-12 text-body-400" />
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
                <EndedSubscription subscription={subscription} refetchSubscriptions={refetch} />
              </div>
            ))}
          </div>
        </CardPanel>
      )}
    </>
  );
};
