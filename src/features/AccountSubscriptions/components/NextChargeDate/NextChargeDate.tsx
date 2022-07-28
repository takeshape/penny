import { RadioGroup } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Button from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
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
import { useCallback, useState } from 'react';
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
  const nextChargeDate = new Date(currentNextChargeDate);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<NextChargeDateFormValues>({
    defaultValues: {
      nextChargeDate: format(nextChargeDate, 'yyyy-MM-dd')
    }
  });

  const handleFormSubmit = useCallback(
    async (formData: NextChargeDateFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);
      onClose();
    },
    [onClose]
  );

  const [month, setMonth] = useState(getMonth(nextChargeDate));

  const handlePrevMonth = useCallback(() => {
    setMonth(getMonth(subMonths(month.start, 1)));
  }, [month.start]);

  const handleNextMonth = useCallback(() => {
    setMonth(getMonth(addMonths(month.start, 1)));
  }, [month.start]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Next charge date</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Changing your next charge date will also adjust the dates of all your upcoming orders.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <section
              aria-labelledby="options-heading"
              className="w-full h-[360px] mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9"
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
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                      {month.days.map((day, dayIdx) => (
                        <RadioGroup.Option
                          key={day.date}
                          value={day.date}
                          className={({ checked }) =>
                            classNames(
                              'py-1.5 hover:bg-gray-100 focus:z-10',
                              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                              (checked || day.isToday) && 'font-semibold',
                              checked && 'text-white',
                              !checked && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                              !checked && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                              day.isToday && !checked && 'text-indigo-600',
                              dayIdx === 0 && 'rounded-tl-lg',
                              dayIdx === 6 && 'rounded-tr-lg',
                              dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                              dayIdx === month.days.length - 1 && 'rounded-br-lg'
                            )
                          }
                        >
                          {({ checked }) => (
                            <time
                              dateTime={day.date}
                              className={classNames(
                                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                                checked && day.isToday && 'bg-indigo-600',
                                checked && !day.isToday && 'bg-gray-900'
                              )}
                            >
                              {day.date.split('-').pop().replace(/^0/, '')}
                            </time>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                )}
              />
            </section>

            <Button disabled={isSubmitting} color="primary" type="submit" size="large" className="mt-6 w-full">
              Update subscription
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
