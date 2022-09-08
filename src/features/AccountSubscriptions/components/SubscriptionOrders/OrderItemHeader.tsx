import { CheckCircleIcon, ClockIcon, InformationCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { shopifyGidToId } from 'transforms/shopify';
import { RechargeCharge, Subscription } from '../../types';
import { OrderItemBadge } from './OrderItemBadge';

const DeliveredIcon = () => <CheckCircleIcon className="w-5 h-5 text-green-500 inline-block mr-2" aria-hidden="true" />;

const SkippedIcon = () => <MinusCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />;

const ScheduledIcon = () => <ClockIcon className="w-5 h-5 text-blue-400 inline-block mr-2" aria-hidden="true" />;

const DefaultIcon = () => (
  <InformationCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />
);

interface OrderItemHeaderProps {
  subscription: Subscription;
  order: RechargeCharge;
}

export const OrderItemHeader = ({ subscription, order }: OrderItemHeaderProps) => {
  const subscriptionFulfillment = order.shopifyOrder?.fulfillments.find((fulfillment) =>
    fulfillment.fulfillmentLineItems.edges.find(
      (edge) => shopifyGidToId(edge.node.lineItem.variant.id) === subscription.shopify_variant_id
    )
  );

  console.log(order.status);

  const Icon = subscriptionFulfillment?.deliveredAt
    ? DeliveredIcon
    : order.status === 'SKIPPED'
    ? SkippedIcon
    : order.status === 'QUEUED'
    ? ScheduledIcon
    : order.status === 'SUCCESS'
    ? DeliveredIcon
    : DefaultIcon;

  return (
    <>
      <h2 id={`${order.id}-heading`} className="text-regular sm:text-lg font-medium text-body-900 md:flex-shrink-0">
        <Icon />
        <time dateTime={order.scheduled_at}>{format(new Date(order.scheduled_at), 'PPP')}</time>
      </h2>
      <div className="ml-auto sm:ml-0 space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
        <p className="text-sm font-medium text-body-500">
          <OrderItemBadge subscription={subscription} order={order} />
        </p>
      </div>
    </>
  );
};
