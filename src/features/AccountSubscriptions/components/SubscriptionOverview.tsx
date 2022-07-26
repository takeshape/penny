import { CheckCircleIcon, ClockIcon, MinusCircleIcon, TruckIcon } from '@heroicons/react/solid';
import NextImage from 'components/NextImage';
import { getCreditCardIcon } from 'components/Payments/utils';
import { Subscription } from '../types';

const RecentShipmentStatus = ({ status, datetime, date }) => {
  switch (status) {
    case 'delivered': {
      return (
        <div className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
          <p className="ml-2 text-sm font-medium text-gray-900">
            Last delivered on <time dateTime={datetime}>{date}</time>
          </p>
        </div>
      );
    }

    case 'out-for-delivery': {
      return (
        <div className="flex items-center">
          <TruckIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
          <p className="ml-2 text-sm font-medium text-gray-900">Last order is out for delivery</p>
        </div>
      );
    }

    case 'canceled': {
      return (
        <div className="flex items-center">
          <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
          <p className="ml-2 text-sm font-medium text-gray-900">Last ordered was canceled</p>
        </div>
      );
    }

    default: {
      return null;
    }
  }
};

const NextShipmentStatus = ({ status, datetime, date }) => {
  switch (status) {
    case 'scheduled': {
      return (
        <div className="flex items-center sm:ml-auto mt-4 sm:mt-0">
          <ClockIcon className="w-5 h-5 text-blue-500" aria-hidden="true" />
          <p className="ml-2 text-sm font-medium text-gray-500">
            Next order on <time dateTime={datetime}>{date}</time>
          </p>
        </div>
      );
    }

    case 'skipped': {
      return (
        <div className="flex items-center sm:ml-auto mt-4 sm:mt-0">
          <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
          <p className="ml-2 text-sm font-medium text-gray-500">Next order is skipped</p>
        </div>
      );
    }

    default: {
      return null;
    }
  }
};

export interface SubscriptionOverviewProps {
  subscription: Subscription;
}

export const SubscriptionOverview = ({ subscription }: SubscriptionOverviewProps) => {
  const CreditCardIcon = getCreditCardIcon(subscription.paymentMethod.instrument.brand);

  return (
    <div className="flow-root">
      <div className="divide-y divide-gray-200">
        {subscription.products.map((product) => (
          <div key={product.id} className="flex p-4 sm:p-6">
            <div className="min-w-0 flex-1 lg:flex lg:flex-col">
              <div className="lg:flex-1">
                <div className="sm:flex">
                  <div className="flex">
                    <div className="flex-grow">
                      <a href={product.href} className="block mb-1">
                        <h4 className="font-medium text-gray-900 inline-block">{product.name}</h4>
                      </a>
                      <div className="text-sm font-medium text-gray-500">{product.variant}</div>
                      <div className="text-sm font-medium text-gray-500">Quantity: {product.quantity}</div>
                      <p className="hidden mt-2 text-sm text-gray-500 sm:block">{product.description}</p>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Update Product
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-col text-sm font-medium sm:flex-row sm:mt-4">
                  <div className="flex-grow">
                    <span className="block">
                      <CreditCardIcon className="h-6 w-6 inline-block" />
                      <span className="inline-block ml-2">{subscription.paymentMethod.instrument.brand}</span>{' '}
                      <span className="inline-block ml-1">{subscription.paymentMethod.instrument.maskedNumber}</span>
                    </span>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Update Payment Method
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 font-medium grid grid-cols-1 sm:grid-cols-2">
                <RecentShipmentStatus {...product.fulfillment} />
                <NextShipmentStatus {...product.nextFulfillment} />
              </div>
            </div>
            <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
              <NextImage
                width={200}
                height={200}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
