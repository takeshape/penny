import { CheckCircleIcon, ClockIcon, InformationCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { SubscriptionOrder } from '../../types';
import { OrderItemBadge } from './OrderItemBadge';

const DeliveredIcon = () => <CheckCircleIcon className="w-5 h-5 text-green-500 inline-block mr-2" aria-hidden="true" />;

const SkippedIcon = () => <MinusCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />;

const ScheduledIcon = () => <ClockIcon className="w-5 h-5 text-blue-400 inline-block mr-2" aria-hidden="true" />;

const DefaultIcon = () => (
  <InformationCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />
);

export const OrderItemHeader = ({
  id,
  status,
  fulfillmentDate,
  deliveredAt
}: Pick<SubscriptionOrder, 'id' | 'status' | 'fulfillmentDate' | 'deliveredAt'>) => {
  let Icon;

  switch (status) {
    case 'delivered':
      Icon = DeliveredIcon;
      break;

    case 'skipped':
      Icon = SkippedIcon;
      break;

    case 'scheduled':
      Icon = ScheduledIcon;
      break;

    default:
      Icon = DefaultIcon;
  }

  return (
    <>
      <h2 id={`${id}-heading`} className="text-regular sm:text-lg font-medium text-gray-900 md:flex-shrink-0">
        <Icon />
        <time dateTime={fulfillmentDate}>{format(new Date(fulfillmentDate), 'PPP')}</time>
      </h2>
      <div className="ml-auto sm:ml-0 space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
        <p className="text-sm font-medium text-gray-500">
          <OrderItemBadge status={status} deliveredAt={deliveredAt} />
        </p>
      </div>
    </>
  );
};
