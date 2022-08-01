import { compareAsc } from 'date-fns';
import { DeliveryScheduleOption, Order } from './types';

export function formatDeliverySchedule({ interval, intervalCount }: DeliveryScheduleOption): string {
  return `${intervalCount} ${interval.toLocaleLowerCase()}(s)`;
}

export function getSortedOrders(orders: Order[]) {
  const sortedOrders = orders.sort((a, b) => Date.parse(a.fulfillmentDate) - Date.parse(b.fulfillmentDate));
  const upcomingOrders = [];
  const pastOrders = [];

  const now = new Date();
  let nextOrder;
  let lastOrder;

  for (const [orderIdx, order] of Object.entries(sortedOrders)) {
    if (compareAsc(new Date(order.fulfillmentDate), now) === 1) {
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
