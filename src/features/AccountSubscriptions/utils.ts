import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
  MinusCircleIcon,
  TruckIcon
} from '@heroicons/react/24/solid';
import { isFuture, isPast, isToday } from 'date-fns';
import { ProductVariantSelection } from 'types/product';
import {
  ActiveSubscription,
  AnySubscription,
  EndedSubscription,
  SubscriptionOrder,
  SubscriptionOrderStatus,
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

export function getOrderStatusDisplay(status: SubscriptionOrderStatus) {
  switch (status) {
    case 'CHARGE_QUEUED':
      return {
        text: 'Scheduled',
        classes: 'bg-blue-100 text-blue-800',
        Icon: ClockIcon,
        iconClasses: 'text-blue-500'
      };
    case 'CHARGE_SKIPPED':
      return {
        text: 'Skipped',
        classes: 'bg-gray-100 text-gray-800',
        Icon: MinusCircleIcon,
        iconClasses: 'text-gray-500'
      };
    case 'CHARGE_CANCELLED':
      return {
        text: 'Canceled',
        classes: 'bg-gray-100 text-gray-800',
        Icon: MinusCircleIcon,
        iconClasses: 'text-gray-500'
      };
    case 'CHARGE_REFUNDED':
      return {
        text: 'Payment refunded',
        classes: 'bg-gray-100 text-gray-800',
        Icon: MinusCircleIcon,
        iconClasses: 'text-gray-500'
      };
    case 'CHARGE_PENDING_MANUAL_PAYMENT':
      return {
        text: 'Payment pending',
        classes: 'bg-gray-100 text-gray-800',
        Icon: ClockIcon,
        iconClasses: 'text-gray-500'
      };
    case 'CHARGE_PENDING':
      return {
        text: 'Payment pending',
        classes: 'bg-gray-100 text-gray-800',
        Icon: ClockIcon,
        iconClasses: 'text-gray-500'
      };
    case 'CHARGE_ERROR':
      return {
        text: 'Payment error',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };
    case 'CHARGE_SUCCESS':
      return {
        text: 'Payment successful',
        classes: 'bg-green-100 text-green-800',
        Icon: CheckCircleIcon,
        iconClasses: 'text-green-500'
      };
    case 'FULFILLMENT_FULFILLED':
      return {
        text: 'Order fulfilled',
        classes: 'bg-blue-100 text-blue-800',
        Icon: TruckIcon,
        iconClasses: 'text-blue-500'
      };
    case 'FULFILLMENT_FAILURE':
      return {
        text: 'Delivery failed',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };
    case 'FULFILLMENT_CANCELED':
      return {
        text: 'Delivery canceled',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };
    case 'FULFILLMENT_IN_TRANSIT':
      return {
        text: 'In transit',
        classes: 'bg-blue-100 text-blue-800',
        Icon: TruckIcon,
        iconClasses: 'text-blue-500'
      };
    case 'FULFILLMENT_OUT_FOR_DELIVERY':
      return {
        text: 'Out for delivery',
        classes: 'bg-blue-100 text-blue-800',
        Icon: TruckIcon,
        iconClasses: 'text-blue-500'
      };
    case 'FULFILLMENT_ATTEMPTED_DELIVERY':
      return {
        text: 'Delivery attempted',
        classes: 'bg-orange-100 text-orange-800',
        Icon: TruckIcon,
        iconClasses: 'text-orange-500'
      };
    case 'FULFILLMENT_DELIVERED':
      return {
        text: 'Delivered',
        classes: 'bg-green-100 text-green-800',
        Icon: CheckCircleIcon,
        iconClasses: 'text-green-500'
      };
    case 'FULFILLMENT_NOT_DELIVERED':
      return {
        text: 'Not delivered',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };

    case 'CHARGE_UNKNOWN':
      return {
        text: 'Charge status unknown',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };
    case 'FULFILLMENT_UNKNOWN':
      return {
        text: 'Fulfillment status unknown',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };

    default:
      return {
        text: 'Unknown',
        classes: 'bg-red-100 text-red-800',
        Icon: ExclamationCircleIcon,
        iconClasses: 'text-red-500'
      };
  }
}

export function getOrderTrackingInfo(order: Pick<SubscriptionOrder, 'status' | 'fulfillments'>) {
  if (order.status.startsWith('FULFILLMENT_')) {
    return order.fulfillments?.[0]?.trackingInfo;
  }

  return null;
}
