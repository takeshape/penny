import { getIsExpiringSoon } from 'components/Payments/utils';
import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryResponse,
  GetMySubscriptionListQueryResponse,
  GetMySubscriptionQueryResponse
} from 'types/takeshape';
import { capitalize } from 'utils/text';
import { Subscription } from './types';

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

function _getSubscription(rechargeSubscription: Subscription) {
  return rechargeSubscription;
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
