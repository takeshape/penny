import classNames from 'utils/classNames';
import { SubscriptionOrder } from '../../types';
import { getOrderStatusDisplay } from '../../utils';

interface OrderItemBadgeProps {
  order: SubscriptionOrder;
}

export const OrderItemBadge = ({ order }: OrderItemBadgeProps) => {
  const displayStatus = getOrderStatusDisplay(order.status);

  return (
    <span
      className={classNames(
        displayStatus.classes,
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium '
      )}
    >
      {displayStatus.text}
    </span>
  );
};
