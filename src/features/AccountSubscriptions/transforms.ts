import { getIsExpiringSoon } from 'components/Payments/utils';
import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryResponse,
  Recharge_PaymentMethod
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import { RawSubscription, Subscription, SubscriptionDeliveryScheduleOption } from './types';
import { getSortedOrders } from './utils';

export function getSubscription(rawSubscription: RawSubscription): Subscription {
  const { orders } = rawSubscription;
  const { lastOrder, nextOrder, upcomingOrders, pastOrders } = getSortedOrders(orders);
  return {
    ...rawSubscription,
    lastOrder,
    nextOrder,
    upcomingOrders,
    pastOrders
  };
}

export function getDeliveryScheduleOptions(): SubscriptionDeliveryScheduleOption[] {
  return [
    {
      interval: 'DAY',
      intervalCount: 30
    },
    {
      interval: 'DAY',
      intervalCount: 60
    }
  ];
}

function getPaymentMethod(paymentMethod: Recharge_PaymentMethod) {
  const { exp_month: expiryMonth, exp_year: expiryYear, last4 } = paymentMethod.payment_details;

  return {
    id: paymentMethod.id,
    instrument: {
      brand: capitalize(paymentMethod.payment_details.brand),
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
