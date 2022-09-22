import { AnySubscription } from 'features/AccountSubscriptions/types';
import { useCallback, useState } from 'react';
import { GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables } from 'types/takeshape';
import { useAuthenticatedClient } from 'utils/takeshape';
import { GetMySubscriptionQuery } from './queries';
import { getSubscription } from './transforms';

export interface SubscriptionRefetchHookProps {
  subscription: AnySubscription;
}

export interface SubscriptionRefetchHookData {
  data: AnySubscription;
}

export function useSubscriptionRefetch({
  subscription
}: SubscriptionRefetchHookProps): [() => Promise<void>, SubscriptionRefetchHookData] {
  const client = useAuthenticatedClient();
  const [data, setData] = useState(subscription);

  const refetch = useCallback(async () => {
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
