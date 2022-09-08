import { format } from 'date-fns';
import { PropsWithChildren } from 'react';
import { formatPrice } from 'utils/text';
import { Order } from '../../types';
import { LineItem } from '../LineItem/LineItem';
import { PurchaseItemOrderStatus } from '../OrderStatus/OrderStatus';

export const PurchaseOrder = ({ order }: PropsWithChildren<{ order: Order }>) => {
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden bg-background p-2 sm:p-4">
      <h3 className="sr-only">
        Order placed on <time dateTime={order.createdAt}>{order.createdAt}</time>
      </h3>
      <header className="bg-body-50 rounded-lg p-2 sm:p-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
        <dl className="divide-y divide-body-200 space-y-6 text-sm text-body-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
          <div className="flex justify-between sm:block">
            <dt className="font-medium text-body-900">Date placed</dt>
            <dd className="sm:mt-1">
              <time dateTime={order.createdAt}>{format(new Date(order.createdAt), 'PP')}</time>
            </dd>
          </div>
          <div className="flex justify-between pt-6 sm:block sm:pt-0">
            <dt className="font-medium text-body-900">Order number</dt>
            <dd className="sm:mt-1">{order.id}</dd>
          </div>
          <div className="flex justify-between pt-6 sm:block sm:pt-0">
            <dt className="font-medium text-body-900">Total amount</dt>
            <dd className="sm:mt-1">
              {formatPrice(order.totalPrice.currencyCode, Number(order.totalPrice.amount) * 100)}
            </dd>
          </div>
        </dl>
        <div className="w-full pt-2 border-t-body-200"></div>
        {/* <a
          href={order.invoiceHref}
          className="w-full flex items-center justify-center bg-background mt-6 py-2 px-4 border border-body-300 rounded-md shadow-sm text-sm font-medium text-body-700 hover:bg-body-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-auto sm:mt-0"
        >
          View Invoice
          <span className="sr-only">for order {order.number}</span>
        </a> */}
      </header>
      <div className="my-2">
        <PurchaseItemOrderStatus {...order.fulfillments[0]} unfulfilled={order.status === 'UNFULFILLED'} />
      </div>
      <main className="mb-2 px-2">
        {Boolean(order.lineItems.length) && (
          <table className="w-full text-body-500 sm:mt-6">
            <caption className="sr-only">Products</caption>
            <thead className="sr-only text-sm text-body-500 text-left sm:not-sr-only">
              <tr>
                <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                  Product
                </th>
                <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                  Quantity
                </th>
                <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="border-b border-body-200 divide-y divide-body-200 text-sm sm:border-t">
              {order.lineItems.map((lineItem) => (
                <LineItem key={lineItem.id} lineItem={lineItem} />
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};
