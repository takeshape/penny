import { isFuture, isPast, isToday } from 'date-fns';
import { ProductVariantSelection } from 'types/product';
import {
  ActiveSubscription,
  AnySubscription,
  EndedSubscription,
  SubscriptionOrder,
  SubscriptionProductVariant
} from './types';

export function formatDeliverySchedule({
  interval,
  intervalCount
}: Pick<AnySubscription, 'interval' | 'intervalCount'>): string {
  return `${intervalCount} ${interval.toLocaleLowerCase()}(s)`;
}

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

export function toFormOptions(selections: ProductVariantSelection[]): Record<string, string> {
  return selections.reduce((formOptions, { name, value }) => ({ ...formOptions, [name]: value }), {});
}

export function toSelections(formOptions: Record<string, string>): ProductVariantSelection[] {
  return Object.entries(formOptions).map(([name, value]) => ({ name, value }));
}

export function getVariant(variants: SubscriptionProductVariant[], options: ProductVariantSelection[]) {
  return variants.find((variant) => {
    let isVariant = true;

    for (const opt of options) {
      isVariant = isVariant && variant.options.findIndex((o) => o.name === opt.name && o.value === opt.value) > -1;
    }

    return isVariant;
  });
}
