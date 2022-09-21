import { getProductUrl, shopifyGidToId } from 'transforms/shopify';
import { GetMyAdminCustomerOrdersQueryResponse, Shopify_FulfillmentDisplayStatus } from 'types/takeshape';
import { Fulfillment, FulfillmentStatus, LineItem, Order } from './types';

type Shopify_Customer = GetMyAdminCustomerOrdersQueryResponse['customer'];
export type Shopify_Order = Shopify_Customer['orders']['edges'][0]['node'];
export type Shopify_LineItem = Shopify_Order['lineItems']['edges'][0]['node'];
export type Shopify_Fulfillment = Shopify_Order['fulfillments'][0];

function getFulfillmentStatus(
  status: Shopify_FulfillmentDisplayStatus,
  deliveredAt: string,
  estimatedDeliveryAt: string,
  updatedAt: string
): FulfillmentStatus {
  switch (status) {
    case 'CONFIRMED':
    case 'LABEL_PRINTED':
    case 'LABEL_PURCHASED':
    case 'LABEL_VOIDED':
    case 'SUBMITTED':
      return {
        label: 'Order Processing',
        color: 'gray',
        text: 'Processing on',
        date: updatedAt
      };
    case 'ATTEMPTED_DELIVERY':
    case 'FULFILLED':
    case 'IN_TRANSIT':
    case 'MARKED_AS_FULFILLED':
    case 'OUT_FOR_DELIVERY':
    case 'READY_FOR_PICKUP':
      return {
        label: 'Shipped',
        color: 'green',
        text: 'Estimated delivery on',
        date: estimatedDeliveryAt ?? updatedAt
      };
    case 'DELIVERED':
    case 'PICKED_UP':
      return {
        label: 'Delivered',
        color: 'accent',
        text: 'Delivered at',
        date: deliveredAt ?? updatedAt
      };
    case 'CANCELED':
    case 'FAILURE':
    case 'NOT_DELIVERED':
      return {
        label: 'Failed Delivery',
        color: 'red',
        text: 'Errored at',
        date: updatedAt
      };
  }
}

export function getTrackingUrl(carrier: string, trackingNumber = 'XXXXXXXXXXXXXXX'): string | null {
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
