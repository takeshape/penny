import { NetworkStatus, useQuery } from '@apollo/client';
import Loader from 'components/Loader/Loader';
import { GetMyAdminCustomerOrdersQuery, GetMyAdminCustomerOrdersResponse } from 'queries';
import { getCustomerOrders } from 'transforms/shopify';
import Order from './components/Order/Order';

const Empty = () => (
  <div className="flex flex-col items-center gap-2 text-neutral-500">
    <p>No purchases found.</p>
    <p>Why not get yourself something nice!</p>
  </div>
);

const Loading = () => <Loader colorClass="text-neutral-700" />;

const Header = () => (
  <header>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Order history</h3>
    <p className="mt-1 text-sm text-gray-500">
      Check the status of recent orders, manage returns, and download invoices.
    </p>
  </header>
);

export const AccountPurchaseList = () => {
  const { data, loading, networkStatus } = useQuery<GetMyAdminCustomerOrdersResponse>(GetMyAdminCustomerOrdersQuery);
  const orders = getCustomerOrders(data?.customer);

  if (networkStatus !== NetworkStatus.refetch && (!orders || !orders.length)) {
    return (
      <div className="flex flex-col min-h-full space-y-4">
        <Header />
        <div className="min-h-40 p-4 sm:p-6 flex-1 min-h-full flex justify-center items-center">
          {loading ? <Loading /> : <Empty />}
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
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccountPurchaseList;
