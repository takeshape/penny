import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { SubscriptionOrder } from '../../types';
import { getOrderStatusDisplay, getOrderTrackingInfo } from '../../utils';
import { DeliveryDetails } from '../Actions/DeliveryDetails';
import { ReportIssueForm } from '../Actions/ReportIssueForm';

export interface ShipmentStatusProps {
  heading?: string;
  order: Pick<
    SubscriptionOrder,
    'id' | 'status' | 'statusAt' | 'chargeScheduledAt' | 'fulfillments' | 'shippingAddress'
  >;
}

export const ShipmentStatus = ({ heading, order }: ShipmentStatusProps) => {
  const { status } = order;
  const displayStatus = useMemo(() => getOrderStatusDisplay(status), [status]);
  const trackingInfo = useMemo(() => getOrderTrackingInfo(order), [order]);

  let prep = 'on';
  let statusAt = order.statusAt;

  if (status === 'CHARGE_QUEUED') {
    prep = 'for';
    statusAt = order.chargeScheduledAt;
  }

  const [isDeliveryDetailsOpen, setIsDeliveryDetailsOpen] = useState(false);
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);

  return (
    <div>
      {heading && <h4 className="text-sm leading-6 font-medium text-body-600 mb-2">{heading}</h4>}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow flex items-center">
          <displayStatus.Icon className={`${displayStatus.iconClasses} w-5 h-5`} aria-hidden="true" />
          <p className="ml-2 text-sm text-gray-900">
            {displayStatus.text} {prep} <time dateTime={statusAt}>{format(new Date(statusAt), 'PP')}</time>
          </p>
        </div>
        {trackingInfo && (
          <div>
            <button
              className="text-sm font-medium text-accent-600 hover:text-accent-500"
              onClick={() => setIsDeliveryDetailsOpen(true)}
            >
              Show delivery details
            </button>
            <DeliveryDetails
              isOpen={isDeliveryDetailsOpen}
              onClose={() => setIsDeliveryDetailsOpen(false)}
              order={order}
              onReportIssue={() => {
                setIsDeliveryDetailsOpen(false);
                setIsReportIssueOpen(true);
              }}
            />
            <ReportIssueForm isOpen={isReportIssueOpen} onClose={() => setIsReportIssueOpen(false)} order={order} />
          </div>
        )}
      </div>
    </div>
  );
};
