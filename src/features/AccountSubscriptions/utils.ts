import { compareAsc, isFuture, isPast, isToday } from 'date-fns';
import { ActiveSubscription, EndedSubscription, RechargeCharge, Subscription, SubscriptionOrder } from './types';

export function formatDeliverySchedule({ order_interval_unit, order_interval_frequency }: Subscription): string {
  return `${order_interval_frequency} ${order_interval_unit.toLocaleLowerCase()}(s)`;
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

export function getCharges(charges: RechargeCharge[]) {
  const mostRecentOrder = charges.find(
    (charge) => charge.status === 'SUCCESS' && isPast(new Date(charge.scheduled_at))
  );
  const nextQueuedOrder = charges.find((charge) => charge.status === 'QUEUED');
  const nextOrder = charges.find(
    (charge) => isToday(new Date(charge.scheduled_at)) || isFuture(new Date(charge.scheduled_at))
  );

  const skippedAndPastOrders = charges.filter(
    (charge) =>
      (charge.status === 'SKIPPED' ||
        (isPast(new Date(charge.scheduled_at)) && !isToday(new Date(charge.scheduled_at)))) &&
      charge.id !== mostRecentOrder?.id
  );

  return {
    mostRecentOrder,
    nextQueuedOrder,
    nextOrder,
    skippedAndPastOrders
  };
}

export function isActiveSubscription(subscription: Subscription): subscription is ActiveSubscription {
  return subscription.status === 'ACTIVE';
}

export function isEndedSubscription(subscription: Subscription): subscription is EndedSubscription {
  return subscription.status === 'CANCELLED' || subscription.status === 'EXPIRED';
}
