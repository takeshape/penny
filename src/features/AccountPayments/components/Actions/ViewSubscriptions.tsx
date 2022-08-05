import { Modal, ModalProps } from 'components/Modal/Modal';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import { shopifyGidToId } from 'transforms/shopify';
import { PaymentMethod } from 'types/paymentMethod';

export interface ViewSubscriptionsProps extends ModalProps {
  paymentMethod: PaymentMethod;
}

export const ViewSubscriptions = ({ isOpen, onClose, paymentMethod }: ViewSubscriptionsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <table className="mt-4 w-full text-gray-500 sm:mt-6">
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
            <th scope="col" className="w-0 py-3 font-normal text-right">
              Info
            </th>
          </tr>
        </thead>
        <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
          {paymentMethod.subscriptionContracts.map((subscription) => (
            <tr key={subscription.id}>
              <td className="py-6 pr-8">
                <div className="flex items-center">
                  <NextImage
                    src={subscription.lines.nodes[0].variantImage.url}
                    alt={subscription.lines.nodes[0].variantImage.altText}
                    height={200}
                    width={200}
                    className="w-16 h-16 object-center object-cover rounded mr-6"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{subscription.lines.nodes[0].variantTitle}</div>
                  </div>
                </div>
              </td>
              <td className="hidden py-6 pr-8 sm:table-cell">{subscription.createdAt}</td>
              <td className="hidden py-6 pr-8 sm:table-cell">{subscription.status}</td>
              <td className="py-6 font-medium text-right whitespace-nowrap">
                <NextLink
                  href={`/account/subscriptions/${shopifyGidToId(subscription.id)}`}
                  className="text-indigo-600"
                >
                  View<span className="hidden lg:inline"> Subscription</span>
                </NextLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};
