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

export type SubscriptionSelectedVariant = GetMySubscriptionQueryResponse['subscription']['shopifyProductVariant'];

export type SubscriptionProductVariants = SubscriptionSelectedVariant['product']['variants']['nodes'];

export type RechargeCharge = GetMySubscriptionQueryResponse['subscription']['charges'][0];

export type RefetchSubscriptions = () => Promise<any>;

export type SubscriptionResponse = GetMySubscriptionQueryResponse['subscription'];

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
  phone: string;
};

export type SubscriptionInterval = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

export type NewSubscription = Omit<
  SubscriptionResponse,
  | 'id'
  | 'customer_id'
  | 'status'
  | 'created_at'
  | 'updated_at'
  | 'address'
  | 'address_id'
  | 'price'
  | 'presentment_currency'
  | 'order_interval_unit'
  | 'order_interval_frequency'
  | 'quantity'
  | 'cancelled_at'
> & {
  id: string;
  customerId: string;
  status: SubscriptionStatus;
  createdAt: string;
  updatedAt: string;
  cancelledAt: string;
  price: SubscriptionPrice;
  interval: SubscriptionInterval;
  intervalCount: number;
  quantity: number;
  address: SubscriptionAddress;
  paymentMethod?: SubscriptionPaymentMethod;

  // shopify_product_id?: string | null;
  // variant_title?: string | null;
  // shopify_variant_id?: string | null;
  // next_charge_scheduled_at?: string | null;
  // shopifyProductVariant?: {
  //   __typename?: 'Shopify_ProductVariant';
  //   id: string;
  //   title: string;
  //   price: any;
  //   selectedOptions: Array<{ __typename?: 'Shopify_SelectedOption'; name: string; value: string }>;
  //   product: {
  //     __typename?: 'Shopify_Product';
  //     id: string;
  //     handle: string;
  //     title: string;
  //     description: string;
  //     descriptionHtml: any;
  //     featuredImage?: {
  //       __typename?: 'Shopify_Image';
  //       id?: string | null;
  //       url: any;
  //       width?: number | null;
  //       height?: number | null;
  //       altText?: string | null;
  //     } | null;
  //     priceRangeV2: {
  //       __typename?: 'Shopify_ProductPriceRangeV2';
  //       maxVariantPrice: { __typename?: 'Shopify_MoneyV2'; currencyCode: Shopify_CurrencyCode; amount: any };
  //       minVariantPrice: { __typename?: 'Shopify_MoneyV2'; currencyCode: Shopify_CurrencyCode; amount: any };
  //     };
  //     variants: {
  //       __typename?: 'Shopify_ProductVariantConnection';
  //       nodes: Array<{
  //         __typename?: 'Shopify_ProductVariant';
  //         id: string;
  //         availableForSale: boolean;
  //         compareAtPrice?: any | null;
  //         price: any;
  //         inventoryPolicy: Shopify_ProductVariantInventoryPolicy;
  //         sellableOnlineQuantity: number;
  //         sku?: string | null;
  //         title: string;
  //         image?: { __typename?: 'Shopify_Image'; width?: number | null; height?: number | null; url: any } | null;
  //         selectedOptions: Array<{ __typename?: 'Shopify_SelectedOption'; name: string; value: string }>;
  //       }>;
  //     };
  //     options: Array<{
  //       __typename?: 'Shopify_ProductOption';
  //       name: string;
  //       position: number;
  //       id: string;
  //       values: Array<string>;
  //     }>;
  //   };
  // } | null;
  // charges?: Array<{
  //   __typename?: 'Recharge_Charge';
  //   id?: string | null;
  //   scheduled_at?: string | null;
  //   currency?: string | null;
  //   status?: string | null;
  //   address_id?: string | null;
  //   line_items?: Array<{
  //     __typename?: 'Recharge_ChargeLineItemsProperty';
  //     price?: string | null;
  //     quantity?: number | null;
  //     shopify_product_id?: string | null;
  //     shopify_variant_id?: string | null;
  //     subscription_id?: string | null;
  //     title?: string | null;
  //     variant_title?: string | null;
  //     images?: { __typename?: 'Recharge_ChargeLineItemsImagesProperty'; small?: string | null } | null;
  //   } | null> | null;
  //   shopifyOrder?: {
  //     __typename?: 'Shopify_Order';
  //     processedAt: any;
  //     fulfillments: Array<{
  //       __typename?: 'Shopify_Fulfillment';
  //       deliveredAt?: any | null;
  //       displayStatus?: Shopify_FulfillmentDisplayStatus | null;
  //       inTransitAt?: any | null;
  //       fulfillmentLineItems: {
  //         __typename?: 'Shopify_FulfillmentLineItemConnection';
  //         edges: Array<{
  //           __typename?: 'Shopify_FulfillmentLineItemEdge';
  //           node: {
  //             __typename?: 'Shopify_FulfillmentLineItem';
  //             lineItem: {
  //               __typename?: 'Shopify_LineItem';
  //               variant?: { __typename?: 'Shopify_ProductVariant'; id: string } | null;
  //             };
  //           };
  //         }>;
  //       };
  //     }>;
  //   } | null;
  // } | null> | null;
  // rechargeProduct?: {
  //   __typename?: 'Recharge_Product';
  //   id?: string | null;
  //   discount_amount?: number | null;
  //   subscription_defaults?: {
  //     __typename?: 'Recharge_ProductSubscriptionDefaultsProperty';
  //     order_interval_frequency_options?: Array<string | null> | null;
  //   } | null;
  // } | null;
};

export type ActiveSubscription = NewSubscription & { status: 'ACTIVE' };
export type EndedSubscription = NewSubscription & { status: 'CANCELLED' | 'EXPIRED' };

export type Subscription = ActiveSubscription | EndedSubscription;

export type SubscriptionPaymentFormItem = {
  addressId: string;
  defaultPaymentMethodId: string;
};
