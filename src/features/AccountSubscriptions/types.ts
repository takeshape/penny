export type ShippingAddress = {
  name: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
};

export type Product = {
  quantity: number;
  id: string;
  variant: string;
  name: string;
  description: string;
  href: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
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
  products: Product[];
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
  createdDate: string;
  createdDatetime: string;
  deliveredDate: string;
  deliveredDatetime: string;
  total: string;
  frequency: string;
  frequencyOptions: string[];
  nextChargeDate: string;
  shippingAddress: ShippingAddress;
  // This will come from Shopify https://shopify.dev/api/admin-graphql/2022-07/objects/CustomerPaymentMethod
  paymentMethod: PaymentMethod;
  products: Product[];
  orders: Order[];
};
