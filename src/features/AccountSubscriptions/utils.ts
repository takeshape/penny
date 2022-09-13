import { isFuture, isPast, isToday } from 'date-fns';
import { ActiveSubscription, AnySubscription, EndedSubscription, SubscriptionOrder } from './types';

export function formatDeliverySchedule({
  interval,
  intervalCount
}: Pick<AnySubscription, 'interval' | 'intervalCount'>): string {
  return `${intervalCount} ${interval.toLocaleLowerCase()}(s)`;
}

// export function getSortedOrders(orders: SubscriptionOrder[]) {
//   const sortedOrders = orders.sort((a, b) => Date.parse(a.fulfillmentDate) - Date.parse(b.fulfillmentDate));
//   const upcomingOrders = [];
//   const pastOrders = [];

//   const now = new Date();
//   let nextOrder;
//   let lastOrder;

//   for (const [orderIdx, order] of Object.entries(sortedOrders)) {
//     if (compareAsc(new Date(order.fulfillmentDate), now) === 1) {
//       order.isUpcoming = true;
//       upcomingOrders.push(order);
//       if (!nextOrder) {
//         nextOrder = order;
//       }
//     } else if (
//       sortedOrders[Number(orderIdx) + 1] &&
//       compareAsc(new Date(sortedOrders[Number(orderIdx) + 1].fulfillmentDate), now) === 1
//     ) {
//       lastOrder = order;
//       upcomingOrders.push(order);
//     } else {
//       pastOrders.push(order);
//     }
//   }

//   return {
//     lastOrder,
//     nextOrder,
//     upcomingOrders: upcomingOrders.reverse(),
//     pastOrders
//   };
// }

// export function getCharges(charges: RechargeCharge[]) {
//   const mostRecentOrder = charges.find(
//     (charge) => charge.status === 'SUCCESS' && isPast(new Date(charge.scheduled_at))
//   );
//   const nextQueuedOrder = charges.find((charge) => charge.status === 'QUEUED');
//   const nextOrder = charges.find(
//     (charge) => isToday(new Date(charge.scheduled_at)) || isFuture(new Date(charge.scheduled_at))
//   );

//   const skippedAndPastOrders = charges.filter(
//     (charge) =>
//       (charge.status === 'SKIPPED' ||
//         (isPast(new Date(charge.scheduled_at)) && !isToday(new Date(charge.scheduled_at)))) &&
//       charge.id !== mostRecentOrder?.id
//   );

//   return {
//     mostRecentOrder,
//     nextQueuedOrder,
//     nextOrder,
//     skippedAndPastOrders
//   };
// }

export function getOrders(orders: SubscriptionOrder[]) {
  const sortedOrders = orders.sort((a, b) => Date.parse(a.chargeScheduledAt) - Date.parse(b.chargeScheduledAt));

  const mostRecentOrder = sortedOrders.find((order) => isPast(new Date(order.chargeScheduledAt)));
  const nextQueuedOrder = sortedOrders.find((order) => order.status === 'CHARGE_QUEUED');
  const nextOrder = sortedOrders.find(
    (charge) => isToday(new Date(charge.chargeScheduledAt)) || isFuture(new Date(charge.chargeScheduledAt))
  );
  const skippedAndPastOrders = sortedOrders.filter(
    (order) =>
      (order.status === 'CHARGE_SKIPPED' ||
        (isPast(new Date(order.chargeScheduledAt)) && !isToday(new Date(order.chargeScheduledAt)))) &&
      order.id !== mostRecentOrder?.id
  );

  return {
    mostRecentOrder,
    nextQueuedOrder,
    nextOrder,
    skippedAndPastOrders
  };
}

export function isActiveSubscription(subscription: AnySubscription): subscription is ActiveSubscription {
  return subscription.status === 'ACTIVE';
}

export function isEndedSubscription(subscription: AnySubscription): subscription is EndedSubscription {
  return subscription.status === 'CANCELLED' || subscription.status === 'EXPIRED';
}
