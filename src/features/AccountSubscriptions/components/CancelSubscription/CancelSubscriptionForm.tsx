import { Modal, ModalProps } from 'components/Modal/Modal';
import { FormActions } from 'features/AccountSubscriptions/components/FormActions';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface CancelSubscriptionFormProps extends ModalProps {}

export interface CancelSubscriptionFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const CancelSubscriptionForm = ({ isOpen, onClose }: CancelSubscriptionFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<CancelSubscriptionFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: CancelSubscriptionFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);

      onClose();
    },
    [onClose]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Cancel subscription</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">It it isn&apos;t what you wanted.</p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="confirm-heading" className="md:max-h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
              <h3 id="confirm-heading" className="sr-only">
                Confirm cancel subscription
              </h3>
              This will cancel your subscription. TKTK, require typing something to confirm.
              <input {...register('confirm')} className="hidden" />
            </section>

            <FormActions
              isSubmitting={isSubmitting}
              onCancel={onClose}
              className="mt-8 flex justify-end gap-2"
              submitText="Cancel subscription"
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
