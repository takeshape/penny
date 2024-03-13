import { PropsWithCallableChildren } from '@/types/util';
import { PropsWithChildren } from 'react';
import { AnySubscription } from '../types';

export const SubscriptionListWrapper = ({ children }: PropsWithChildren<{}>) => (
  <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">{children}</div>
);

export const SubscriptionItem = ({ children }: PropsWithChildren<{}>) => (
  <div className="bg-background border-t border-b border-body-200 shadow-sm sm:rounded-lg sm:border">{children}</div>
);

export const SubscriptionList = ({
  subscriptions,
  children
}: PropsWithCallableChildren<{ subscriptions: AnySubscription[] }, AnySubscription>) => (
  <SubscriptionListWrapper>
    {subscriptions.map((subscription) => (
      <SubscriptionItem key={subscription.id}>{children(subscription)}</SubscriptionItem>
    ))}
  </SubscriptionListWrapper>
);
