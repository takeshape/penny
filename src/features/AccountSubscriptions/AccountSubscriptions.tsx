import Alert from '@/components/Alert/Alert';
import CardPanel from '@/components/Card/Panel/Panel';
import { ActiveSubscription } from '@/features/AccountSubscriptions/components/ActiveSubscription';
import { AnySubscription } from '@/features/AccountSubscriptions/types';
import { GetMySubscriptionListQueryResponse } from '@/types/takeshape';
import { useAuthenticatedQuery } from '@/utils/takeshape';
import { useMemo } from 'react';
import { EndedSubscription } from './components/EndedSubscription';
import { NoSubscriptions } from './components/NoSubscriptions';
import { SubscriptionItem, SubscriptionList, SubscriptionListWrapper } from './components/SubscriptionList';
import { SubscriptionSkeleton } from './components/SubscriptionSkeleton';
import { GetMySubscriptionListQuery } from './queries';
import { getSubscriptionList } from './transforms';
import { isActiveSubscription, isEndedSubscription } from './utils';

export const AccountSubscriptions = () => {
  const {
    transformedData: subscriptions,
    refetch,
    error
  } = useAuthenticatedQuery<GetMySubscriptionListQueryResponse, Record<string, unknown>, AnySubscription[]>(
    GetMySubscriptionListQuery,
    {
      transform: { data: getSubscriptionList }
    }
  );

  const activeSubscriptions = useMemo(() => subscriptions?.filter(isActiveSubscription) ?? [], [subscriptions]);
  const endedSubscriptions = useMemo(() => subscriptions?.filter(isEndedSubscription) ?? [], [subscriptions]);

  if (error) {
    return <Alert status="error" primaryText="Error loading subscriptions" secondaryText={error.message} />;
  }

  if (!subscriptions) {
    return (
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        <SubscriptionListWrapper>
          <SubscriptionItem>
            <SubscriptionSkeleton />
          </SubscriptionItem>
        </SubscriptionListWrapper>
      </CardPanel>
    );
  }

  return (
    <>
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        {activeSubscriptions?.length > 0 ? (
          <SubscriptionList subscriptions={activeSubscriptions}>
            {(subscription) => <ActiveSubscription subscription={subscription} refetchSubscriptionList={refetch} />}
          </SubscriptionList>
        ) : (
          <NoSubscriptions />
        )}
      </CardPanel>

      {endedSubscriptions?.length > 0 && (
        <CardPanel primaryText="Past Subscriptions" secondaryText="Expired or canceled subscriptions.">
          <SubscriptionList subscriptions={endedSubscriptions}>
            {(subscription) => <EndedSubscription subscription={subscription} />}
          </SubscriptionList>
        </CardPanel>
      )}
    </>
  );
};
