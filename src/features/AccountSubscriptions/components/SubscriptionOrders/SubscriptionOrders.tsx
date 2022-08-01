import { useMemo, useState } from 'react';
import { SubscriptionOrder } from '../../types';
import { getSortedOrders } from '../../utils';
import { OrderNowForm } from '../Actions/OrderNowForm';
import { SkipForm } from '../Actions/SkipForm';
import { OrderItem } from './OrderItem';

export interface SubscriptionOrdersProps {
  orders: SubscriptionOrder[];
}

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
      <OrderNowForm isOpen={isOrderNowOpen} onClose={() => setIsOrderNowOpen(false)} order={nextOrder} />
    </>
  );
};
