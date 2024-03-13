import { Modal, ModalProps } from '@/components/Modal/Modal';
import { PaymentMethod } from '@/types/paymentMethod';

// export const SubscriptionStatus = ({ status }: Pick<SubscriptionContract, 'status'>) => {
//   let badgeText = '';
//   let badgeClasses = '';

//   switch (status) {
//     case 'ACTIVE':
//       badgeText = `Active`;
//       badgeClasses = 'bg-green-100 text-green-800';
//       break;

//     case 'FAILED':
//       badgeText = `Failed`;
//       badgeClasses = 'bg-red-100 text-red-800';
//       break;

//     case 'EXPIRED':
//     case 'CANCELLED':
//     case 'PAUSED':
//     default:
//       badgeText = `Ended`;
//       badgeClasses = 'bg-gray-100 text-gray-800';
//       break;
//   }

//   return (
//     <span
//       className={classNames(badgeClasses, 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ')}
//     >
//       {badgeText}
//     </span>
//   );
// };

export type ViewSubscriptionsProps = {
  paymentMethod: PaymentMethod;
} & ModalProps;

export const ViewSubscriptions = ({ isOpen, onClose }: ViewSubscriptionsProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="md:max-h-[calc(7/8*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Subscriptions</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">All subscriptions linked to this payment method.</p>
        </div>
        <table className="mt-4 w-full text-gray-500 sm:mt-6">
          <caption className="sr-only">Products</caption>
          <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
            <tr>
              <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                Product
              </th>
              <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                Started
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
            {/* {paymentMethod.subscriptionContracts.map((subscription) => (
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
                <td className="hidden py-6 pr-8 sm:table-cell">{format(new Date(subscription.createdAt), 'PPP')}</td>
                <td className="hidden py-6 pr-8 sm:table-cell">
                  <SubscriptionStatus status={subscription.status} />
                </td>
                <td className="py-6 font-medium text-right whitespace-nowrap">
                  <NextLink
                    href={`/account/subscriptions/${shopifyGidToId(subscription.id)}`}
                    className="text-accent-600"
                  >
                    View<span className="hidden lg:inline"> Subscription</span>
                  </NextLink>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};
