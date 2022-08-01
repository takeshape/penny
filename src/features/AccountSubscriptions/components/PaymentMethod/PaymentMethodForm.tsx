import { RadioGroup } from '@headlessui/react';
import { ModalProps } from 'components/Modal/Modal';
import NextLink from 'components/NextLink';
import { ModalForm } from 'features/AccountSubscriptions/components/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/ModalFormActions';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Shopify_CustomerPaymentMethod } from 'types/takeshape';
import classNames from 'utils/classNames';
import { CreditCard } from '../CreditCard';

export interface PaymentMethodFormProps extends ModalProps {
  currentPaymentMethod: Shopify_CustomerPaymentMethod;
}

export interface PaymentMethodFormValues {
  paymentMethodId: string;
}

const paymentMethods = [
  {
    id: 'ppp',
    instrument: {
      brand: 'Visa',
      expiresSoon: false,
      expiryMonth: 10,
      expiryYear: 2023,
      lastDigits: '4242',
      maskedNumber: '••••4242',
      name: 'Michael Shick',
      isRevocable: false
    },
    subscriptionContracts: { nodes: [], edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false } }
  },
  {
    id: 'qqq',
    instrument: {
      brand: 'Amex',
      expiresSoon: false,
      expiryMonth: 10,
      expiryYear: 2023,
      lastDigits: '5858',
      maskedNumber: '••••5858',
      name: 'Michael Shick',
      isRevocable: false
    },
    subscriptionContracts: { nodes: [], edges: [], pageInfo: { hasNextPage: false, hasPreviousPage: false } }
  }
];

/**
 * TODO Handle submit errors
 */
export const PaymentMethodForm = ({ isOpen, onClose, currentPaymentMethod }: PaymentMethodFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitted }
  } = useForm<PaymentMethodFormValues>();

  //  TODO Assuming we use this:
  //  https://shopify.dev/api/admin-rest/2022-07/resources/payment#post-https:-elb.deposit.shopifycs.com-sessions
  //  then this
  //  https://shopify.dev/api/admin-graphql/2022-07/mutations/customerpaymentmethodcreditcardcreate
  // TODO query to get customer payment methods available
  // TODO find current method in list and set initial form value with unique id

  const handleFormSubmit = useCallback(
    async (formData: PaymentMethodFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);
      // TODO Mutate subscription state to show new values
      onClose();
    },
    [onClose]
  );

  const resetState = useCallback(() => {
    reset({
      paymentMethodId: currentPaymentMethod.id
    });
  }, [currentPaymentMethod, reset]);

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Payment method"
      secondaryText="Change how you pay for this subscription."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section aria-labelledby="options-heading" className="md:max-h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
        <h3 id="options-heading" className="sr-only">
          Payment method options
        </h3>

        <div className="mx-auto w-full rounded-2xl bg-white py-2">
          <Controller
            name="paymentMethodId"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <RadioGroup.Label className="sr-only">Delivery schedule</RadioGroup.Label>
                <div className="bg-white rounded-md -space-y-px">
                  {paymentMethods.map((payment, paymentIdx) => (
                    <RadioGroup.Option
                      key={payment.id}
                      value={payment.id}
                      className={({ checked }) =>
                        classNames(
                          paymentIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                          paymentIdx === paymentMethods.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                          checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                          'relative border p-4 flex cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <span
                            className={classNames(
                              checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                              'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <span className="ml-3 flex flex-col">
                            <RadioGroup.Label
                              as="span"
                              className={classNames(
                                checked ? 'text-indigo-900' : 'text-gray-900',
                                'block text-sm font-medium'
                              )}
                            >
                              <CreditCard card={payment.instrument} />
                            </RadioGroup.Label>
                          </span>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>
      </section>

      <div className="mt-4 flex items-center justify-center">
        <NextLink
          href="/account/payments"
          className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Add a payment method
        </NextLink>
      </div>

      <ModalFormActions
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update payment method"
      />
    </ModalForm>
  );
};
