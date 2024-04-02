import { createImageGetter, getProductUrl, shopifyGidToId } from '@/transforms/shopify';
import { GetMyAdminCustomerOrdersQueryResponse } from '@/types/takeshape';
import {
  Fulfillment,
  FulfillmentStatus,
  LineItem,
  Order,
  ResponseFulfillment,
  ResponseOrder,
  ResponseOrderLineItem
} from './types';

function getFulfillmentStatus(
  status: ResponseFulfillment['displayStatus'],
  deliveredAt: string | null,
  estimatedDeliveryAt: string | null,
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
    default:
      return {
        label: 'Unknown delivery status',
        color: 'red',
        text: 'Unknown at',
        date: updatedAt
      };
  }
}

export function getTrackingUrl(carrier: string | null, trackingNumber = 'XXXXXXXXXXXXXXX'): string | null {
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

export function getFulfillment(fulfillment: ResponseFulfillment): Fulfillment {
  return {
    status: getFulfillmentStatus(
      fulfillment.displayStatus,
      fulfillment.deliveredAt,
      fulfillment.estimatedDeliveryAt,
      fulfillment.updatedAt
    ),
    trackingInfo: fulfillment.trackingInfo.map((tracking) => ({
      company: tracking.company ?? '',
      number: tracking.number ?? '',
      trackingUrl: tracking.url
    }))
  };
}

export function getLineItem(lineItem: ResponseOrderLineItem): LineItem {
  const getImage = createImageGetter('');

  return {
    id: lineItem.id,
    name: lineItem.name,
    product: lineItem.product && {
      url: getProductUrl(lineItem.product.handle),
      id: lineItem.product.id
    },
    image: getImage(lineItem.image),
    price: lineItem.originalTotalSet.shopMoney,
    quantity: lineItem.quantity
  };
}

export function getOrder(order: ResponseOrder): Order {
  return {
    id: shopifyGidToId(order.id),
    status: order.displayFulfillmentStatus,
    createdAt: order.createdAt,
    totalPrice: order.totalPriceSet.shopMoney,
    lineItems: order.lineItems.edges.map(({ node }) => getLineItem(node)),
    fulfillments: order.fulfillments.map(getFulfillment)
  };
}

export function getLineItems(order: ResponseOrder): LineItem[] {
  return order.lineItems.edges.map(({ node }) => getLineItem(node));
}

export function getOrders(response?: GetMyAdminCustomerOrdersQueryResponse | null): Order[] | null {
  if (!response?.customer?.orders) {
    return null;
  }

  return response.customer.orders.edges.map(({ node }) => getOrder(node));
}
