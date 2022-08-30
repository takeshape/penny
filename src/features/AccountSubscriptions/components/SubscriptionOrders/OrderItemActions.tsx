import { isFuture } from 'date-fns';
import { useState } from 'react';
import { RechargeCharge } from '../../types';
import { SkipForm } from '../Actions/SkipForm';
import { UnskipForm } from '../Actions/UnskipForm';

interface OrderItemActionsProps {
  order: RechargeCharge;
}

export const OrderItemActions = ({ order }: OrderItemActionsProps) => {
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isUnskipOpen, setIsUnskipOpen] = useState(false);
  const [isSkipOpen, setIsSkipOpen] = useState(false);

  switch (order.status) {
    case 'SKIPPED': {
      return (
        isFuture(new Date(order.scheduled_at)) && (
          <>
            <button
              type="button"
              onClick={() => setIsUnskipOpen(true)}
              className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
            >
              Unskip
            </button>
            <UnskipForm isOpen={isUnskipOpen} onClose={() => setIsUnskipOpen(false)} order={order} />
          </>
        )
      );
    }

    case 'QUEUED': {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsSkipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Skip delivery
          </button>
          <SkipForm isOpen={isSkipOpen} onClose={() => setIsSkipOpen(false)} order={order} />
        </>
      );
    }
  }

  return null;
};
