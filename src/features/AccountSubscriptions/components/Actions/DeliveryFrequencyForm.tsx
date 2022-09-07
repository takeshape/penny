import { RadioGroup } from '@headlessui/react';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { UpdateDeliveryFrequencyMutation } from 'features/AccountSubscriptions/queries';
import { formatDeliverySchedule } from 'features/AccountSubscriptions/utils';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UpdateDeliveryFrequencyMutationResponse, UpdateDeliveryFrequencyMutationVariables } from 'types/takeshape';
import classNames from 'utils/classNames';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { RefetchSubscriptions, Subscription } from '../../types';

export interface DeliveryFrequencyFormProps extends ModalProps {
  subscription: Subscription;
  refetchSubscriptions: RefetchSubscriptions;
}

export interface DeliveryFrequencyFormValues {
  deliveryScheduleIntervalCount: string;
}

/**
 * TODO Handle submit errors
 */
export const DeliveryFrequencyForm = ({
  isOpen,
  onClose,
  subscription,
  refetchSubscriptions
}: DeliveryFrequencyFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<DeliveryFrequencyFormValues>();

  const [updateDeliveryFrequency] = useAuthenticatedMutation<
    UpdateDeliveryFrequencyMutationResponse,
    UpdateDeliveryFrequencyMutationVariables
  >(UpdateDeliveryFrequencyMutation);

  const handleFormSubmit = useCallback(
    async (formData: DeliveryFrequencyFormValues) => {
      await updateDeliveryFrequency({
        variables: {
          frequency: formData.deliveryScheduleIntervalCount.toString(),
          unit: subscription.order_interval_unit,
          subscriptionId: subscription.id
        }
      });
      await refetchSubscriptions();
      onClose();
    },
    [onClose, refetchSubscriptions, subscription.id, subscription.order_interval_unit, updateDeliveryFrequency]
  );

  const resetState = useCallback(
    () =>
      reset({
        deliveryScheduleIntervalCount: subscription.order_interval_frequency
      }),
    [reset, subscription.order_interval_frequency]
  );

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  const { order_interval_frequency_options } = subscription.rechargeProduct.subscription_defaults;

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Delivery frequency"
      secondaryText="Change how often you get your subscription."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section aria-labelledby="options-heading" className="md:max-h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
        <h3 id="options-heading" className="sr-only">
          Delivery schedule options
        </h3>

        <div className="mx-auto w-full rounded-2xl bg-white py-2">
          <Controller
            name="deliveryScheduleIntervalCount"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <RadioGroup.Label className="sr-only">Delivery schedule</RadioGroup.Label>
                <div className="bg-white rounded-md -space-y-px">
                  {order_interval_frequency_options.map((option, optionIdx) => (
                    <RadioGroup.Option
                      key={option}
                      value={option}
                      className={({ checked }) =>
                        classNames(
                          optionIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                          optionIdx === order_interval_frequency_options.length - 1
                            ? 'rounded-bl-md rounded-br-md'
                            : '',
                          checked ? 'bg-accent-50 border-accent-200 z-10' : 'border-body-200',
                          'relative border p-4 flex cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <span
                            className={classNames(
                              checked ? 'bg-accent-600 border-transparent' : 'bg-white border-body-300',
                              active ? 'ring-2 ring-offset-2 ring-accent-500' : '',
                              'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <span className="ml-3 flex flex-col">
                            <RadioGroup.Label
                              as="span"
                              className={classNames(
                                checked ? 'text-accent-900' : 'text-body-900',
                                'block text-sm font-medium'
                              )}
                            >
                              Every{' '}
                              {formatDeliverySchedule({
                                order_interval_unit: subscription.order_interval_unit,
                                order_interval_frequency: option
                              })}
                            </RadioGroup.Label>
                          </span>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>
      </section>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update delivery frequency"
      />
    </ModalForm>
  );
};
