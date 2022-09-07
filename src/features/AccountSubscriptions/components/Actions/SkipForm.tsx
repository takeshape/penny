import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { SkipChargeMutation } from 'features/AccountSubscriptions/queries';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { SkipChargeMutationResponse, SkipChargeMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { RechargeCharge, RefetchSubscriptions, Subscription } from '../../types';

export interface SkipFormProps extends ModalProps {
  subscription: Subscription;
  order: RechargeCharge;
  refetchSubscriptions: RefetchSubscriptions;
}

export interface SkipFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const SkipForm = ({ isOpen, onClose, subscription, order, refetchSubscriptions }: SkipFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<SkipFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const [skipCharge] = useAuthenticatedMutation<SkipChargeMutationResponse, SkipChargeMutationVariables>(
    SkipChargeMutation
  );

  const handleFormSubmit = useCallback(async () => {
    await skipCharge({ variables: { chargeId: order.id, subscriptionId: subscription.id } });
    await refetchSubscriptions();
  }, [order.id, refetchSubscriptions, skipCharge, subscription.id]);

  const resetState = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Skip order"
      secondaryText="Skip an upcoming order."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4">
              Your order on <strong>{format(new Date(order.scheduled_at), 'PPP')}</strong> has been skipped.
            </p>
            <p className="text-sm">
              If this was a mistake you can unskip it on the <strong>Subcription → Orders</strong> screen.
            </p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm skip order
            </h3>
            {order.status === 'QUEUED' && (
              <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
                <p className="mb-4">
                  Your order will not be processed on{' '}
                  <strong className="text-black">{format(new Date(order.scheduled_at), 'PPP')}</strong>.
                </p>
                <p>Would you like to continue?</p>
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
        submitText="Skip it"
        disableSubmit={order.status !== 'QUEUED'}
      />
    </ModalForm>
  );
};
