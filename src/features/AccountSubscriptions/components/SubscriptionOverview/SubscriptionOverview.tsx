import NextImage from '@/components/NextImage';
import { CreditCard } from '@/components/Payments/CreditCard';
import { getProductUrl } from '@/transforms/shopify';
import { useMemo, useState } from 'react';
import { AnySubscription, RefetchSubscriptions } from '../../types';
import { getOrders } from '../../utils';
import { PaymentMethodForm } from '../Actions/PaymentMethodForm';
import { ProductOptionsForm } from '../Actions/ProductOptionsForm';
import { ShipmentStatus } from './ShipmentStatus';

export type SubscriptionOverviewProps = {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
};

export const SubscriptionOverview = ({ subscription, refetchSubscriptions }: SubscriptionOverviewProps) => {
  const { status, orders, product, productVariant } = subscription;
  const isActive = status === 'ACTIVE';
  const { mostRecentOrder, nextQueuedOrder } = useMemo(() => getOrders(orders), [orders]);

  const [isProductOptionsOpen, setIsProductOptionsOpen] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

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
                        Update product
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
                        Update payment method
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 font-medium flex flex-col gap-6">
                {mostRecentOrder !== undefined && (
                  <ShipmentStatus heading="Most recent order" order={mostRecentOrder} />
                )}
                {isActive && nextQueuedOrder !== undefined ? (
                  <ShipmentStatus heading="Next queued order" order={nextQueuedOrder} />
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
            defaultPaymentMethodId={subscription.paymentMethod?.id}
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
