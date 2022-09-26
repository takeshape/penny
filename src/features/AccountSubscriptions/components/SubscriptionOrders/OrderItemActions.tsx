import { isFuture } from 'date-fns';
import { useState } from 'react';
import { AnySubscription, RefetchSubscriptions, SubscriptionOrder } from '../../types';
import { DeliveryDetails } from '../Actions/DeliveryDetails';
import { ReportIssueForm } from '../Actions/ReportIssueForm';
import { SkipForm } from '../Actions/SkipForm';
import { UnskipForm } from '../Actions/UnskipForm';

interface OrderItemActionsProps {
  subscription: AnySubscription;
  order: SubscriptionOrder;
  refetchSubscriptions: RefetchSubscriptions;
}

export const OrderItemActions = ({ subscription, order, refetchSubscriptions }: OrderItemActionsProps) => {
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [isTrackingInfoOpen, setIsTrackingInfoOpen] = useState(false);
  const [isUnskipOpen, setIsUnskipOpen] = useState(false);
  const [isSkipOpen, setIsSkipOpen] = useState(false);

  switch (order.status) {
    case 'CHARGE_SKIPPED': {
      return isFuture(new Date(order.chargeScheduledAt)) ? (
        <>
          <button
            id="unskip"
            type="button"
            onClick={() => setIsUnskipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Unskip order
          </button>
          <UnskipForm
            isOpen={isUnskipOpen}
            onClose={() => setIsUnskipOpen(false)}
            subscription={subscription}
            order={order}
            refetchSubscriptions={refetchSubscriptions}
          />
        </>
      ) : null;
    }

    case 'CHARGE_QUEUED': {
      return (
        <>
          <button
            id="skip"
            type="button"
            onClick={() => setIsSkipOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Skip order
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

    case 'FULFILLMENT_ATTEMPTED_DELIVERY':
    case 'FULFILLMENT_DELIVERED':
    case 'FULFILLMENT_FAILURE':
    case 'FULFILLMENT_CANCELED':
    case 'FULFILLMENT_FULFILLED':
    case 'FULFILLMENT_IN_TRANSIT':
    case 'FULFILLMENT_NOT_DELIVERED':
    case 'FULFILLMENT_OUT_FOR_DELIVERY': {
      return (
        <>
          <button
            id="skip"
            type="button"
            onClick={() => setIsTrackingInfoOpen(true)}
            className="w-full flex items-center justify-center py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium bg-body-200 text-body-900 hover:bg-body-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 sm:w-full sm:flex-grow-0"
          >
            Delivery details
          </button>
          <DeliveryDetails
            isOpen={isTrackingInfoOpen}
            onClose={() => setIsTrackingInfoOpen(false)}
            order={order}
            onReportIssue={() => {
              setIsTrackingInfoOpen(false);
              setIsReportIssueOpen(true);
            }}
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
