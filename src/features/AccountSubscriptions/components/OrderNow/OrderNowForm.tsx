import Button from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface OrderNowFormProps extends ModalProps {}

export interface OrderNowFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const OrderNowForm = ({ isOpen, onClose }: OrderNowFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<OrderNowFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: OrderNowFormValues) => {
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
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Order now</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">If you need your stuff now.</p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="confirm-heading" className="md:max-h-[calc(1/2*100vh)] overflow-scroll">
              <h3 id="confirm-heading" className="sr-only">
                Confirm order now
              </h3>
              Your next order will be processed and shipped immediately. The following order dates will not be changed.
              If you want to change your delivery
              <input {...register('confirm')} className="hidden" />
            </section>

            <Button disabled={isSubmitting} color="primary" type="submit" size="large" className="mt-6 w-full">
              Order now
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
