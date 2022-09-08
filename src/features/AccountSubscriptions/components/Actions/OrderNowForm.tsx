import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { SetNextChargeDateMutation } from 'features/AccountSubscriptions/queries';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { SetNextChargeDateMutationResponse, SetNextChargeDateMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { RechargeCharge, RefetchSubscriptions, Subscription } from '../../types';

export interface OrderNowFormProps extends ModalProps {
  subscription: Subscription;
  order: RechargeCharge;
  refetchSubscriptions: RefetchSubscriptions;
}

export interface OrderNowFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 * TODO Ideally we'd use this: https://developer.rechargepayments.com/2021-11/charges/charge_process but it requires a
 * pro acct
 */
export const OrderNowForm = ({ isOpen, onClose, subscription, order, refetchSubscriptions }: OrderNowFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful }
  } = useForm<OrderNowFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const [setNextChargeDate] = useAuthenticatedMutation<
    SetNextChargeDateMutationResponse,
    SetNextChargeDateMutationVariables
  >(SetNextChargeDateMutation);

  const handleFormSubmit = useCallback(async () => {
    await setNextChargeDate({
      variables: { subscriptionId: subscription.id, date: format(new Date(), 'yyyy-MM-dd') }
    });
    await refetchSubscriptions();
    onClose();
  }, [onClose, refetchSubscriptions, setNextChargeDate, subscription.id]);

  const resetState = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ModalForm
      autoCloseDelay={3000}
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Order now"
      secondaryText="Get your next order right away."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-2">Your order scheduled has been adjusted.</p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm order now
            </h3>
            {order.status === 'QUEUED' && (
              <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
                <p className="mb-4">
                  Your next order is currently scheduled for{' '}
                  <span className="font-bold">{format(new Date(order.scheduled_at), 'PPP')}</span>. Would you like to
                  move that up to today?
                </p>
                <p className="text-sm">
                  Please note, your order will be processed in the next 24 hours and all your future orders will be
                  adjusted according to your delivery frequency.
                </p>
              </div>
            )}

            {order.status === 'SKIPPED' && <p>This order has already been skipped.</p>}

            <input {...register('confirm')} className="hidden" />
          </section>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Order now"
        disableSubmit={order.status !== 'QUEUED'}
      />
    </ModalForm>
  );
};
