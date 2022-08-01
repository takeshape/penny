import { RadioGroup } from '@headlessui/react';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'features/AccountSubscriptions/components/ModalForm';
import { formatDeliverySchedule } from 'features/AccountSubscriptions/utils';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'utils/classNames';
import { DeliveryScheduleOption, DeliveryScheduleOptions } from '../../types';
import { ModalFormActions } from '../ModalFormActions';

export interface DeliveryFrequencyFormProps extends ModalProps {
  deliveryScheduleOptions: DeliveryScheduleOptions;
  currentDeliverySchedule: DeliveryScheduleOption;
}

export interface DeliveryFrequencyFormValues {
  deliveryScheduleIntervalCount: number;
}

/**
 * TODO Handle submit errors
 */
export const DeliveryFrequencyForm = ({
  isOpen,
  onClose,
  deliveryScheduleOptions,
  currentDeliverySchedule
}: DeliveryFrequencyFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitted }
  } = useForm<DeliveryFrequencyFormValues>();

  const handleFormSubmit = useCallback(
    async (formData: DeliveryFrequencyFormValues) => {
      const deliverySchedule = {
        interval: currentDeliverySchedule.interval,
        intervalCount: formData.deliveryScheduleIntervalCount
      };
      // eslint-disable-next-line no-console
      console.log(deliverySchedule);
      // TODO Mutate subscription to show updated value
      onClose();
    },
    [currentDeliverySchedule.interval, onClose]
  );

  const resetState = useCallback(
    () =>
      reset({
        deliveryScheduleIntervalCount: currentDeliverySchedule.intervalCount
      }),
    [currentDeliverySchedule.intervalCount, reset]
  );

  // Set initial values
  useEffect(() => resetState(), [resetState]);

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
                  {deliveryScheduleOptions.map((option, optionIdx) => (
                    <RadioGroup.Option
                      key={option.intervalCount}
                      value={option.intervalCount}
                      className={({ checked }) =>
                        classNames(
                          optionIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                          optionIdx === deliveryScheduleOptions.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                          checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                          'relative border p-4 flex cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <span
                            className={classNames(
                              checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
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
                                checked ? 'text-indigo-900' : 'text-gray-900',
                                'block text-sm font-medium'
                              )}
                            >
                              Every {formatDeliverySchedule(option)}
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
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update delivery frequency"
      />
    </ModalForm>
  );
};
