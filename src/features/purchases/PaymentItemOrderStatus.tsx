import { Badge, Flex } from 'theme-ui';

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
export interface PaymentItemOrderStatusProps {
  status: Shopify_FulfillmentDisplayStatus;
  trackingNumber?: string | null;
}

function getStatusTextAndColor(status: Shopify_FulfillmentDisplayStatus) {
  switch (status) {
    case Shopify_FulfillmentDisplayStatus.Confirmed:
    case Shopify_FulfillmentDisplayStatus.LabelPrinted:
    case Shopify_FulfillmentDisplayStatus.LabelPurchased:
    case Shopify_FulfillmentDisplayStatus.LabelVoided:
    case Shopify_FulfillmentDisplayStatus.Submitted:
      return {
        text: 'Processing',
        color: 'gray'
      };
    case Shopify_FulfillmentDisplayStatus.AttemptedDelivery:
    case Shopify_FulfillmentDisplayStatus.Fulfilled:
    case Shopify_FulfillmentDisplayStatus.InTransit:
    case Shopify_FulfillmentDisplayStatus.MarkedAsFulfilled:
    case Shopify_FulfillmentDisplayStatus.OutForDelivery:
    case Shopify_FulfillmentDisplayStatus.ReadyForPickup:
      return {
        text: 'Shipped',
        color: 'green'
      };
    case Shopify_FulfillmentDisplayStatus.Delivered:
    case Shopify_FulfillmentDisplayStatus.PickedUp:
      return {
        text: 'Delivered',
        color: 'purple'
      };
    case Shopify_FulfillmentDisplayStatus.Canceled:
    case Shopify_FulfillmentDisplayStatus.Failure:
    case Shopify_FulfillmentDisplayStatus.NotDelivered:
      return {
        text: 'Error',
        color: 'red'
      };
  }
}

export const PaymentItemOrderStatus = ({ status, trackingNumber }: PaymentItemOrderStatusProps) => {
  const { color, text } = getStatusTextAndColor(status);

  return (
    <Flex sx={{ gap: '.5rem' }}>
      <Badge py={1} px={2} backgroundColor={color}>
        {text}
      </Badge>
      {trackingNumber && (
        <Badge py={1} px={2} backgroundColor={color}>
          {trackingNumber}
        </Badge>
      )}
    </Flex>
  );
};

export default PaymentItemOrderStatus;
