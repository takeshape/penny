import { useCallback, useState } from 'react';
import { GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables } from 'types/takeshape';
import { useAuthenticatedClient } from 'utils/takeshape';
import { ActiveSubscription } from './components/ActiveSubscription';
import { EndedSubscription } from './components/EndedSubscription';
import { GetMySubscriptionQuery } from './queries';
import { getSubscription } from './transforms';
import { AnySubscription, RefetchSubscriptions } from './types';
import { isActiveSubscription } from './utils';

export interface AccountSubscriptionProps {
  subscription: AnySubscription;
  refetchSubscriptionList: RefetchSubscriptions;
}

export const AccountSubscription = ({ subscription, refetchSubscriptionList }: AccountSubscriptionProps) => {
  const client = useAuthenticatedClient();
  const [sub, setSub] = useState(subscription);

  const refetchSubscription = useCallback(async () => {
    const updatedSubscription = await client.query<GetMySubscriptionQueryResponse, GetMySubscriptionQueryVariables>({
      query: GetMySubscriptionQuery,
      variables: { id: subscription.id },
      fetchPolicy: 'network-only'
    });

    setSub(getSubscription(updatedSubscription.data));
  }, [client, subscription.id]);

  const SubscriptionComponent = isActiveSubscription(sub) ? ActiveSubscription : EndedSubscription;

  return (
    <>
      <SubscriptionComponent
        subscription={sub}
        refetchSubscription={refetchSubscription}
        refetchSubscriptionList={refetchSubscriptionList}
      />
    </>
  );
};
