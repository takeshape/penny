/**
 * If a project is able to use `write_customer_payment_methods` can use this.
 */
import { RadioGroup } from '@headlessui/react';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { CreditCard } from 'components/Payments/CreditCard';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyAddressPaymentMethodsQueryVariables,
  GetMyPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryVariables,
  SendMyUpdatePaymentEmailMutationResponse,
  SendMyUpdatePaymentEmailMutationVariables,
  UpdateMyPaymentMethodMutationResponse,
  UpdateMyPaymentMethodMutationVariables
} from 'types/takeshape';
import classNames from 'utils/classNames';
import { useAuthenticatedMutation, useAuthenticatedQuery } from 'utils/takeshape';
import {
  GetMyAddressPaymentMethodsQuery,
  GetMyPaymentMethodsQuery,
  SendMyUpdatePaymentEmailMutation,
  UpdateMyPaymentMethodMutation
} from '../../queries';
import { getAddressDefaultPaymentMethod, getPaymentMethods } from '../../transforms';
import { RefetchSubscriptions } from '../../types';

export interface PaymentMethodRechargeFormProps extends ModalProps {
  addressId: string;
  refetchSubscriptions: RefetchSubscriptions;
}

export interface PaymentMethodRechargeFormValues {
  paymentMethodId: string;
}

/**
 * TODO: Replace addressId and lookup with a paymentMethodId that lives on the sub
 */
export const PaymentMethodRechargeForm = ({
  isOpen,
  onClose,
  addressId,
  refetchSubscriptions
}: PaymentMethodRechargeFormProps) => {
  const { data: session } = useSession();

  const { email } = session?.user ?? {};

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<PaymentMethodRechargeFormValues>();

  const [isPaymentMethodAdded, setIsPaymentMethodAdded] = useState(false);

  const { data: paymentMethodsResponse } = useAuthenticatedQuery<
    GetMyPaymentMethodsQueryResponse,
    GetMyPaymentMethodsQueryVariables
  >(GetMyPaymentMethodsQuery);

  const { data: addressPaymentMethodsResponse, refetch: refetchAddressPaymentMethods } = useAuthenticatedQuery<
    GetMyAddressPaymentMethodsQueryResponse,
    GetMyAddressPaymentMethodsQueryVariables
  >(GetMyAddressPaymentMethodsQuery, { variables: { addressId } });

  const currentPaymentMethod = useMemo(
    () => getAddressDefaultPaymentMethod(addressPaymentMethodsResponse),
    [addressPaymentMethodsResponse]
  );

  const [sendUpdatePaymentEmail] = useAuthenticatedMutation<
    SendMyUpdatePaymentEmailMutationResponse,
    SendMyUpdatePaymentEmailMutationVariables
  >(SendMyUpdatePaymentEmailMutation);

  const [updatePaymentMethod] = useAuthenticatedMutation<
    UpdateMyPaymentMethodMutationResponse,
    UpdateMyPaymentMethodMutationVariables
  >(UpdateMyPaymentMethodMutation);

  const paymentMethods = getPaymentMethods(paymentMethodsResponse);

  const handleFormSubmit = useCallback(
    async ({ paymentMethodId }: PaymentMethodRechargeFormValues) => {
      await updatePaymentMethod({ variables: { paymentMethodId, addressId } });
      await refetchAddressPaymentMethods();
      await refetchSubscriptions();
      onClose();
    },
    [addressId, onClose, refetchAddressPaymentMethods, refetchSubscriptions, updatePaymentMethod]
  );

  const handleAddPaymentMethod = useCallback(() => {
    sendUpdatePaymentEmail({ variables: { paymentMethodId: currentPaymentMethod.id } });
    setIsPaymentMethodAdded(true);
  }, [currentPaymentMethod, sendUpdatePaymentEmail]);

  const resetState = useCallback(() => {
    if (currentPaymentMethod?.id) {
      reset({ paymentMethodId: currentPaymentMethod.id });
    }
    setIsPaymentMethodAdded(false);
  }, [currentPaymentMethod, reset]);

  // Set initial values
  useEffect(() => {
    if (currentPaymentMethod?.id) {
      resetState();
    }
  }, [currentPaymentMethod, resetState]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Payment method"
      secondaryText="Change how you pay for this subscription."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful || isPaymentMethodAdded}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col justify-center">
        {isPaymentMethodAdded ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4 text-lg">Shopify sent an email to {email}.</p>
            <p className="mb-4 text-sm">Follow the instructions in the email update your payment method.</p>
          </div>
        ) : (
          <>
            <section aria-labelledby="options-heading" className="w-full">
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
                        {paymentMethods?.map((payment, paymentIdx) => (
                          <RadioGroup.Option
                            key={payment.id}
                            value={payment.id}
                            className={({ checked }) =>
                              classNames(
                                paymentIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                paymentIdx === paymentMethods.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                checked ? 'bg-accent-50 border-accent-200 z-10' : 'border-body-200',
                                'relative border p-4 flex cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <span
                                  className={classNames(
                                    checked ? 'bg-accent-600 border-transparent' : 'bg-white border-body-300',
                                    active ? 'ring-2 ring-offset-2 ring-accent-500' : '',
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
                                      checked ? 'text-accent-900' : 'text-body-900',
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
              <span
                className="whitespace-nowrap font-medium text-accent-600 hover:text-accent-500 cursor-pointer"
                onClick={handleAddPaymentMethod}
              >
                Update or replace current payment method &rarr;
              </span>
            </div>
          </>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful || isPaymentMethodAdded}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Change payment method"
        disableSubmit={paymentMethods?.length < 2}
      />
    </ModalForm>
  );
};
