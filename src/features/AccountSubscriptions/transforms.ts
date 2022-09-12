import { getIsExpiringSoon } from 'components/Payments/utils';
import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  GetMySubscriptionQueryResponse
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import {
  Subscription,
  SubscriptionAddress,
  SubscriptionInterval,
  SubscriptionPaymentMethod,
  SubscriptionPrice,
  SubscriptionResponse,
  SubscriptionStatus
} from './types';

export function getPaymentMethod(paymentMethod: GetMyPaymentMethodsQueryResponse['paymentMethods'][0]) {
  const { exp_month: expiryMonth, exp_year: expiryYear, last4 } = paymentMethod?.payment_details ?? {};

  return {
    id: paymentMethod?.id ?? '',
    instrument: {
      brand: capitalize(paymentMethod?.payment_details?.brand ?? ''),
      expiresSoon: getIsExpiringSoon({ expiryMonth, expiryYear }),
      expiryMonth,
      expiryYear,
      lastDigits: last4,
      maskedNumber: `••••${last4}`,
      name: '',
      isRevocable: false
    }
  };
}

export function getPaymentMethods(response: GetMyPaymentMethodsQueryResponse) {
  if (!response?.paymentMethods) {
    return null;
  }

  return response.paymentMethods.map(getPaymentMethod);
}

export function getAddressDefaultPaymentMethod(response: GetMyAddressPaymentMethodsQueryResponse) {
  if (!response?.paymentMethods) {
    return null;
  }

  return getPaymentMethod(response.paymentMethods[0]);
}

function _getSubscriptionStatus(status: SubscriptionResponse['status']): SubscriptionStatus {
  switch (status) {
    case 'ACTIVE':
      return 'ACTIVE';
    case 'CANCELLED':
      return 'CANCELLED';
    case 'EXPIRED':
    default:
      return 'EXPIRED';
  }
}

function _getSubscriptionPaymentMethod(
  paymentMethod: SubscriptionResponse['address']['include']['payment_methods'][0]
): SubscriptionPaymentMethod {
  const { id, payment_details } = paymentMethod ?? {};

  if (!id) {
    return null;
  }

  const { brand, exp_month: expiryMonth, exp_year: expiryYear, last4 } = payment_details ?? {};

  return {
    id: paymentMethod.id,
    instrument: {
      brand: capitalize(brand ?? ''),
      expiresSoon: getIsExpiringSoon({ expiryMonth, expiryYear }),
      expiryMonth,
      expiryYear,
      lastDigits: last4,
      maskedNumber: `••••${last4}`,
      name: '',
      isRevocable: false
    }
  };
}

function _getSubscriptionAddress(address: SubscriptionResponse['address']): SubscriptionAddress {
  return {
    id: address.id,
    firstName: address.first_name,
    lastName: address.last_name,
    address1: address.address1,
    address2: address.address2,
    city: address.city,
    province: address.province,
    zip: address.zip,
    country: address.country,
    phone: address.phone
  };
}

function _getSubscriptionPrice(
  price: SubscriptionResponse['price'],
  presentmentCurrency: SubscriptionResponse['presentment_currency']
): SubscriptionPrice {
  const priceAsNumber = typeof price === 'number' ? price : parseFloat(price);

  return {
    currencyCode: presentmentCurrency,
    amount: priceAsNumber * 100
  };
}

function _getSubscriptionInterval(
  orderIntervalUnit: SubscriptionResponse['order_interval_unit']
): SubscriptionInterval {
  switch (orderIntervalUnit) {
    case 'week':
      return 'WEEK';
    case 'month':
      return 'MONTH';
    case 'day':
    default:
      return 'DAY';
  }
}

function _getSubscription(rechargeSubscription: SubscriptionResponse): Subscription {
  const {
    id,
    customer_id,
    status,
    created_at,
    updated_at,
    address,
    price,
    presentment_currency,
    order_interval_frequency,
    order_interval_unit,
    shopify_product_id,
    quantity,
    variant_title,
    shopify_variant_id,
    next_charge_scheduled_at,
    cancelled_at,
    shopifyProductVariant,
    rechargeProduct,
    charges
  } = rechargeSubscription;
  const paymentMethod = address?.include?.payment_methods?.[0];

  return {
    id: id,
    customerId: customer_id,
    status: _getSubscriptionStatus(status),
    createdAt: created_at,
    cancelledAt: cancelled_at,
    updatedAt: updated_at,
    address: _getSubscriptionAddress(address),
    paymentMethod: _getSubscriptionPaymentMethod(paymentMethod),
    price: _getSubscriptionPrice(price, presentment_currency),
    quantity,
    interval: _getSubscriptionInterval(order_interval_unit),
    intervalCount: Number(order_interval_frequency),

    shopify_product_id,
    variant_title,
    shopify_variant_id,
    next_charge_scheduled_at,
    shopifyProductVariant,
    rechargeProduct,
    charges
  };
}

export function getSubscription(response: GetMySubscriptionQueryResponse): Subscription {
  if (!response?.subscription) {
    return null;
  }

  return _getSubscription(response.subscription);
}

export function getSubscriptionList(response: GetMySubscriptionListQueryResponse): Subscription[] {
  if (!response?.subscriptions) {
    return null;
  }

  return response.subscriptions.map(_getSubscription);
}
