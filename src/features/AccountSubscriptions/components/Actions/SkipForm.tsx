import { ModalProps } from 'components/Modal/Modal';
import { format } from 'date-fns';
import { ModalForm } from 'features/AccountSubscriptions/components/components/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/components/ModalFormActions';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { SubscriptionOrder } from '../../types';

export interface SkipFormProps extends ModalProps {
  order?: SubscriptionOrder;
}

export interface SkipFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const SkipForm = ({ isOpen, onClose, order }: SkipFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful },
    reset
  } = useForm<SkipFormValues>({
    defaultValues: {
      confirm: true
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: SkipFormValues) => {
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
          <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
            <p className="mb-4">
              Your order on <strong>{format(new Date(order.fulfillmentDate), 'PPP')}</strong> has been skipped.
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
            {order.status === 'upcoming' && (
              <div className="h-full font-medium flex flex-col items-center justify-center text-center text-gray-600">
                <p className="mb-4">
                  Your order will not be processed on{' '}
                  <strong className="text-black">{format(new Date(order.fulfillmentDate), 'PPP')}</strong>.
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
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Skip it"
        disableSubmit={order.status !== 'upcoming'}
      />
    </ModalForm>
  );
};
