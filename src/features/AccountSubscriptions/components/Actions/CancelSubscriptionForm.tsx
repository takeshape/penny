import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Subscription } from '../../types';

export interface CancelSubscriptionFormProps extends ModalProps {
  subscription: Subscription;
}

export interface CancelSubscriptionFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const CancelSubscriptionForm = ({ isOpen, onClose, subscription }: CancelSubscriptionFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, isSubmitted }
  } = useForm<CancelSubscriptionFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: CancelSubscriptionFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ formData, subscription });
      // TODO Mutate subscription to show canceled
    },
    [subscription]
  );

  const resetState = useCallback(() => reset(), [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Cancel subscription"
      secondaryText="Will stop all future orders from being processed."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4">Your subscription has been canceled.</p>
            <p className="text-sm">If this was a mistake you can contact support to re-start it.</p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm cancel subscription
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
              <p className="mb-4">
                This will cancel your subscription and
                <br /> prevent the processing of all future orders.
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
        submitText="Cancel subscription"
      />
    </ModalForm>
  );
};
