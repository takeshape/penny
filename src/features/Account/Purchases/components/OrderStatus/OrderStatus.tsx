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
        text: 'Processing on',
        color: 'gray',
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
        text: 'Estimated delivery on',
        color: 'green',
        date: estimatedDeliveryAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Delivered:
    case Shopify_FulfillmentDisplayStatus.PickedUp:
      return {
        label: 'Delivered',
        text: 'Delivered at',
        color: 'purple',
        date: deliveredAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Canceled:
    case Shopify_FulfillmentDisplayStatus.Failure:
    case Shopify_FulfillmentDisplayStatus.NotDelivered:
      return {
        label: 'Failed Delivery',
        text: 'Errored at',
        color: 'red',
        date: updatedAt
      };
  }
}

export const PurchaseItemOrderStatus = (props: Shopify_Fulfillment) => {
  const { displayStatus: status, deliveredAt, estimatedDeliveryAt, updatedAt, trackingInfo } = props;
  const { label, color, text, date } = getStatusTextAndColor(status, deliveredAt, estimatedDeliveryAt, updatedAt);
  return (
    <>
      <p className={`inline-block rounded-md py-1 px-3 font-semibold text-white bg-${color ?? 'gray'}-500`}>
        {label ?? 'Unknown'}
      </p>
      <div>on {format(new Date(date), 'PP')}</div>
      {trackingInfo.map((tracking) => (
        <div key={tracking.number}>
          {tracking.company} #{tracking.number}
        </div>
      ))}
    </>
  );
};

export default PurchaseItemOrderStatus;
