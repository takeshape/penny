import { useState } from 'react';
import { SubscriptionOrder } from '../../types';
import { ReportIssueForm } from '../Actions/ReportIssueForm';
import { SkipForm } from '../Actions/SkipForm';
import { UnskipForm } from '../Actions/UnskipForm';

interface OrderItemActionsProps {
  order: SubscriptionOrder;
}

export const OrderItemActions = ({ order }: OrderItemActionsProps) => {
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isUnskipOpen, setIsUnskipOpen] = useState(false);
  const [isSkipOpen, setIsSkipOpen] = useState(false);

  switch (order.status) {
    case 'delivered': {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsReportIssueOpen(true)}
            className="w-full flex items-center justify-center  py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Report an issue
          </button>
          <ReportIssueForm isOpen={isReportIssueOpen} onClose={() => setIsReportIssueOpen(false)} order={order} />
        </>
      );
    }

    case 'skipped': {
      return order.isUpcoming ? (
        <>
          <button
            type="button"
            onClick={() => setIsUnskipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Unskip
          </button>
          <UnskipForm isOpen={isUnskipOpen} onClose={() => setIsUnskipOpen(false)} order={order} />
        </>
      ) : null;
    }

    case 'scheduled': {
      return (
        <>
          <button
            type="button"
            onClick={() => setIsSkipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
          >
            Skip delivery
          </button>
          <SkipForm isOpen={isSkipOpen} onClose={() => setIsSkipOpen(false)} order={order} />
        </>
      );
    }

    default: {
      return null;
    }
  }
};
