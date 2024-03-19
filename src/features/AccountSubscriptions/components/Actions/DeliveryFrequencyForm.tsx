import { ModalProps } from '@/components/Modal/Modal';
import { ModalForm } from '@/components/Modal/ModalForm';
import { ModalFormActions } from '@/components/Modal/ModalFormActions';
import { useAuthenticatedMutation } from '@/lib/takeshape';
import classNames from '@/lib/util/classNames';
import { UpdateDeliveryFrequencyMutationResponse, UpdateDeliveryFrequencyMutationVariables } from '@/types/takeshape';
import { RadioGroup } from '@headlessui/react';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UpdateDeliveryFrequencyMutation } from '../../queries';
import { AnySubscription, RefetchSubscriptions } from '../../types';
import { formatDeliverySchedule } from '../../utils';

export type DeliveryFrequencyFormProps = {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
} & ModalProps;

export type DeliveryFrequencyFormValues = {
  intervalCount: string;
};

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
          frequency: formData.intervalCount,
          unit: subscription.interval.toLowerCase(),
          subscriptionId: subscription.id
        }
      });
      await refetchSubscriptions();
      onClose();
    },
    [onClose, refetchSubscriptions, subscription.id, subscription.interval, updateDeliveryFrequency]
  );

  const resetState = useCallback(
    () =>
      reset({
        intervalCount: String(subscription.intervalCount)
      }),
    [reset, subscription.intervalCount]
  );

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  const { intervalOptions } = subscription;

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Delivery frequency"
      secondaryText="Change how often you get your subscription."
      afterLeave={resetState}
      onSubmit={(...args) => void handleSubmit(handleFormSubmit)(...args)}
    >
      <section aria-labelledby="options-heading" className="md:max-h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
        <h3 id="options-heading" className="sr-only">
          Delivery schedule options
        </h3>

        <div className="mx-auto w-full rounded-2xl bg-white py-2">
          <Controller
            name="intervalCount"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field}>
                <RadioGroup.Label className="sr-only">Delivery schedule</RadioGroup.Label>
                <div className="bg-white rounded-md -space-y-px">
                  {intervalOptions.map((option, optionIdx) => (
                    <RadioGroup.Option
                      key={option}
                      value={option}
                      className={({ checked }) =>
                        classNames(
                          optionIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                          optionIdx === intervalOptions.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
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
                                interval: subscription.interval,
                                intervalCount: Number(option)
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
