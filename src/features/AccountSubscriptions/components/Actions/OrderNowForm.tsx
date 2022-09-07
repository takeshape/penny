import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { format } from 'date-fns';
import { CreateOnetimeMutation } from 'features/AccountSubscriptions/queries';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { CreateOnetimeMutationResponse, CreateOnetimeMutationVariables } from 'types/takeshape';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { RechargeCharge, Subscription } from '../../types';

export interface OrderNowFormProps extends ModalProps {
  subscription: Subscription;
  order: RechargeCharge;
}

export interface OrderNowFormValues {
  confirm: boolean;
}

/**
 * TODO Handle submit errors
 */
export const OrderNowForm = ({ isOpen, onClose, subscription, order }: OrderNowFormProps) => {
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

  const [orderNow, { data }] = useAuthenticatedMutation<CreateOnetimeMutationResponse, CreateOnetimeMutationVariables>(
    CreateOnetimeMutation
  );

  const lineItem = order.line_items.find((li) => li.subscription_id === subscription.id);

  const handleFormSubmit = useCallback(async () => {
    orderNow({
      variables: {
        addressId: order.address_id,
        productId: lineItem.shopify_product_id,
        variantId: lineItem.shopify_variant_id,
        quantity: lineItem.quantity
      }
    });
  }, [lineItem.quantity, lineItem.shopify_product_id, lineItem.shopify_variant_id, order.address_id, orderNow]);

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
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-2">Your one-time order is being processed.</p>
          </div>
        ) : (
          <section aria-labelledby="confirm-heading" className="h-full">
            <h3 id="confirm-heading" className="sr-only">
              Confirm order now
            </h3>
            {order.status === 'QUEUED' && (
              <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
                <p className="mb-4">
                  Order the same product to be processed immediately using this subscription&apos;s payment method.
                </p>
                <p>
                  This will not affect your upcoming delivery on {format(new Date(order.scheduled_at), 'PPP')} and it
                  will not receive your standard subscription discounts.
                </p>
              </div>
            )}

            {order.status === 'SKIPPED' && <p>This order has already been skipped.</p>}

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
