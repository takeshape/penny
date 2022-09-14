import { Merge } from 'type-fest';
import { ProductCore, ProductImage, ProductPrice, ProductVariantOption, ProductVariantSelection } from 'types/product';
import { GetMySubscriptionQueryResponse, Shopify_FulfillmentDisplayStatus } from 'types/takeshape';

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
  phone?: string;
  company?: string;
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
  variantOptions?: ProductVariantOption[];
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

export type SubscriptionOrderFulfillment = {
  deliveredAt: string;
  estimatedDeliveryAt: string;
  inTransitAt: string;
  displayStatus: Shopify_FulfillmentDisplayStatus;
  // TODO Add tracking info
};

export type SubscriptionOrder = {
  id: string;
  chargeId: string;
  chargeScheduledAt?: string;
  chargeProcessedAt?: string;
  fulfillmentDeliveredAt?: string;
  fulfillmentInTransitAt?: string;
  fulfillmentScheduledAt?: string;
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
  cancelledAt: string;
  nextChargeScheduledAt: string;
  unitPrice: SubscriptionPrice;
  price: SubscriptionPrice;
  interval: SubscriptionInterval;
  intervalCount: number;
  intervalOptions: string[];
  address: SubscriptionAddress;
  paymentMethod?: SubscriptionPaymentMethod;
  product: SubscriptionProduct;
  productVariant: SubscriptionProductVariant;
  quantity: number;
  orders: SubscriptionOrder[];
};

export type ActiveSubscription = Subscription & { status: 'ACTIVE' };
export type EndedSubscription = Subscription & { status: 'CANCELLED' | 'EXPIRED' };

export type RefetchSubscriptions = () => Promise<any>;
export type SubscriptionResponse = GetMySubscriptionQueryResponse['subscription'];
export type AnySubscription = ActiveSubscription | EndedSubscription;
