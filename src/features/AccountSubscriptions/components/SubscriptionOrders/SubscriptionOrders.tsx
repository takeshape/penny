import { isFuture, isPast } from 'date-fns';
import { OrderNowForm } from 'features/AccountSubscriptions/components/Actions/OrderNowForm';
import { SkipForm } from 'features/AccountSubscriptions/components/Actions/SkipForm';
import { OrderItem } from 'features/AccountSubscriptions/components/SubscriptionOrders/OrderItem';
import { useState } from 'react';
import { Subscription } from '../../types';

export interface SubscriptionOrdersProps {
  subscription: Subscription;
}

export const SubscriptionOrders = ({ subscription }: SubscriptionOrdersProps) => {
  const { status } = subscription;

  const isActive = status === 'ACTIVE';

  const [isSkipNextOpen, setIsSkipNextOpen] = useState(false);
  const [isOrderNowOpen, setIsOrderNowOpen] = useState(false);

  const upcomingCharges = subscription.charges.filter((charge) => isFuture(new Date(charge.scheduled_at)));
  const pastCharges = subscription.charges.filter((charge) => isPast(new Date(charge.scheduled_at)));
  const nextOrder = upcomingCharges.find((charge) => charge.status === 'QUEUED');

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
              {nextOrder && (
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

        {isActive && upcomingCharges.length > 0 && (
          <div className="mt-6 space-y-16 sm:mt-8">
            {upcomingCharges.reverse().map((order) => (
              <section key={order.id} aria-labelledby={`${order.id}-heading`}>
                <OrderItem subscription={subscription} order={order} />
              </section>
            ))}
          </div>
        )}

        {isActive && pastCharges.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg leading-6 font-medium text-body-900">Past orders</h3>
          </div>
        )}

        {pastCharges.length > 0 && (
          <div className="mt-6 space-y-16 sm:mt-8">
            {pastCharges.map((order) => (
              <section key={order.id} aria-labelledby={`${order.id}-heading`}>
                <OrderItem subscription={subscription} order={order} />
              </section>
            ))}
          </div>
        )}
      </div>

      {isActive && nextOrder && (
        <>
          <SkipForm isOpen={isSkipNextOpen} onClose={() => setIsSkipNextOpen(false)} order={nextOrder} />
          <OrderNowForm
            isOpen={isOrderNowOpen}
            onClose={() => setIsOrderNowOpen(false)}
            subscription={subscription}
            order={nextOrder}
          />
        </>
      )}
    </>
  );
};
