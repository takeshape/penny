import { format } from 'date-fns';
import classNames from 'utils/classNames';
import { RechargeCharge } from '../../types';

interface OrderItemBadgeProps {
  order: RechargeCharge;
}

export const OrderItemBadge = ({ order }: OrderItemBadgeProps) => {
  let badgeText = '';
  let badgeClasses = '';

  switch (order.status) {
    case 'SUCCESS':
      badgeText = `Delivered on ${format(new Date(order.scheduled_at), 'PPP')}`;
      badgeClasses = 'bg-green-100 text-green-800';
      break;

    case 'SKIPPED':
      badgeText = `Skipped`;
      badgeClasses = 'bg-gray-100 text-gray-800';
      break;

    case 'QUEUED':
      badgeText = `Scheduled`;
      badgeClasses = 'bg-blue-100 text-blue-800';
      break;

    default:
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
