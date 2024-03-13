import { getOrderStatusDisplay } from '@/features/AccountSubscriptions/utils';
import { format } from 'date-fns';
import { SubscriptionOrder } from '../../types';
import { OrderItemBadge } from './OrderItemBadge';

interface OrderItemHeaderProps {
  order: SubscriptionOrder;
}

export const OrderItemHeader = ({ order }: OrderItemHeaderProps) => {
  const { status } = order;
  const displayStatus = getOrderStatusDisplay(status);

  return (
    <>
      <h2 id={`${order.id}-heading`} className="text-regular sm:text-lg font-medium text-body-900 md:flex-shrink-0">
        <displayStatus.Icon className={`${displayStatus.iconClasses} w-5 h-5 inline-block mr-2`} aria-hidden="true" />
        <time dateTime={order.chargeScheduledAt}>{format(new Date(order.chargeScheduledAt), 'PPP')}</time>
      </h2>
      <div className="ml-auto sm:ml-0 space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
        <p className="text-sm font-medium text-body-500">
          <OrderItemBadge order={order} />
        </p>
      </div>
    </>
  );
};
