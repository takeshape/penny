import { CheckCircleIcon, ClockIcon, MinusCircleIcon, TruckIcon } from '@heroicons/react/24/solid';
import NextImage from 'components/NextImage';
import { CreditCard } from 'components/Payments/CreditCard';
import { format } from 'date-fns';
import { PaymentMethodForm } from 'features/AccountSubscriptions/components/Actions/PaymentMethodForm';
import { ProductOptionsForm } from 'features/AccountSubscriptions/components/Actions/ProductOptionsForm';
import { getOrders } from 'features/AccountSubscriptions/utils';
import { useMemo, useState } from 'react';
import { getProductUrl } from 'transforms/shopify';
import { AnySubscription, RefetchSubscriptions, SubscriptionOrder } from '../../types';

interface ShipmentStatusProps {
  subscription: AnySubscription;
  order: SubscriptionOrder;
}

const RecentShipmentStatus = ({ order }: ShipmentStatusProps) => {
  if (order.fulfillmentDeliveredAt) {
    return (
      <div className="flex items-center">
        <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">
          Last delivered on{' '}
          <time dateTime={order.fulfillmentDeliveredAt}>{format(new Date(order.fulfillmentDeliveredAt), 'PP')}</time>
        </p>
      </div>
    );
  }

  if (order.status === 'FULFILLMENT_OUT_FOR_DELIVERY') {
    return (
      <div className="flex items-center">
        <TruckIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">Last order is out for delivery</p>
      </div>
    );
  }

  if (order.fulfillmentInTransitAt) {
    return (
      <div className="flex items-center">
        <TruckIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">
          Shipped on{' '}
          <time dateTime={order.fulfillmentInTransitAt}>{format(new Date(order.fulfillmentInTransitAt), 'PP')}</time>
        </p>
      </div>
    );
  }

  if (order.chargeProcessedAt) {
    return (
      <div className="flex items-center">
        <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-500">
          Processed on <time dateTime={order.chargeProcessedAt}>{format(new Date(order.chargeProcessedAt), 'PP')}</time>
        </p>
      </div>
    );
  }

  if (order.status === 'CHARGE_CANCELLED') {
    return (
      <div className="flex items-center">
        <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">Last ordered was canceled</p>
      </div>
    );
  }

  return null;
};

const NextShipmentStatus = ({ order }: ShipmentStatusProps) => {
  if (order.status === 'CHARGE_QUEUED') {
    return (
      <div className="flex items-center mt-4 sm:mt-0">
        <ClockIcon className="w-5 h-5 text-blue-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-500">
          Next order scheduled for{' '}
          <time dateTime={order.chargeScheduledAt}>{format(new Date(order.chargeScheduledAt), 'PP')}</time>
        </p>
      </div>
    );
  }

  if (order.status === 'CHARGE_SKIPPED') {
    return (
      <div className="flex items-center mt-4 sm:mt-0">
        <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-500">Next order is skipped</p>
      </div>
    );
  }

  return null;
};

export interface SubscriptionOverviewProps {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
}

export const SubscriptionOverview = ({ subscription, refetchSubscriptions }: SubscriptionOverviewProps) => {
  const isActive = subscription.status === 'ACTIVE';
  const [isProductOptionsOpen, setIsProductOptionsOpen] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

  const { product, productVariant } = subscription;

  const { mostRecentOrder, nextQueuedOrder } = useMemo(() => getOrders(subscription.orders), [subscription.orders]);

  return (
    <>
      <div className="flow-root">
        <div className="divide-y divide-gray-200">
          <div key={product.id} className="flex p-4 sm:p-6">
            <div className="min-w-0 flex-1 lg:flex lg:flex-col">
              <div className="lg:flex-1">
                <div className="sm:flex">
                  <div className="flex">
                    <div className="flex-grow">
                      <a href={getProductUrl(product.handle)} className="block mb-1">
                        <h4 className="font-medium text-body-900 inline-block">{product.name}</h4>
                      </a>
                      <div className="text-sm font-medium text-body-500">{productVariant.name}</div>
                      <div className="text-sm font-medium text-body-500">Quantity: {subscription.quantity}</div>
                      <p className="hidden mt-2 text-sm text-body-500 sm:block">{product.description}</p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="mt-2 sm:mt-0">
                      <button
                        onClick={() => setIsProductOptionsOpen(true)}
                        className="whitespace-nowrap text-sm font-medium text-accent-600 hover:text-accent-500"
                      >
                        Update Product
                      </button>
                    </div>
                  )}
                </div>
                {isActive && subscription.paymentMethod && (
                  <div className="mt-4 flex flex-col text-sm font-medium sm:flex-row sm:mt-8">
                    <CreditCard className="flex-grow" card={subscription.paymentMethod.instrument} />
                    <div className="mt-2 sm:mt-0">
                      <button
                        onClick={() => setIsPaymentMethodOpen(true)}
                        className="text-accent-600 hover:text-accent-500"
                      >
                        Update Payment Method
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 font-medium grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mostRecentOrder !== undefined && (
                  <RecentShipmentStatus subscription={subscription} order={mostRecentOrder} />
                )}
                {isActive && nextQueuedOrder !== undefined ? (
                  <NextShipmentStatus subscription={subscription} order={nextQueuedOrder} />
                ) : (
                  <div className="flex items-center mt-4 sm:mt-0">
                    <p className="text-sm font-medium text-gray-500">No upcoming orders</p>
                  </div>
                )}
              </div>
            </div>
            <div className="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
              <NextImage
                width={200}
                height={200}
                src={product.featuredImage.url}
                alt={product.featuredImage.altText}
                className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
              />
            </div>
          </div>
        </div>
      </div>

      {isActive && (
        <>
          <ProductOptionsForm
            subscription={subscription}
            variants={product.variants}
            variantOptions={product.variantOptions}
            currentSelections={productVariant.options}
            refetchSubscriptions={refetchSubscriptions}
            isOpen={isProductOptionsOpen}
            onClose={() => setIsProductOptionsOpen(false)}
          />

          <PaymentMethodForm
            defaultPaymentMethodId={subscription.paymentMethod.id}
            addressId={subscription.address.id}
            refetchSubscriptions={refetchSubscriptions}
            isOpen={isPaymentMethodOpen}
            onClose={() => setIsPaymentMethodOpen(false)}
          />
        </>
      )}
    </>
  );
};
