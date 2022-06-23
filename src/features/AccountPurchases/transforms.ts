import { getProductUrl, shopifyGidToId } from 'transforms/shopify';
import {
  Shopify_Customer,
  Shopify_Fulfillment,
  Shopify_FulfillmentDisplayStatus,
  Shopify_LineItem,
  Shopify_Order
} from 'types/takeshape';
import { Fulfillment, FulfillmentStatus, LineItem, Order } from './types';

function getFulfillmentStatus(
  status: Shopify_FulfillmentDisplayStatus,
  deliveredAt: string,
  estimatedDeliveryAt: string,
  updatedAt: string
): FulfillmentStatus {
  switch (status) {
    case Shopify_FulfillmentDisplayStatus.Confirmed:
    case Shopify_FulfillmentDisplayStatus.LabelPrinted:
    case Shopify_FulfillmentDisplayStatus.LabelPurchased:
    case Shopify_FulfillmentDisplayStatus.LabelVoided:
    case Shopify_FulfillmentDisplayStatus.Submitted:
      return {
        label: 'Order Processing',
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

export function getFulfillment(fulfillment: Shopify_Fulfillment): Fulfillment {
  return {
    status: getFulfillmentStatus(
      fulfillment.displayStatus,
      fulfillment.deliveredAt,
      fulfillment.estimatedDeliveryAt,
      fulfillment.updatedAt
    ),
    trackingInfo: fulfillment.trackingInfo.map((tracking) => ({
      company: tracking.company,
      number: tracking.number,
      trackingUrl: getTrackingUrl(tracking.company, tracking.number)
    }))
  };
}

export function getLineItem(lineItem: Shopify_LineItem): LineItem {
  return {
    id: lineItem.id,
    name: lineItem.name,
    product: {
      url: getProductUrl(lineItem.product.handle),
      id: lineItem.product.id
    },
    image: lineItem.image,
    price: lineItem.originalTotalSet.shopMoney,
    quantity: lineItem.quantity
  };
}

export function getOrder(order?: Shopify_Order): Order {
  return {
    id: shopifyGidToId(order.id),
    status: order.displayFulfillmentStatus,
    createdAt: order.createdAt,
    totalPrice: order.totalPriceSet.shopMoney,
    lineItems: order.lineItems.edges.map((edge) => getLineItem(edge.node)),
    fulfillments: order.fulfillments.map(getFulfillment)
  };
}

export function getLineItems(order?: Shopify_Order): LineItem[] {
  return order?.lineItems?.edges.map((edge) => getLineItem(edge.node));
}

export function getOrders(customer?: Shopify_Customer): Order[] {
  return customer?.orders.edges.map(({ node }) => getOrder(node));
}
