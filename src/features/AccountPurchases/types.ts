import { GetMyAdminCustomerOrdersQueryResponse } from '@/types/takeshape';
import { NonNullablePath } from '@/types/util';

export type OrderStatus =
  | 'UNFULFILLED'
  | 'PARTIALLY_FULFILLED'
  | 'FULFILLED'
  | 'RESTOCKED'
  | 'PENDING_FULFILLMENT'
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'ON_HOLD'
  | 'SCHEDULED';

export type FulfillmentStatus = {
  label: string;
  color: string;
  text: string;
  date: string;
};

export type LineItem = {
  id: string;
  name: string;
  product: {
    id: string;
    url: string;
  } | null;
  image: {
    url: string;
    height?: number;
    width?: number;
    altText: string;
  } | null;
  price: {
    currencyCode: string;
    amount: number;
  };
  quantity: number;
};

export type Fulfillment = {
  status: FulfillmentStatus;
  trackingInfo: TrackingInfo[];
};

export type TrackingInfo = {
  company: string;
  number: string;
  trackingUrl: string | null;
};

export type Order = {
  id: string;
  status: OrderStatus;
  createdAt: string;
  totalPrice: {
    currencyCode: string;
    amount: number;
  };
  lineItems: LineItem[];
  fulfillments: Fulfillment[];
};

export type ResponseCustomer = NonNullablePath<GetMyAdminCustomerOrdersQueryResponse, ['customer']>;
export type ResponseOrder = NonNullablePath<ResponseCustomer, ['orders', 'edges', 0, 'node']>;
export type ResponseOrderLineItem = NonNullablePath<ResponseOrder, ['lineItems', 'edges', 0, 'node']>;
export type ResponseFulfillment = NonNullablePath<ResponseOrder, ['fulfillments', 0]>;
