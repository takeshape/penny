import { format } from 'date-fns';
import classNames from 'utils/classNames';
import { SubscriptionOrder } from '../../types';

export const OrderItemBadge = ({ status, deliveredAt }: Pick<SubscriptionOrder, 'status' | 'deliveredAt'>) => {
  let badgeText = '';
  let badgeClasses = '';

  switch (status) {
    case 'delivered':
      badgeText = `Delivered on ${format(new Date(deliveredAt), 'PPP')}`;
      badgeClasses = 'bg-green-100 text-green-800';
      break;

    case 'skipped':
      badgeText = `Skipped`;
      badgeClasses = 'bg-gray-100 text-gray-800';
      break;

    case 'scheduled':
      badgeText = `Scheduled`;
      badgeClasses = 'bg-blue-100 text-blue-800';
      break;

    default:
      badgeText = `${status}`;
  }

  return (
    <span
      className={classNames(badgeClasses, 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ')}
    >
      {badgeText}
    </span>
  );
};
