import { CheckCircleIcon, ClockIcon, InformationCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { AnySubscription, SubscriptionOrder } from '../../types';
import { OrderItemBadge } from './OrderItemBadge';

const DeliveredIcon = () => <CheckCircleIcon className="w-5 h-5 text-green-500 inline-block mr-2" aria-hidden="true" />;

const SkippedIcon = () => <MinusCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />;

const ScheduledIcon = () => <ClockIcon className="w-5 h-5 text-blue-400 inline-block mr-2" aria-hidden="true" />;

const DefaultIcon = () => (
  <InformationCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />
);

interface OrderItemHeaderProps {
  subscription: AnySubscription;
  order: SubscriptionOrder;
}

export const OrderItemHeader = ({ subscription, order }: OrderItemHeaderProps) => {
  const Icon = order.fulfillmentDeliveredAt
    ? DeliveredIcon
    : order.status === 'CHARGE_SKIPPED'
    ? SkippedIcon
    : order.status === 'CHARGE_QUEUED'
    ? ScheduledIcon
    : order.status === 'CHARGE_SUCCESS'
    ? DeliveredIcon
    : DefaultIcon;

  return (
    <>
      <h2 id={`${order.id}-heading`} className="text-regular sm:text-lg font-medium text-body-900 md:flex-shrink-0">
        <Icon />
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
