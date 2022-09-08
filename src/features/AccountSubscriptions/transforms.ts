import { getIsExpiringSoon } from 'components/Payments/utils';
import { GetMyAddressPaymentMethodsQueryResponse, GetMyPaymentMethodsQueryResponse } from 'types/takeshape';
import { capitalize } from 'utils/text';

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
