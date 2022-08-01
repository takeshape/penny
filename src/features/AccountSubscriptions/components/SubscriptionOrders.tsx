import { CheckCircleIcon, ClockIcon, InformationCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import NextImage from 'components/NextImage';
import { format } from 'date-fns';
import { OrderNowForm } from 'features/AccountSubscriptions/components/OrderNow/OrderNowForm';
import { ReportIssueForm } from 'features/AccountSubscriptions/components/ReportIssue/ReportIssueForm';
import { SkipForm } from 'features/AccountSubscriptions/components/Skip/SkipForm';
import { UnskipForm } from 'features/AccountSubscriptions/components/Unskip/UnskipForm';
import { getSortedOrders } from 'features/AccountSubscriptions/utils';
import { useMemo, useState } from 'react';
import classNames from 'utils/classNames';
import { Order, Subscription } from '../types';

const OrderBadge = ({ status, deliveredAt }: Pick<Order, 'status' | 'deliveredAt'>) => {
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

    case 'upcoming':
      badgeText = `Upcoming`;
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

const OrderHeader = ({
  id,
  status,
  fulfillmentDate,
  deliveredAt
}: Pick<Order, 'id' | 'status' | 'fulfillmentDate' | 'deliveredAt'>) => {
  let Icon;

  switch (status) {
    case 'delivered':
      const DeliveredIcon = () => (
        <CheckCircleIcon className="w-5 h-5 text-green-500 inline-block mr-2" aria-hidden="true" />
      );
      Icon = DeliveredIcon;
      break;

    case 'skipped':
      const SkippedIcon = () => (
        <MinusCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />
      );
      Icon = SkippedIcon;
      break;

    case 'upcoming':
      const UpcomingIcon = () => <ClockIcon className="w-5 h-5 text-blue-400 inline-block mr-2" aria-hidden="true" />;
      Icon = UpcomingIcon;
      break;

    default:
      const DefaultIcon = () => (
        <InformationCircleIcon className="w-5 h-5 text-gray-500 inline-block mr-2" aria-hidden="true" />
      );
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
          <OrderBadge status={status} deliveredAt={deliveredAt} />
        </p>
      </div>
    </>
  );
};

interface OrderActionsProps {
  order: Order;
}

const OrderActions = ({ order }: OrderActionsProps) => {
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isUnskipOpen, setIsUnskipOpen] = useState(false);
  const [isSkipOpen, setIsSkipOpen] = useState(false);

  switch (order.status) {
    case 'delivered': {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsReportIssueOpen(true)}
            className="w-full flex items-center justify-center  py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Report an issue
          </button>
          <ReportIssueForm isOpen={isReportIssueOpen} onClose={() => setIsReportIssueOpen(false)} order={order} />
        </>
      );
    }

    case 'skipped': {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsUnskipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Unskip
          </button>
          <UnskipForm isOpen={isUnskipOpen} onClose={() => setIsUnskipOpen(false)} order={order} />
        </>
      );
    }

    case 'upcoming':
    default: {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsSkipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Skip delivery
          </button>
          <SkipForm isOpen={isSkipOpen} onClose={() => setIsSkipOpen(false)} order={order} />
        </>
      );
    }
  }
};

interface OrderItemProps {
  order: Order;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const { product } = order;

  return (
    <>
      <div className="space-y-1 flex items-baseline md:space-y-0 sm:space-x-4">
        <OrderHeader {...order} />
      </div>

      <div className="mt-2 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
        <div key={product.id} className="py-6 sm:flex">
          <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
            <NextImage
              width={100}
              height={100}
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-24 sm:h-24"
            />
            <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
              <h3 className="font-medium text-gray-900">
                <a href={product.href}>{product.name}</a>
              </h3>
              <p className="text-sm text-gray-500">{product.variantName}</p>
              <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
              <p className="mt-1 font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
          <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
            <OrderActions order={order} />
          </div>
        </div>
      </div>
    </>
  );
};

export interface SubscriptionOrdersProps extends Subscription {}

export const SubscriptionOrders = ({ orders }: SubscriptionOrdersProps) => {
  const { upcomingOrders, pastOrders, nextOrder } = useMemo(() => getSortedOrders(orders), [orders]);

  const [isSkipNextOpen, setIsSkipNextOpen] = useState(false);
  const [isOrderNowOpen, setIsOrderNowOpen] = useState(false);

  return (
    <>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Subscription orders</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">View past and upcoming orders.</p>
          </div>

          <div className="flex flex-shrink-0 mt-6 space-x-4 lg:mt-0">
            <button
              type="button"
              onClick={() => setIsSkipNextOpen(true)}
              className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
            >
              Skip Next Order
            </button>

            <button
              type="button"
              onClick={() => setIsOrderNowOpen(true)}
              className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-16 sm:mt-8">
          {upcomingOrders.reverse().map((order) => (
            <section key={order.id} aria-labelledby={`${order.id}-heading`}>
              <OrderItem order={order} />
            </section>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Past orders</h3>
        </div>

        <div className="mt-6 space-y-16 sm:mt-8">
          {pastOrders.map((order) => (
            <section key={order.id} aria-labelledby={`${order.id}-heading`}>
              <OrderItem order={order} />
            </section>
          ))}
        </div>
      </div>

      <SkipForm isOpen={isSkipNextOpen} onClose={() => setIsSkipNextOpen(false)} order={nextOrder} />
      <OrderNowForm isOpen={isOrderNowOpen} onClose={() => setIsOrderNowOpen(false)} />
    </>
  );
};
