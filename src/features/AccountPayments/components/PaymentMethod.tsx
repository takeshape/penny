import { getCreditCardIcon } from 'components/Payments/utils';
import { useState } from 'react';
import { PaymentMethod as TPaymentMethod } from 'types/paymentMethod';
import { RemoveForm } from './Actions/RemoveForm';
import { ViewSubscriptions } from './Actions/ViewSubscriptions';

export const PaymentMethod = (paymentMethod: TPaymentMethod) => {
  const { instrument } = paymentMethod;
  const CreditCardIcon = getCreditCardIcon(instrument.brand);

  const [isRemoveFormOpen, setIsRemoveFormOpen] = useState(false);
  const [isViewSubscriptionsOpen, setIsViewSubscriptionsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex space-x-6 items-start">
        <div className="w-full grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <CreditCardIcon className="w-24 h-auto" />
          </div>
          <div className="col-span-2 font-medium text-gray-900">
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
        {paymentMethod.subscriptionContracts?.length > 0 && (
          <button
            type="button"
            onClick={() => setIsViewSubscriptionsOpen(true)}
            className="whitespace-nowrap font-medium text-indigo-600 hover:text-indigo-500"
          >
            Subscriptions
          </button>
        )}
      </div>
      <RemoveForm isOpen={isRemoveFormOpen} onClose={() => setIsRemoveFormOpen(false)} paymentMethod={paymentMethod} />
      {paymentMethod.subscriptionContracts?.length > 0 && (
        <ViewSubscriptions
          isOpen={isViewSubscriptionsOpen}
          onClose={() => setIsViewSubscriptionsOpen(false)}
          paymentMethod={paymentMethod}
        />
      )}
    </>
  );
};
