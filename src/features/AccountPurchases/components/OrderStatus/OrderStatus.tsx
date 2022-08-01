import { TruckIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { Fulfillment } from '../../types';

const OrderStatusChip = ({ color, label }: { color?: string; label?: string }) => (
  <p
    className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-${
      color ?? 'gray'
    }-50 text-${color ?? 'gray'}-800`}
  >
    {label ?? 'Unknown Status'}
  </p>
);

export const PurchaseItemOrderStatus = (props: Fulfillment & { unfulfilled?: boolean }) => {
  if (props.unfulfilled) {
    return (
      <div className="flex flex-wrap gap-2 items-center">
        <header className="w-full m-2 mb-0 pb-2 border-b text-sm text-gray-500">Order Status</header>
        <OrderStatusChip label="Processing" color="gray" />
      </div>
    );
  }
  const { label, color, text, date } = props.status;
  return (
    <div className="flex flex-wrap gap-x-4 items-center">
      <header className="w-full m-2 pb-2 border-b text-sm text-gray-500">Order Status</header>
      <OrderStatusChip label={label} color={color} />
      <p className="text-sm text-gray-500 flex-1">
        {text} {format(new Date(date), 'PP')}
      </p>
      {props.trackingInfo.map((tracking, index) => {
        if (!tracking.trackingUrl) return null;
        return (
          <div key={tracking.number} className="flex gap-2 items-center m-2">
            <a
              href={tracking.trackingUrl}
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-accent-700 decoration-accent-500 underline"
              rel="noreferrer"
            >
              <TruckIcon height={16} width={16} className="inline-block" /> Track Shipment{' '}
              {props.trackingInfo.length > 1 && `#${index + 1}`}
            </a>
          </div>
        );
      })}
    </div>
  );
};
