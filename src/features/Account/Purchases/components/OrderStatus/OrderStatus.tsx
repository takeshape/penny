import { TruckIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { Shopify_Fulfillment, Shopify_FulfillmentDisplayStatus } from 'types/takeshape';

function getStatusTextAndColor(
  status: Shopify_FulfillmentDisplayStatus,
  deliveredAt: string,
  estimatedDeliveryAt: string,
  updatedAt: string
) {
  switch (status) {
    case Shopify_FulfillmentDisplayStatus.Confirmed:
    case Shopify_FulfillmentDisplayStatus.LabelPrinted:
    case Shopify_FulfillmentDisplayStatus.LabelPurchased:
    case Shopify_FulfillmentDisplayStatus.LabelVoided:
    case Shopify_FulfillmentDisplayStatus.Submitted:
      return {
        label: 'Processing',
        color: 'gray',
        text: 'Processing on',
        date: updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.AttemptedDelivery:
    case Shopify_FulfillmentDisplayStatus.Fulfilled:
    case Shopify_FulfillmentDisplayStatus.InTransit:
    case Shopify_FulfillmentDisplayStatus.MarkedAsFulfilled:
    case Shopify_FulfillmentDisplayStatus.OutForDelivery:
    case Shopify_FulfillmentDisplayStatus.ReadyForPickup:
      return {
        label: 'Shipped',
        color: 'green',
        text: 'Estimated delivery on',
        date: estimatedDeliveryAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Delivered:
    case Shopify_FulfillmentDisplayStatus.PickedUp:
      return {
        label: 'Delivered',
        color: 'indigo',
        text: 'Delivered at',
        date: deliveredAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Canceled:
    case Shopify_FulfillmentDisplayStatus.Failure:
    case Shopify_FulfillmentDisplayStatus.NotDelivered:
      return {
        label: 'Failed Delivery',
        color: 'red',
        text: 'Errored at',
        date: updatedAt
      };
  }
}

export function getTrackingUrl(carrier, trackingNumber = 'XXXXXXXXXXXXXXX'): string | null {
  switch (carrier) {
    case 'USPS':
      return `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;

    case 'UPS':
      return `https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=${trackingNumber}`;

    case 'FedEx':
      return `https://www.fedex.com/Tracking?action=track&tracknumbers=${trackingNumber}`;

    default:
      return null;
  }
}

const OrderStatusChip = ({ color, label }: { color?: string; label?: string }) => (
  <p
    className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 bg-${
      color ?? 'gray'
    }-100 text-${color ?? 'gray'}-800`}
  >
    {label ?? 'Unknown Status'}
  </p>
);

export const PurchaseItemOrderStatus = (props: Shopify_Fulfillment & { unfulfilled?: boolean }) => {
  if (props.unfulfilled) {
    return (
      <div>
        <OrderStatusChip label="Processing" color="gray" />
      </div>
    );
  }
  const { label, color, text, date } = getStatusTextAndColor(
    props.displayStatus,
    props.deliveredAt,
    props.estimatedDeliveryAt,
    props.updatedAt
  );
  return (
    <div className="mt-2">
      <div className="flex gap-2 items-center">
        <OrderStatusChip label={label} color={color} />
        <p className="text-sm text-gray-500">
          {text} {format(new Date(date), 'PP')}
        </p>
      </div>
      {props.trackingInfo.map((tracking, index) => (
        <div key={tracking.number} className="flex gap-2 items-center m-2">
          <a
            href={getTrackingUrl(tracking.company, tracking.number)}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-indigo-700 decoration-indigo-500 underline"
            rel="noreferrer"
          >
            <TruckIcon height={16} width={16} className="inline-block" /> Track Shipment{' '}
            {props.trackingInfo.length > 1 && `#${index + 1}`}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PurchaseItemOrderStatus;
