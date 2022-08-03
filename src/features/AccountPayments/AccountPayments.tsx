import { CreditCardIcon } from '@heroicons/react/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { getCreditCardIcon } from 'components/Payments/utils';
import { useState } from 'react';
import { PaymentMethod } from 'types/paymentMethod';
import { AddForm } from './components/Actions/AddForm';
import { RemoveForm } from './components/Actions/RemoveForm';
import { ViewSubscriptions } from './components/Actions/ViewSubscriptions';

const PaymentMethod = (paymentMethod: PaymentMethod) => {
  const { instrument } = paymentMethod;
  const CreditCardIcon = getCreditCardIcon(instrument.brand);

  const [isRemoveFormOpen, setIsRemoveFormOpen] = useState(false);
  const [isViewSubscriptionsOpen, setIsViewSubscriptionsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex space-x-6 items-start">
        <div className="w-full grid grid-cols-6 gap-4">
          <div className="col-span-2">
            <CreditCardIcon className="w-16 h-auto" />
          </div>
          <div className="col-span-3 font-medium text-gray-900">
            <div className="text-lg">
              <span>{instrument.brand}</span> <span>{instrument.maskedNumber}</span>
            </div>
            <div className="text-sm">
              Expires <span>{instrument.expiryMonth}</span>/<span>{instrument.expiryYear}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-4 px-2 mt-8 text-sm">
        <button
          type="button"
          onClick={() => setIsRemoveFormOpen(true)}
          className="whitespace-nowrap font-medium text-indigo-600 hover:text-indigo-500"
        >
          Remove
        </button>
        <button
          type="button"
          onClick={() => setIsViewSubscriptionsOpen(true)}
          className="whitespace-nowrap font-medium text-indigo-600 hover:text-indigo-500"
        >
          Subscriptions
        </button>
      </div>
      <RemoveForm isOpen={isRemoveFormOpen} onClose={() => setIsRemoveFormOpen(false)} paymentMethod={paymentMethod} />
      <ViewSubscriptions
        isOpen={isViewSubscriptionsOpen}
        onClose={() => setIsViewSubscriptionsOpen(false)}
        paymentMethod={paymentMethod}
      />
    </>
  );
};

export interface AccountPaymentsProps {
  paymentMethods: PaymentMethod[];
}

export const AccountPayments = ({ paymentMethods }: AccountPaymentsProps) => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  return (
    <CardPanel primaryText="Payment Methods" secondaryText="Add and remove payment methods.">
      <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {paymentMethods.map((paymentMethod) => (
          <li key={paymentMethod.id} className=" bg-white rounded-lg border px-4 py-6">
            <PaymentMethod {...paymentMethod} />
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => setIsAddFormOpen(true)}
            className="relative block w-full border border-gray-300 border-dashed rounded-lg p-8 h-full text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <CreditCardIcon className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">Add payment method</span>
          </button>
        </li>
      </ul>
      <AddForm isOpen={isAddFormOpen} onClose={() => setIsAddFormOpen(false)} customerId="" />
    </CardPanel>
  );
};
