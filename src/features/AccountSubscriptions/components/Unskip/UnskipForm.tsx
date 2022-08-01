import { ModalProps } from 'components/Modal/Modal';
import { format } from 'date-fns';
import { ModalForm } from 'features/AccountSubscriptions/components/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/ModalFormActions';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { shopifyGidToId } from 'transforms/shopify';
import { Order } from '../../types';

export interface UnskipFormProps extends ModalProps {
  order?: Order;
}

export interface SkipFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const UnskipForm = ({ isOpen, onClose, order }: UnskipFormProps) => {
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

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Unskip order"
      secondaryText="Restore a previously skipped upcoming order."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
    >
      <div className="md:h-[calc(1/4*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
            <p className="mb-4">
              Your order on <strong>{format(new Date(order.fulfillmentDate), 'PPP')}</strong> will be processed.
            </p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm skip order
            </h3>

            <div className="h-full font-medium flex flex-col items-center justify-center text-center text-gray-600">
              <p className="mb-4">
                Your order will be processed normally on{' '}
                <strong className="text-black">{format(new Date(order.fulfillmentDate), 'PPP')}</strong>.
              </p>
              <p>Would you like to continue?</p>
            </div>

            <input {...register('confirm')} className="hidden" />
          </section>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Unskip it"
      />
    </ModalForm>
  );
};
