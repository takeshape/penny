import { Merge } from 'type-fest';
import { ProductCore, ProductImage, ProductPrice, ProductVariantOption, ProductVariantSelection } from 'types/product';
import { GetMySubscriptionQueryResponse, Shopify_FulfillmentDisplayStatus } from 'types/takeshape';
import { NonNullablePath } from 'types/util';

export type SubscriptionAddress = {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  zip: string;
  country: string;
  phone: string | null;
  company: string | null;
};

export type SubscriptionShippingAddress = Omit<SubscriptionAddress, 'id'>;

export type SubscriptionPrice = Merge<
  ProductPrice,
  {
    currencyCode: string;
  }
>;

export type SubscriptionProductVariant = {
  id: string;
  name: string;
  description: string;
  price: SubscriptionPrice;
  available: boolean;
  image: ProductImage;
  quantityAvailable: number;
  currentlyNotInStock: boolean;
  sku: string;
  options: ProductVariantSelection[];
};

export type SubscriptionProduct = ProductCore & {
  descriptionHtml: string;
  variants: SubscriptionProductVariant[];
  variantOptions: ProductVariantOption[];
};

export enum SubscriptionOrderStatusEnum {
  CHARGE_UNKNOWN,
  CHARGE_QUEUED,
  CHARGE_SKIPPED,
  CHARGE_CANCELLED,
  CHARGE_REFUNDED,
  CHARGE_PENDING_MANUAL_PAYMENT,
  CHARGE_PENDING,
  CHARGE_ERROR,
  CHARGE_SUCCESS,
  FULFILLMENT_UNKNOWN,
  FULFILLMENT_ATTEMPTED_DELIVERY,
  FULFILLMENT_DELIVERED,
  FULFILLMENT_FAILURE,
  FULFILLMENT_CANCELED,
  FULFILLMENT_FULFILLED,
  FULFILLMENT_IN_TRANSIT,
  FULFILLMENT_NOT_DELIVERED,
  FULFILLMENT_OUT_FOR_DELIVERY
}

export type SubscriptionOrderStatus = keyof typeof SubscriptionOrderStatusEnum;

export type SubscriptionOrderLineItem = {
  price: SubscriptionPrice;
  quantity: number;
  product: {
    id: string;
    name: string;
    image: ProductImage;
  };
  productVariant: {
    id: string;
    name: string;
  };
};

export type SubscriptionTrackingInfo = {
  url: string;
  number: string;
  company: string;
};

export type SubscriptionOrderFulfillment = {
  createdAt: string;
  updatedAt: string;
  displayStatus: Shopify_FulfillmentDisplayStatus | null;
  deliveredAt: string | null;
  estimatedDeliveryAt: string | null;
  inTransitAt: string | null;
  trackingInfo: SubscriptionTrackingInfo | null;
};

export type SubscriptionOrder = {
  id: string;
  chargeId: string;
  chargeScheduledAt: string;
  chargeProcessedAt: string | null;
  chargeUpdatedAt: string;
  chargeCreatedAt: string;
  fulfillmentDeliveredAt: string | null;
  fulfillmentInTransitAt: string | null;
  fulfillmentScheduledAt: string | null;
  fulfillmentUpdatedAt: string | null;
  fulfillmentCreatedAt: string | null;
  status: SubscriptionOrderStatus;
  statusAt: string;
  shippingAddress: SubscriptionShippingAddress;
  lineItems: SubscriptionOrderLineItem[];
  fulfillments: SubscriptionOrderFulfillment[];
};

export type SubscriptionDeliveryScheduleOption = {
  order_interval_unit: 'day' | 'week' | 'month' | 'year';
  order_interval_frequency: number;
};

export type SubscriptionStatus = 'ACTIVE' | 'CANCELLED' | 'EXPIRED';
export type SubscriptionPaymentMethod = {
  id: string;
  instrument: {
    brand: string;
    expiryMonth: number;
    expiryYear: number;
    lastDigits: string;
    maskedNumber: string;
    name: string;
    expiresSoon: boolean;
    isRevocable: boolean;
  };
};

export type SubscriptionInterval = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

export type Subscription = {
  id: string;
  customerId: string;
  status: SubscriptionStatus;
  createdAt: string;
  updatedAt: string;
  cancelledAt: string | null;
  nextChargeScheduledAt: string | null;
  unitPrice: SubscriptionPrice;
  price: SubscriptionPrice;
  interval: SubscriptionInterval;
  intervalCount: number;
  intervalOptions: string[];
  address: SubscriptionAddress;
  paymentMethod: SubscriptionPaymentMethod | null;
  product: SubscriptionProduct;
  productVariant: SubscriptionProductVariant;
  quantity: number;
  orders: SubscriptionOrder[];
};

export type ActiveSubscription = Subscription & { status: 'ACTIVE' };
export type EndedSubscription = Subscription & { status: 'CANCELLED' | 'EXPIRED' };

export type RefetchSubscriptions = () => Promise<any>;
export type AnySubscription = ActiveSubscription | EndedSubscription;

export type ResponseSubscription = NonNullablePath<GetMySubscriptionQueryResponse, ['subscription']>;
export type ResponseCharge = NonNullablePath<ResponseSubscription, ['charges', 0]>;
export type ResponseLineItem = NonNullablePath<ResponseCharge, ['line_items', 0]>;
export type ResponseFulfillment = NonNullablePath<ResponseCharge, ['shopifyOrder', 'fulfillments', 0]>;
export type ResponseRechargeProduct = NonNullablePath<ResponseSubscription, ['rechargeProduct']>;
export type ResponseProductVariant = NonNullablePath<ResponseSubscription, ['shopifyProductVariant']>;
export type ResponseProduct = NonNullablePath<ResponseProductVariant, ['product']>;
export type ResponseProductProductVariant = NonNullablePath<ResponseProduct, ['variant', 'nodes', 0]>;
export type ResponseAddress = NonNullablePath<ResponseSubscription, ['address']>;
export type ResponsePaymentMethod = NonNullablePath<ResponseAddress, ['include', 'payment_methods', 0]>;
