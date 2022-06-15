import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Image from 'components/NextImage';
import NextLink from 'components/NextLink';
import { format } from 'date-fns';
import { shopifyGidToId } from 'transforms/shopify';
import { Shopify_Order } from 'types/takeshape';
import { formatPrice } from 'utils/text';
import PurchseOrderStatus from './PurchaseOrderStatus';

export interface AccountPurchasesProps {
  loading?: boolean;
  orders?: Shopify_Order[];
}

const Empty = () => (
  <div className="flex flex-col items-center gap-2 text-neutral-500">
    <p>No purchases found.</p>
    <p>Go get yourself something nice.</p>
  </div>
)

const Header = () => (
  <header>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Order history</h3>
    <p className="mt-1 text-sm text-gray-500">Check the status of recent orders, manage returns, and download invoices.</p>
  </header>
)

export const AccountPurchaseList = ({ loading, orders }: AccountPurchasesProps) => {
  if (loading || !orders || !orders.length) {
    return (
      <div className="flex flex-col min-h-full space-y-4">
        <Header />
        <div className="min-h-40 p-4 sm:p-6 flex-1 min-h-full flex justify-center items-center">{loading ? <Loader colorClass="text-neutral-700" /> : <Empty />}</div>
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
            <div className="shadow sm:rounded-md sm:overflow-hidden bg-white p-2 sm:p-4" key={order.id}>
              <h3 className="sr-only">
                Order placed on <time dateTime={order.createdAt}>{order.createdAt}</time>
              </h3>

              <header className="bg-gray-50 rounded-lg p-4 sm:p-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                  <div className="flex justify-between sm:block">
                    <dt className="font-medium text-gray-900">Date placed</dt>
                    <dd className="sm:mt-1">
                      <time dateTime={order.createdAt}>{format(new Date(order.createdAt), 'PP')}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between pt-6 sm:block sm:pt-0">
                    <dt className="font-medium text-gray-900">Order number</dt>
                    <dd className="sm:mt-1">{shopifyGidToId(order.id)}</dd>
                  </div>
                  <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                    <dt>Total amount</dt>
                    <dd className="sm:mt-1">
                      {formatPrice(
                        order.totalPriceSet.shopMoney.currencyCode,
                        Number(order.totalPriceSet.shopMoney.amount) * 100
                      )}
                    </dd>
                  </div>
                </dl>
                {/* <a
                  href={order.invoiceHref}
                  className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
                >
                  View Invoice
                  <span className="sr-only">for order {order.number}</span>
                </a> */}
              </header>

              <main className="px-2 sm:px-4">
                {Boolean(order.fulfillments?.length) && (<table className="w-full text-gray-500 sm:mt-6">
                  <caption className="sr-only">Products</caption>
                  <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                    <tr>
                      <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                        Product
                      </th>
                      <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                        Price
                      </th>
                      <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                        Status
                      </th>
                      <th scope="col" className="w-0 py-3 font-normal text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                    {order.fulfillments.map(
                      ({
                        id,
                        displayStatus,
                        updatedAt,
                        deliveredAt,
                        estimatedDeliveryAt,
                        trackingInfo,
                        fulfillmentLineItems
                      }) =>
                        fulfillmentLineItems.edges.map(({ node }) => (
                          <tr key={node.lineItem.id}>
                            <td className="py-6 pr-8">
                              <NextLink href={`/product/${shopifyGidToId(node.lineItem.product.id)}`}>
                                <a className="flex items-center">
                                  <div className="flex items-center w-16 h-16 mr-6">
                                    <Image
                                      src={node.lineItem.image.url}
                                      height={node.lineItem.image.height}
                                      width={node.lineItem.image.width}
                                      alt={node.lineItem.name}
                                      className="rounded"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900">{node.lineItem.name}</div>
                                    <div className="mt-1 sm:hidden">
                                      {formatPrice(
                                        node.lineItem.originalTotalSet.shopMoney.currencyCode,
                                        node.lineItem.originalTotalSet.shopMoney.amount * 100
                                      )}
                                    </div>
                                  </div>
                                </a>
                              </NextLink>
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              {formatPrice(
                                node.lineItem.originalTotalSet.shopMoney.currencyCode,
                                node.lineItem.originalTotalSet.shopMoney.amount * 100
                              )}
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              <PurchseOrderStatus
                                status={displayStatus}
                                updatedAt={updatedAt}
                                deliveredAt={deliveredAt}
                                estimatedDeliveryAt={estimatedDeliveryAt}
                                trackingCompany={trackingInfo[0].company}
                                trackingNumber={trackingInfo[0].number}
                              />
                            </td>
                            <td className="py-6 font-medium text-right whitespace-nowrap">
                              <NextLink href={`/product/${shopifyGidToId(node.lineItem.product.id)}`}>
                                <Button as="a">
                                  <span>
                                    View<span className="hidden lg:inline"> Product</span>
                                    <span className="sr-only">, {node.lineItem.name}</span>
                                  </span>
                                </Button>
                              </NextLink>
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
                )}
              </main>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AccountPurchaseList;
