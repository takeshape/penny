import { RadioGroup } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths
} from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SetNextChargeDateMutationResponse, SetNextChargeDateMutationVariables } from 'types/takeshape';
import classNames from 'utils/classNames';
import { useAuthenticatedMutation } from 'utils/takeshape';
import { SetNextChargeDateMutation } from '../../queries';
import { AnySubscription, RefetchSubscriptions } from '../../types';

function getMonth(forDate) {
  const now = new Date();

  const monthStart = startOfMonth(forDate);
  const monthEnd = endOfMonth(forDate);
  const dateStart = startOfWeek(monthStart);
  const dateEnd = endOfWeek(monthEnd);
  const dates = [];

  let date = dateStart;

  while (date <= dateEnd) {
    dates.push(date);
    date = addDays(date, 1);
  }

  return {
    start: monthStart,
    isCurrentMonth: isSameMonth(monthStart, now),
    name: format(monthStart, 'MMMM'),
    days: dates.map((d) => ({
      date: format(d, 'yyyy-MM-dd'),
      isCurrentMonth: isSameMonth(d, forDate),
      isToday: isSameDay(d, now)
    }))
  };
}

export interface NextChargeDateFormProps extends ModalProps {
  subscription: AnySubscription;
  refetchSubscriptions: RefetchSubscriptions;
}

interface NextChargeDateFormValues {
  nextChargeDate: string;
}

export const NextChargeDateForm = ({
  isOpen,
  onClose,
  subscription,
  refetchSubscriptions
}: NextChargeDateFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<NextChargeDateFormValues>();

  const [month, setMonth] = useState(getMonth(new Date(subscription.nextChargeScheduledAt)));

  const handlePrevMonth = useCallback(() => {
    setMonth(getMonth(subMonths(month.start, 1)));
  }, [month.start]);

  const handleNextMonth = useCallback(() => {
    setMonth(getMonth(addMonths(month.start, 1)));
  }, [month.start]);

  const [setNextChargeDate] = useAuthenticatedMutation<
    SetNextChargeDateMutationResponse,
    SetNextChargeDateMutationVariables
  >(SetNextChargeDateMutation);

  const handleFormSubmit = useCallback(
    async (formData: NextChargeDateFormValues) => {
      await setNextChargeDate({ variables: { subscriptionId: subscription.id, date: formData.nextChargeDate } });
      await refetchSubscriptions();
      onClose();
    },
    [onClose, refetchSubscriptions, setNextChargeDate, subscription.id]
  );

  const resetState = useCallback(() => {
    reset({
      nextChargeDate: format(new Date(subscription.nextChargeScheduledAt), 'yyyy-MM-dd')
    });
  }, [reset, subscription.nextChargeScheduledAt]);

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Delivery schedule"
      secondaryText="Change the date of your next scheduled order and all upcoming orders."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <section
        aria-labelledby="options-heading"
        className="w-full h-[380px] mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"
      >
        <h3 id="options-heading" className="sr-only">
          Next charge date
        </h3>
        <div className="flex items-center text-body-900">
          <button
            type="button"
            disabled={month.isCurrentMonth}
            onClick={handlePrevMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-body-400 hover:text-body-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-semibold">{month.name}</div>
          <button
            type="button"
            onClick={handleNextMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-body-400 hover:text-body-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-body-500">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>

        <Controller
          name="nextChargeDate"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field}>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg text-sm">
                {month.days.map((day) => (
                  <RadioGroup.Option
                    key={day.date}
                    value={day.date}
                    disabled={!day.isCurrentMonth}
                    className={({ checked }) =>
                      classNames(
                        'text-body-900 hover:bg-body-100 focus:z-10 rounded-lg cursor-pointer',
                        (checked || day.isToday) && 'font-semibold',
                        !day.isCurrentMonth && 'cursor-default hover:bg-transparent'
                      )
                    }
                  >
                    {({ checked }) => (
                      <>
                        {day.isCurrentMonth && (
                          <time
                            dateTime={day.date}
                            className={classNames(
                              'mx-auto flex items-center justify-center py-2.5 rounded-lg',
                              checked && 'bg-accent-600 text-white',
                              day.isToday && !checked && 'bg-body-300'
                            )}
                          >
                            {day.date.split('-').pop().replace(/^0/, '')}
                          </time>
                        )}
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          )}
        />
      </section>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update delivery schedule"
      />
    </ModalForm>
  );
};
