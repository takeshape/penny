import { compareAsc } from 'date-fns';
import {
  ActiveSubscription,
  EndedSubscription,
  Subscription,
  SubscriptionDeliveryScheduleOption,
  SubscriptionOrder
} from './types';

export function formatDeliverySchedule({ interval, intervalCount }: SubscriptionDeliveryScheduleOption): string {
  return `${intervalCount} ${interval.toLocaleLowerCase()}(s)`;
}

export function getSortedOrders(orders: SubscriptionOrder[]) {
  const sortedOrders = orders.sort((a, b) => Date.parse(a.fulfillmentDate) - Date.parse(b.fulfillmentDate));
  const upcomingOrders = [];
  const pastOrders = [];

  const now = new Date();
  let nextOrder;
  let lastOrder;

  for (const [orderIdx, order] of Object.entries(sortedOrders)) {
    if (compareAsc(new Date(order.fulfillmentDate), now) === 1) {
      order.isUpcoming = true;
      upcomingOrders.push(order);
      if (!nextOrder) {
        nextOrder = order;
      }
    } else if (
      sortedOrders[Number(orderIdx) + 1] &&
      compareAsc(new Date(sortedOrders[Number(orderIdx) + 1].fulfillmentDate), now) === 1
    ) {
      lastOrder = order;
      upcomingOrders.push(order);
    } else {
      pastOrders.push(order);
    }
  }

  return {
    lastOrder,
    nextOrder,
    upcomingOrders: upcomingOrders.reverse(),
    pastOrders
  };
}

export function isActiveSubscription(subscription: Subscription): subscription is ActiveSubscription {
  return subscription.status === 'active';
}

export function isEndedSubscription(subscription: Subscription): subscription is EndedSubscription {
  return subscription.status === 'ended';
}
