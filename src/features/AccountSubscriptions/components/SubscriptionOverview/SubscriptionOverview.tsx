import { CheckCircleIcon, ClockIcon, MinusCircleIcon, TruckIcon } from '@heroicons/react/solid';
import NextImage from 'components/NextImage';
import { CreditCard } from 'components/Payments/CreditCard';
import { format, isFuture } from 'date-fns';
import { PaymentMethodRechargeForm } from 'features/AccountSubscriptions/components/Actions/PaymentMethodRechargeForm';
import { ProductOptionsForm } from 'features/AccountSubscriptions/components/Actions/ProductOptionsForm';
import { getPaymentMethod } from 'features/AccountSubscriptions/transforms';
import { useState } from 'react';
import { getProductUrl, shopifyGidToId } from 'transforms/shopify';
import { RechargeCharge, RefetchSubscriptions, Subscription, SubscriptionSelectedVariant } from '../../types';

interface RecentShipmentStatusProps {
  subscription: Subscription;
  order: RechargeCharge;
}

const RecentShipmentStatus = ({ subscription, order }: RecentShipmentStatusProps) => {
  const subscriptionFulfillment = order.shopifyOrder?.fulfillments.find((fulfillment) =>
    fulfillment.fulfillmentLineItems.edges.find(
      (edge) => shopifyGidToId(edge.node.lineItem.variant.id) === subscription.shopify_variant_id
    )
  );

  if (subscriptionFulfillment?.deliveredAt) {
    return (
      <div className="flex items-center">
        <CheckCircleIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">
          Last delivered on{' '}
          <time dateTime={subscriptionFulfillment.deliveredAt}>
            {format(new Date(subscriptionFulfillment.deliveredAt), 'PPP')}
          </time>
        </p>
      </div>
    );
  }

  if (subscriptionFulfillment?.displayStatus === 'OUT_FOR_DELIVERY') {
    return (
      <div className="flex items-center">
        <TruckIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">Last order is out for delivery</p>
      </div>
    );
  }

  if (subscriptionFulfillment?.inTransitAt) {
    return (
      <div className="flex items-center">
        <TruckIcon className="w-5 h-5 text-green-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">
          Shipped on{' '}
          <time dateTime={subscriptionFulfillment.inTransitAt}>
            {format(new Date(subscriptionFulfillment.inTransitAt), 'PPP')}
          </time>
        </p>
      </div>
    );
  }

  if (order.shopifyOrder?.processedAt) {
    return (
      <div className="flex items-center">
        <ClockIcon className="w-5 h-5 text-blue-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-500">
          Processed on{' '}
          <time dateTime={order.shopifyOrder.processedAt}>
            {format(new Date(order.shopifyOrder.processedAt), 'PPP')}
          </time>
        </p>
      </div>
    );
  }

  if (subscriptionFulfillment?.displayStatus === 'CANCELED') {
    return (
      <div className="flex items-center">
        <MinusCircleIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
        <p className="ml-2 text-sm font-medium text-gray-900">Last ordered was canceled</p>
      </div>
    );
  }

  return null;
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
  variant: SubscriptionSelectedVariant;
  refetchSubscriptions: RefetchSubscriptions;
}

export const SubscriptionOverview = ({ subscription, variant, refetchSubscriptions }: SubscriptionOverviewProps) => {
  const isActive = subscription.status === 'ACTIVE';
  const [isProductOptionsOpen, setIsProductOptionsOpen] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

  const product = variant.product;

  const upcomingCharges = subscription.charges.filter((charge) => isFuture(new Date(charge.scheduled_at)));
  const nextCharge = upcomingCharges.find((charge) => charge.status === 'QUEUED');
  const mostRecentCharge = subscription.charges.reduce((previous, current) => {
    const currentDate = new Date(current.scheduled_at);
    if (isFuture(currentDate)) {
      return previous;
    }

    if (previous === undefined) {
      return current;
    }

    const previousDate = new Date(previous.scheduled_at);
    if (currentDate > previousDate) {
      return current;
    }

    return previous;
  }, undefined);

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
                        <h4 className="font-medium text-body-900 inline-block">{product.title}</h4>
                      </a>
                      <div className="text-sm font-medium text-body-500">{subscription.variant_title}</div>
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
                {isActive && (
                  <div className="mt-4 flex flex-col text-sm font-medium sm:flex-row sm:mt-8">
                    <CreditCard
                      className="flex-grow"
                      card={getPaymentMethod(subscription.address.include.payment_methods[0]).instrument}
                    />
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
              <div className="mt-6 font-medium grid grid-cols-1 sm:grid-cols-2">
                {mostRecentCharge !== undefined && (
                  <RecentShipmentStatus subscription={subscription} order={mostRecentCharge} />
                )}
                {isActive && nextCharge !== undefined ? (
                  <NextShipmentStatus
                    date={format(new Date(nextCharge.scheduled_at), 'PPP')}
                    datetime={nextCharge.scheduled_at}
                    status="scheduled"
                  />
                ) : (
                  'No upcoming orders'
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
            variants={product.variants.edges.map((edge) => edge.node)}
            variantOptions={product.options}
            currentSelections={variant.selectedOptions}
            refetchSubscriptions={refetchSubscriptions}
            isOpen={isProductOptionsOpen}
            onClose={() => setIsProductOptionsOpen(false)}
          />

          <PaymentMethodRechargeForm
            addressId={subscription.address_id}
            isOpen={isPaymentMethodOpen}
            onClose={() => setIsPaymentMethodOpen(false)}
          />
        </>
      )}
    </>
  );
};
