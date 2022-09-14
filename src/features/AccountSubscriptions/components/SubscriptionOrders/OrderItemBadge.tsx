import { format } from 'date-fns';
import classNames from 'utils/classNames';
import { SubscriptionOrder } from '../../types';

interface OrderItemBadgeProps {
  order: SubscriptionOrder;
}

export const OrderItemBadge = ({ order }: OrderItemBadgeProps) => {
  let badgeText = '';
  let badgeClasses = '';

  if (order.fulfillmentDeliveredAt) {
    badgeText = `Delivered on ${format(new Date(order.fulfillmentDeliveredAt), 'PPP')}`;
    badgeClasses = 'bg-green-100 text-green-800';
  } else if (order.status === 'CHARGE_SUCCESS') {
    badgeText = order.chargeProcessedAt
      ? `Processed on ${format(new Date(order.chargeProcessedAt), 'PPP')}`
      : 'Processed';
    badgeClasses = 'bg-green-100 text-green-800';
  } else if (order.status === 'CHARGE_SKIPPED') {
    badgeText = `Skipped`;
    badgeClasses = 'bg-gray-100 text-gray-800';
  } else if (order.status === 'CHARGE_QUEUED') {
    badgeText = `Scheduled`;
    badgeClasses = 'bg-blue-100 text-blue-800';
  } else {
    badgeText = `${order.status}`;
  }

  return (
    <span
      className={classNames(badgeClasses, 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ')}
    >
      {badgeText}
    </span>
  );
};
