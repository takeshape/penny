import { AnySubscription } from '@/features/AccountSubscriptions/types';
import { useAuthenticatedClient } from '@/lib/takeshape';
import { GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables } from '@/types/takeshape';
import { useCallback, useState } from 'react';
import { GetMySubscriptionQuery } from './queries';
import { getSubscription } from './transforms';

export type SubscriptionRefetchHookProps = {
  subscription: AnySubscription;
};

export type SubscriptionRefetchHookData = {
  data: AnySubscription;
};

export function useSubscriptionRefetch({
  subscription
}: SubscriptionRefetchHookProps): [() => Promise<void>, SubscriptionRefetchHookData] {
  const client = useAuthenticatedClient();
  const [data, setData] = useState(subscription);

  const refetch = useCallback(async () => {
    if (!client) {
      return;
    }

    const response = await client.query<GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables>({
      query: GetMySubscriptionQuery,
      variables: { id: subscription.id },
      fetchPolicy: 'network-only'
    });

    const updatedSubscription = getSubscription(response.data);

    if (updatedSubscription) {
      setData(updatedSubscription);
    }
  }, [client, subscription.id]);

  return [refetch, { data }];
}
