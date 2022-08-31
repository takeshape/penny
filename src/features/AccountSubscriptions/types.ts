import { PaymentMethod } from 'types/paymentMethod';
import { ProductImage, ProductVariant, ProductVariantOption, ProductVariantSelection } from 'types/product';

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
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  intervalCount: number;
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

export type Subscription = {
  id: string;
  // TODO Line this up with Shopify subscription statuses
  status: 'active' | 'ended';
  createdAt: string;
  endedAt?: string;
  price: SubscriptionPrice;
  deliverySchedule: SubscriptionDeliveryScheduleOption;
  deliveryScheduleOptions: SubscriptionDeliveryScheduleOption[];
  shippingAddress: ShippingAddress & { id: string };
  // This will come from Shopify https://shopify.dev/api/admin-graphql/2022-07/objects/CustomerPaymentMethod
  paymentMethod: PaymentMethod & { instrument: { __typename: 'Shopify_CustomerCreditCard' } };
  product: SubscriptionProduct;
  orders: SubscriptionOrder[];
  lastOrder: SubscriptionOrder;
  nextOrder: SubscriptionOrder;
  upcomingOrders: SubscriptionOrder[];
  pastOrders: SubscriptionOrder[];
};

export type ActiveSubscription = Subscription & { status: 'active' };
export type EndedSubscription = Subscription & { status: 'ended' };
