import { RawSubscription, Subscription, SubscriptionDeliveryScheduleOption } from './types';
import { getSortedOrders } from './utils';

export function getSubscription(rawSubscription: RawSubscription): Subscription {
  const { orders } = rawSubscription;
  const { lastOrder, nextOrder, upcomingOrders, pastOrders } = getSortedOrders(orders);
  return {
    ...rawSubscription,
    lastOrder,
    nextOrder,
    upcomingOrders,
    pastOrders
  };
}

export function getDeliveryScheduleOptions(): SubscriptionDeliveryScheduleOption[] {
  return [
    {
      interval: 'DAY',
      intervalCount: 30
    },
    {
      interval: 'DAY',
      intervalCount: 60
    }
  ];
}
