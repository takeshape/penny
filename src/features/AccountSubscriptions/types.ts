import { SetRequired } from 'type-fest';
import {
  ProductBase,
  ProductImage,
  ProductVariant,
  ProductVariantOption,
  ProductVariantSelection
} from 'types/product';

export type ShippingAddress = {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
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

export type PaymentMethod = {
  instrument: {
    brand: string;
    expiresSoon: boolean;
    expiryMonth: number;
    expiryYear: number;
    lastDigits: string;
    maskedNumber: string;
    name: string;
  };
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
  paymentMethod: PaymentMethod;
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
