import { format } from 'date-fns';

enum Shopify_FulfillmentDisplayStatus {
  AttemptedDelivery = 'ATTEMPTED_DELIVERY',
  Canceled = 'CANCELED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  Failure = 'FAILURE',
  Fulfilled = 'FULFILLED',
  InTransit = 'IN_TRANSIT',
  LabelPrinted = 'LABEL_PRINTED',
  LabelPurchased = 'LABEL_PURCHASED',
  LabelVoided = 'LABEL_VOIDED',
  MarkedAsFulfilled = 'MARKED_AS_FULFILLED',
  NotDelivered = 'NOT_DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  ReadyForPickup = 'READY_FOR_PICKUP',
  PickedUp = 'PICKED_UP',
  Submitted = 'SUBMITTED'
}
export interface PurchaseItemOrderStatusProps {
  status: Shopify_FulfillmentDisplayStatus;
  deliveredAt: string;
  estimatedDeliveryAt: string;
  updatedAt: string;
  trackingNumber?: string;
  trackingCompany?: string;
}

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
        text: 'Estimated delivery on',
        color: 'green',
        date: estimatedDeliveryAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Delivered:
    case Shopify_FulfillmentDisplayStatus.PickedUp:
      return {
        text: 'Delivered at',
        color: 'purple',
        date: deliveredAt ?? updatedAt
      };
    case Shopify_FulfillmentDisplayStatus.Canceled:
    case Shopify_FulfillmentDisplayStatus.Failure:
    case Shopify_FulfillmentDisplayStatus.NotDelivered:
      return {
        text: 'Errored at',
        color: 'red',
        date: updatedAt
      };
  }
}

export const PurchaseItemOrderStatus = ({
  status,
  deliveredAt,
  estimatedDeliveryAt,
  updatedAt,
  trackingNumber,
  trackingCompany
}: PurchaseItemOrderStatusProps) => {
  const { color, text, date } = getStatusTextAndColor(status, deliveredAt, estimatedDeliveryAt, updatedAt);

  return (
    <>
      <div>
        {text} {format(new Date(date), 'PP')}
      </div>
      {trackingNumber && (
        <div>
          {trackingCompany} #{trackingNumber}
        </div>
      )}
    </>
  );
};

export default PurchaseItemOrderStatus;
