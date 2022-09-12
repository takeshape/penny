import { format } from 'date-fns';
import classNames from 'utils/classNames';
import { RechargeCharge, Subscription } from '../../types';

interface OrderItemBadgeProps {
  subscription: Subscription;
  order: RechargeCharge;
}

export const OrderItemBadge = ({ subscription, order }: OrderItemBadgeProps) => {
  let badgeText = '';
  let badgeClasses = '';

  const subscriptionFulfillment = order.shopifyOrder?.fulfillments.find((fulfillment) =>
    fulfillment.fulfillmentLineItems.edges.find(
      (edge) => edge.node.lineItem.variant.id === subscription.product.variantId
    )
  );

  if (subscriptionFulfillment?.deliveredAt) {
    badgeText = `Delivered on ${format(new Date(subscriptionFulfillment.deliveredAt), 'PPP')}`;
    badgeClasses = 'bg-green-100 text-green-800';
  } else if (order.status === 'SUCCESS') {
    badgeText = order.shopifyOrder?.processedAt
      ? `Processed on ${format(new Date(order.shopifyOrder.processedAt), 'PPP')}`
      : 'Processed';
    badgeClasses = 'bg-green-100 text-green-800';
  } else if (order.status === 'SKIPPED') {
    badgeText = `Skipped`;
    badgeClasses = 'bg-gray-100 text-gray-800';
  } else if (order.status === 'QUEUED') {
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
