import { GetMyAdminCustomerOrdersQueryResponse } from '@/types/takeshape';
import { useAuthenticatedQuery } from '@/utils/takeshape';
import { NetworkStatus } from '@apollo/client';
import { PurchaseOrder } from './components/Order/Order';
import { OrderSkeleton } from './components/Order/OrderSkeleton';
import { GetMyAdminCustomerOrdersQuery } from './queries';
import { getOrders } from './transforms';
import { Order } from './types';

const Empty = () => (
  <div className="p-4 sm:p-6 flex flex-col items-center gap-2 text-body-500">
    <p>No purchases found.</p>
    <p>Why not get yourself something nice!</p>
  </div>
);

const Header = () => (
  <header>
    <h3 className="text-lg leading-6 font-medium text-body-900">Order history</h3>
    <p className="mt-1 text-sm text-body-500">
      Check the status of recent orders, manage returns, and download invoices.
    </p>
  </header>
);

export const AccountPurchaseList = () => {
  const {
    transformedData: orders,
    loading,
    networkStatus
  } = useAuthenticatedQuery<GetMyAdminCustomerOrdersQueryResponse, {}, Order[]>(GetMyAdminCustomerOrdersQuery, {
    transform: { data: getOrders }
  });

  if (networkStatus !== NetworkStatus.refetch && (!orders || !orders.length)) {
    return (
      <div className="flex flex-col min-h-full space-y-4">
        <Header />
        <div className="space-y-4 min-h-40 flex-1 min-h-full flex justify-center items-center">
          {loading ? <OrderSkeleton /> : <Empty />}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full space-y-4">
      <Header />
      <section aria-labelledby="recent-heading">
        <h2 id="recent-heading" className="sr-only">
          Recent orders
        </h2>
        <div className="space-y-4 min-h-40">
          {orders && orders.map((order) => <PurchaseOrder key={order.id} order={order} />)}
        </div>
      </section>
    </div>
  );
};
