import { SetRequired } from 'type-fest';
import {
  ProductBase,
  ProductImage,
  ProductVariant,
  ProductVariantOption,
  ProductVariantSelection
} from 'types/product';
import { Shopify_CustomerPaymentMethod } from 'types/takeshape';

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

export type SubscriptionProduct = {
  description: string;
  href: string;
  price: string;
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
  name: string;
  handle: string;
  quantity: number;
  featuredImage: ProductImage;
  variants?: ProductVariant[];
  variantName: string;
  variantSelections?: ProductVariantSelection[];
  variantOptions?: ProductVariantOption[];
};

export type Order = {
  id: string;
  subscriptionId: string;
  fulfillmentDate: string;
  statusAt: string;
  status: 'delivered' | 'upcoming' | 'skipped';
  email: string;
  phone: string;
  deliveredAt?: string;
  shippingAddress: ShippingAddress;
  product: SubscriptionProduct;
};

export type Subscription = {
  status: 'active' | 'canceled';
  number: string;
  href: string;
  createdAt: string;
  deliveredDate: string;
  deliveredDatetime: string;
  total: string;
  deliverySchedule: DeliveryScheduleOption;
  deliveryScheduleOptions: DeliveryScheduleOptions;
  nextChargeDate: string;
  shippingAddress: ShippingAddress;
  // This will come from Shopify https://shopify.dev/api/admin-graphql/2022-07/objects/CustomerPaymentMethod
  paymentMethod: Shopify_CustomerPaymentMethod & { instrument: { __typename: 'Shopify_CustomerCreditCard' } };
  product: SubscriptionProduct;
  orders: Order[];
  nextOrder: Order;
};

export type SubscriptionProductForUpdate = SetRequired<ProductBase, 'variants'>;

export type DeliveryScheduleOption = {
  interval: 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
  intervalCount: number;
};

export type DeliveryScheduleOptions = DeliveryScheduleOption[];
