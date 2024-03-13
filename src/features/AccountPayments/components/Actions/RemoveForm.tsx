import { ModalProps } from '@/components/Modal/Modal';
import { ModalForm } from '@/components/Modal/ModalForm';
import { ModalFormActions } from '@/components/Modal/ModalFormActions';
import { getCreditCardIcon } from '@/components/Payments/utils';
import { PaymentMethod } from '@/types/paymentMethod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export type RemoveFormProps = {
  paymentMethod: PaymentMethod;
} & ModalProps;

export type RemoveFormValues = {
  confirm: boolean;
};

/**
 * TODO Handle submit errors
 */
export const RemoveForm = ({ isOpen, onClose, paymentMethod }: RemoveFormProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<RemoveFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const { instrument } = paymentMethod;
  const CreditCardIcon = getCreditCardIcon(instrument.brand);

  const handleFormSubmit = useCallback(async (formData: RemoveFormValues) => {
    // eslint-disable-next-line no-console
    console.log({ formData });
    // TODO Mutate payment methods list
  }, []);

  const resetState = useCallback(() => reset(), [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Remove payment method"
      secondaryText="Remove a payment method from your account."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:max-h-[calc(7/8*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4">Your payment method has been removed.</p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm remove payment method
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
              <div className="flex items-center gap-8">
                <CreditCardIcon className="h-24 w-24 mb-4" />
                <span>{instrument.maskedNumber}</span>
              </div>
              <p className="mb-4 px-12">
                Removing this payment method may cause some subscriptions to fail to be processed.
              </p>
              <p>Would you like to remove it?</p>
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
        submitText="Remove card"
      />
    </ModalForm>
  );
};
