import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { UnskipChargeMutationResponse, UnskipChargeMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { UnskipChargeMutation } from '../../queries';
import { RechargeCharge, RefetchSubscriptions, Subscription } from '../../types';

export interface UnskipFormProps extends ModalProps {
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
export const UnskipForm = ({ isOpen, onClose, order, subscription, refetchSubscriptions }: UnskipFormProps) => {
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

  const [unskipCharge] = useAuthenticatedMutation<UnskipChargeMutationResponse, UnskipChargeMutationVariables>(
    UnskipChargeMutation
  );

  const handleFormSubmit = useCallback(async () => {
    await unskipCharge({ variables: { chargeId: order.id, subscriptionId: subscription.id } });
    await refetchSubscriptions();
  }, [order.id, refetchSubscriptions, subscription.id, unskipCharge]);

  const resetState = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Unskip order"
      secondaryText="Restore a previously skipped upcoming order."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4">
              Your order on <strong>{format(new Date(order.scheduled_at), 'PP')}</strong> will be processed.
            </p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm skip order
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
              <p className="mb-4">
                Your order will be processed normally on{' '}
                <strong className="text-black">{format(new Date(order.scheduled_at), 'PP')}</strong>.
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
        submitText="Unskip it"
      />
    </ModalForm>
  );
};
