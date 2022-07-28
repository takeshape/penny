import { CheckCircleIcon, ClockIcon, InformationCircleIcon, MinusCircleIcon } from '@heroicons/react/solid';
import NextImage from 'components/NextImage';
import { compareAsc, format } from 'date-fns';
import classNames from 'utils/classNames';
import { Order } from '../types';

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

const OrderAction = ({ status }: Pick<Order, 'status'>) => {
  switch (status) {
    case 'delivered': {
      return (
        <button
          type="button"
          className="w-full flex items-center justify-center  py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
        >
          Report an issue
        </button>
      );
    }

    case 'skipped': {
      return (
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
        >
          Unskip
        </button>
      );
    }

    default: {
      return (
        <button
          type="button"
          className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
        >
          Skip delivery
        </button>
      );
    }
  }
};

const OrderItem = ({ product, ...order }: Order) => {
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
            <OrderAction status={order.status} />
          </div>
        </div>
      </div>
    </>
  );
};

export interface SubscriptionOrdersProps {
  orders: Order[];
}

export const SubscriptionOrders = ({ orders }: SubscriptionOrdersProps) => {
  const sortedOrders = orders.sort((a, b) => Date.parse(b.fulfillmentDate) - Date.parse(a.fulfillmentDate));
  const now = new Date();

  const upcomingOrders = [];
  const pastOrders = [];

  let previousOrderIsUpcoming = false;

  for (const ord of sortedOrders) {
    if (compareAsc(new Date(ord.fulfillmentDate), now) === 1) {
      upcomingOrders.push(ord);
      previousOrderIsUpcoming = true;
    } else {
      if (previousOrderIsUpcoming) {
        upcomingOrders.push(ord);
      } else {
        pastOrders.push(ord);
      }
      previousOrderIsUpcoming = false;
    }
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-6">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Subscription orders</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">View past and upcoming orders.</p>
        </div>

        <div className="flex flex-shrink-0 mt-6 space-x-4 lg:mt-0">
          <button
            type="button"
            className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
          >
            Skip Next Delivery
          </button>

          <button
            type="button"
            className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-16 sm:mt-8">
        {upcomingOrders.reverse().map((order) => (
          <section key={order.id} aria-labelledby={`${order.id}-heading`}>
            <OrderItem {...order} />
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Past orders</h3>
      </div>

      <div className="mt-6 space-y-16 sm:mt-8">
        {pastOrders.map((order) => (
          <section key={order.id} aria-labelledby={`${order.id}-heading`}>
            <OrderItem {...order} />
          </section>
        ))}
      </div>
    </div>
  );
};
