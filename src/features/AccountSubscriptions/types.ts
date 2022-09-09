import { PaymentMethod } from 'types/paymentMethod';
import { ProductImage, ProductVariant, ProductVariantOption, ProductVariantSelection } from 'types/product';
import { GetMySubscriptionQueryResponse } from 'types/takeshape';

export type ShippingAddress = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  countryCode: string;
  city: string;
  province: string;
  zip: string;
  phone?: string;
};

export type SubscriptionPrice = {
  currencyCode: string;
  // in cents
  amount: number;
};

export type SubscriptionProduct = {
  // TODO Unclear how to actually handle fulfillment — need Shopify subscription scopes to work on it
  fulfillment?: {
    status: string;
    date: string;
    datetime: string;
  };
  nextFulfillment?: {
    status: string;
    date: string;
    datetime: string;
  };

  // Final props
  id: string;
  url: string;
  name: string;
  description: string;
  handle: string;
  price: SubscriptionPrice;
  quantity: number;
  featuredImage: ProductImage;
  variants?: ProductVariant[];
  variantName: string;
  variantSelections?: ProductVariantSelection[];
  variantOptions?: ProductVariantOption[];
};

// TODO Order needs the most work — need Shopify scopes
export type SubscriptionOrder = {
  id: string;
  subscriptionId: string;
  fulfillmentDate: string;
  statusAt: string;
  status: 'delivered' | 'scheduled' | 'skipped';
  email: string;
  phone: string;
  deliveredAt?: string;
  shippingAddress: ShippingAddress;
  product: SubscriptionProduct;
  isUpcoming?: boolean;
};

export type SubscriptionDeliveryScheduleOption = {
  order_interval_unit: 'day' | 'week' | 'month' | 'year';
  order_interval_frequency: number;
};

export type RawSubscription = {
  id: string;
  status: 'active' | 'ended';
  createdAt: string;
  endedAt?: string;
  price: SubscriptionPrice;
  deliverySchedule: SubscriptionDeliveryScheduleOption;
  deliveryScheduleOptions: SubscriptionDeliveryScheduleOption[];
  shippingAddress: ShippingAddress & { id: string };
  paymentMethod: PaymentMethod & { instrument: { __typename: 'Shopify_CustomerCreditCard' } };
  product: SubscriptionProduct;
  orders: SubscriptionOrder[];
};

export type SubscriptionSelectedVariant = GetMySubscriptionQueryResponse['subscription']['shopifyProductVariant'];

export type SubscriptionProductVariants = SubscriptionSelectedVariant['product']['variants']['nodes'];

export type RechargeCharge = GetMySubscriptionQueryResponse['subscription']['charges'][0];

export type RefetchSubscriptions = () => Promise<any>;

export type SubscriptionResponse = GetMySubscriptionQueryResponse['subscription'];
export type ActiveSubscription = SubscriptionResponse & { status: 'ACTIVE' };
export type EndedSubscription = SubscriptionResponse & { status: 'CANCELLED' | 'EXPIRED' };
export type Subscription = ActiveSubscription | EndedSubscription;
