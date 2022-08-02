import { RadioGroup } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { ModalProps } from 'components/Modal/Modal';
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
import { ModalForm } from 'features/AccountSubscriptions/components/Actions/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/Actions/ModalFormActions';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import classNames from 'utils/classNames';

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
  currentNextChargeDate: string;
}

interface NextChargeDateFormValues {
  nextChargeDate: string;
}

/**
 * TODO Handle submit errors
 */
export const NextChargeDateForm = ({ isOpen, onClose, currentNextChargeDate }: NextChargeDateFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitted }
  } = useForm<NextChargeDateFormValues>();

  const [month, setMonth] = useState(getMonth(new Date(currentNextChargeDate)));

  const handlePrevMonth = useCallback(() => {
    setMonth(getMonth(subMonths(month.start, 1)));
  }, [month.start]);

  const handleNextMonth = useCallback(() => {
    setMonth(getMonth(addMonths(month.start, 1)));
  }, [month.start]);

  const handleFormSubmit = useCallback(
    async (formData: NextChargeDateFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);
      onClose();
    },
    [onClose]
  );

  const resetState = useCallback(() => {
    reset({
      nextChargeDate: format(new Date(currentNextChargeDate), 'yyyy-MM-dd')
    });
  }, [currentNextChargeDate, reset]);

  // Set initial values
  useEffect(() => resetState(), [resetState]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Next charge date"
      secondaryText="Changing your next charge date will also adjust the dates of all your upcoming orders."
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
        <div className="flex items-center text-gray-900">
          <button
            type="button"
            disabled={month.isCurrentMonth}
            onClick={handlePrevMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-semibold">{month.name}</div>
          <button
            type="button"
            onClick={handleNextMonth}
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
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
                {month.days.map((day, dayIdx) => (
                  <RadioGroup.Option
                    key={day.date}
                    value={day.date}
                    disabled={!day.isCurrentMonth}
                    className={({ checked }) =>
                      classNames(
                        'text-gray-900 hover:bg-gray-100 focus:z-10 rounded-lg cursor-pointer',
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
                              checked && 'bg-indigo-600 text-white',
                              day.isToday && !checked && 'bg-gray-300'
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
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Update next charge date"
      />
    </ModalForm>
  );
};
