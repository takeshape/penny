import { format } from 'date-fns';
import { getOrderStatusDisplay } from 'features/AccountSubscriptions/utils';
import { SubscriptionOrder } from '../../types';

export interface ShipmentStatusProps {
  order: Pick<SubscriptionOrder, 'status' | 'statusAt'>;
}

export const ShipmentStatus = ({ order }: ShipmentStatusProps) => {
  const displayStatus = getOrderStatusDisplay(order.status);
  const prep = order.status === 'CHARGE_QUEUED' ? 'for' : 'on';

  return (
    <div className="flex items-center">
      <displayStatus.Icon className={`${displayStatus.iconClasses} w-5 h-5`} aria-hidden="true" />
      <p className="ml-2 text-sm font-medium text-gray-900">
        {displayStatus.text} {prep} <time dateTime={order.statusAt}>{format(new Date(order.statusAt), 'PP')}</time>
      </p>
    </div>
  );
};
