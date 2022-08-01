import { Modal, ModalProps } from 'components/Modal/Modal';
import { format } from 'date-fns';
import { FormActions } from 'features/AccountSubscriptions/components/FormActions';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { shopifyGidToId } from 'transforms/shopify';
import { SubscriptionOrder } from '../../types';

export interface SkipNextFormProps extends ModalProps {
  order?: SubscriptionOrder;
  upcomingOrders: SubscriptionOrder[];
}

export interface SkipFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const SkipForm = ({ isOpen, onClose, order }: SkipNextFormProps) => {
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

  const orderNumber = useMemo(() => shopifyGidToId(order.id), [order]);

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

  useEffect(() => {
    let closeTimer;

    if (isSubmitSuccessful && isOpen) {
      closeTimer = setTimeout(() => onClose(), 2000);
    }

    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [isOpen, isSubmitSuccessful, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} afterLeave={resetState}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Skip order</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              If you&apos;re leaving town or just don&apos;t need it.
            </p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
              {isSubmitSuccessful ? (
                <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
                  <p className="mb-2">
                    Your <strong>{format(new Date(order.fulfillmentDate), 'PPP')}</strong> has been skipped.
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
                    <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
                      <p className="mb-2">
                        You will not receive an order on{' '}
                        <strong className="text-black">{format(new Date(order.fulfillmentDate), 'PPP')}</strong>.
                      </p>
                      <p>Would you like to continue?</p>
                    </div>
                  )}

                  {order.status === 'skipped' && <p>Order #{orderNumber} has already been skipped.</p>}

                  <input {...register('confirm')} className="hidden" />
                </section>
              )}
            </div>

            <FormActions
              isSubmitted={isSubmitted}
              isSubmitting={isSubmitting}
              onCancel={onClose}
              className="mt-8 flex justify-end gap-2"
              submitText="Skip it"
              disableSubmit={order.status !== 'upcoming'}
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
