import { OrderNowForm } from 'features/AccountSubscriptions/components/Actions/OrderNowForm';
import { SkipForm } from 'features/AccountSubscriptions/components/Actions/SkipForm';
import { OrderItem } from 'features/AccountSubscriptions/components/SubscriptionOrders/OrderItem';
import { useMemo, useState } from 'react';
import { AnySubscription, RefetchSubscriptions } from '../../types';
import { getOrders } from '../../utils';

export interface SubscriptionOrdersProps {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
}

export const SubscriptionOrders = ({ subscription, refetchSubscriptions }: SubscriptionOrdersProps) => {
  const { status } = subscription;

  const isActive = status === 'ACTIVE';

  const [isSkipNextOpen, setIsSkipNextOpen] = useState(false);
  const [isOrderNowOpen, setIsOrderNowOpen] = useState(false);

  const { mostRecentOrder, nextOrder, nextQueuedOrder, skippedAndPastOrders } = useMemo(
    () => getOrders(subscription.orders),
    [subscription.orders]
  );

  return (
    <>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary-900">Subscription orders</h3>
            <p className="mt-1 max-w-2xl text-sm text-body-500">
              {isActive ? <span>View past and upcoming orders.</span> : <span>View past orders.</span>}
            </p>
          </div>

          {isActive && (
            <div className="flex flex-shrink-0 mt-6 space-x-4 lg:mt-0">
              {nextQueuedOrder && (
                <button
                  type="button"
                  onClick={() => setIsSkipNextOpen(true)}
                  className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full"
                >
                  Skip Next Order
                </button>
              )}

              {nextOrder && (
                <button
                  type="button"
                  onClick={() => setIsOrderNowOpen(true)}
                  className="self-start py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full"
                >
                  Order Now
                </button>
              )}
            </div>
          )}
        </div>

        {isActive && nextQueuedOrder && (
          <>
            <div className="mt-12">
              <h3 className="leading-6 font-medium text-body-600">Next scheduled order</h3>
            </div>

            <div className="mt-4 space-y-16">
              <section aria-labelledby={`${nextQueuedOrder.id}-order`}>
                <OrderItem
                  subscription={subscription}
                  order={nextQueuedOrder}
                  refetchSubscriptions={refetchSubscriptions}
                />
              </section>
            </div>
          </>
        )}

        {isActive && mostRecentOrder && (
          <div className="mt-12">
            <h3 className="leading-6 font-medium text-body-600">Most recent order</h3>
          </div>
        )}

        {mostRecentOrder && (
          <div className="mt-4 space-y-16">
            <section key={mostRecentOrder.id} aria-labelledby={`${mostRecentOrder.id}-order`}>
              <OrderItem
                subscription={subscription}
                order={mostRecentOrder}
                refetchSubscriptions={refetchSubscriptions}
              />
            </section>
          </div>
        )}

        {isActive && skippedAndPastOrders.length > 0 && (
          <div className="mt-12">
            <h3 className="leading-6 font-medium text-body-600">Skipped and past orders</h3>
          </div>
        )}

        {skippedAndPastOrders.length > 0 && (
          <div className="mt-4 space-y-16">
            {skippedAndPastOrders.map((order) => (
              <section key={order.id} aria-labelledby={`${order.id}-heading`}>
                <OrderItem subscription={subscription} order={order} refetchSubscriptions={refetchSubscriptions} />
              </section>
            ))}
          </div>
        )}
      </div>

      {isActive && nextOrder && (
        <>
          <SkipForm
            isOpen={isSkipNextOpen}
            onClose={() => setIsSkipNextOpen(false)}
            subscription={subscription}
            order={nextQueuedOrder}
            refetchSubscriptions={refetchSubscriptions}
          />
          <OrderNowForm
            isOpen={isOrderNowOpen}
            onClose={() => setIsOrderNowOpen(false)}
            subscription={subscription}
            order={nextOrder}
            refetchSubscriptions={refetchSubscriptions}
          />
        </>
      )}
    </>
  );
};
