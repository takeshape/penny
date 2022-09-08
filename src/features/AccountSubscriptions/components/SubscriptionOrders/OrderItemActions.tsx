import { isFuture } from 'date-fns';
import { useState } from 'react';
import { RechargeCharge, RefetchSubscriptions, Subscription } from '../../types';
import { ReportIssueForm } from '../Actions/ReportIssueForm';
import { SkipForm } from '../Actions/SkipForm';
import { UnskipForm } from '../Actions/UnskipForm';

interface OrderItemActionsProps {
  subscription: Subscription;
  order: RechargeCharge;
  refetchSubscriptions: RefetchSubscriptions;
}

export const OrderItemActions = ({ subscription, order, refetchSubscriptions }: OrderItemActionsProps) => {
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isUnskipOpen, setIsUnskipOpen] = useState(false);
  const [isSkipOpen, setIsSkipOpen] = useState(false);

  switch (order.status) {
    case 'SKIPPED': {
      return (
        isFuture(new Date(order.scheduled_at)) && (
          <>
            <button
              id="unskip"
              type="button"
              onClick={() => setIsUnskipOpen(true)}
              className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
            >
              Unskip
            </button>
            <UnskipForm
              isOpen={isUnskipOpen}
              onClose={() => setIsUnskipOpen(false)}
              subscription={subscription}
              order={order}
              refetchSubscriptions={refetchSubscriptions}
            />
          </>
        )
      );
    }

    case 'QUEUED': {
      return (
        <>
          <button
            id="skip"
            type="button"
            onClick={() => setIsSkipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Skip delivery
          </button>
          <SkipForm
            isOpen={isSkipOpen}
            onClose={() => setIsSkipOpen(false)}
            subscription={subscription}
            order={order}
            refetchSubscriptions={refetchSubscriptions}
          />
          <button
            type="button"
            onClick={() => setIsReportIssueOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Report issue
          </button>
          <ReportIssueForm isOpen={isReportIssueOpen} onClose={() => setIsReportIssueOpen(false)} order={order} />
        </>
      );
    }

    default: {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsReportIssueOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Report issue
          </button>
          <ReportIssueForm isOpen={isReportIssueOpen} onClose={() => setIsReportIssueOpen(false)} order={order} />
        </>
      );
    }
  }
};
