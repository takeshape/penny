import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { SkipChargeMutationResponse, SkipChargeMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { SkipChargeMutation } from '../../queries';
import { AnySubscription, RefetchSubscriptions, SubscriptionOrder } from '../../types';

export interface SkipFormProps extends ModalProps {
  subscription: AnySubscription;
  order: SubscriptionOrder;
  refetchSubscriptions: RefetchSubscriptions;
}

export interface SkipFormValues {
  confirm: boolean;
}

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
            <p className="mb-4">Your order on has been skipped.</p>
            <p className="text-sm">
              If this was a mistake you can unskip it on the <strong>Subcription → Orders</strong> screen.
            </p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm skip order
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
              <p className="mb-4">
                Your order will not be processed on{' '}
                <strong className="text-black">{format(new Date(order.chargeScheduledAt), 'PPP')}</strong>.
              </p>
              <p>Would you like to continue?</p>
            </div>

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
        disableSubmit={order.status !== 'CHARGE_QUEUED'}
      />
    </ModalForm>
  );
};
