import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { SubscriptionOrder } from '../../types';

export interface OrderNowFormProps extends ModalProps {
  order: SubscriptionOrder;
}

export interface OrderNowFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const OrderNowForm = ({ isOpen, onClose, order }: OrderNowFormProps) => {
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

  const handleFormSubmit = useCallback(
    async (formData: OrderNowFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ formData, order });
    },
    [order]
  );

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
          <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
            <p className="mb-2">
              Your <strong>{format(new Date(order.fulfillmentDate), 'PPP')}</strong> order is being processed now.
            </p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm order now
            </h3>
            {order.status === 'scheduled' && (
              <div className="h-full font-medium flex flex-col items-center justify-center text-center text-gray-600">
                <p className="mb-4">
                  Your next order scheduled for <strong>{format(new Date(order.fulfillmentDate), 'PPP')}</strong> will
                  be processed and shipped immediately.
                </p>
                <p>Would you like to continue?</p>
              </div>
            )}

            {order.status === 'skipped' && <p>This order has already been skipped.</p>}

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
      />
    </ModalForm>
  );
};
