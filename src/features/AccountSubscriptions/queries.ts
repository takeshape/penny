import { gql } from '@apollo/client';

export const GetMyPaymentMethodsQuery = gql`
  query GetMyPaymentMethodsQuery {
    paymentMethods: Recharge_getMyPaymentMethods {
      id
      payment_details {
        brand
        exp_month
        exp_year
        last4
      }
    }
  }
`;

export const GetAddressPaymentMethodsQuery = gql`
  query GetAddressPaymentMethodsQuery($addressId: String!) {
    paymentMethods: Recharge_getAddressPaymentMethods(addressId: $addressId) {
      id
      payment_details {
        brand
        exp_month
        exp_year
        last4
      }
    }
  }
`;

export const SendUpdatePaymentEmailMutation = gql`
  mutation SendUpdatePaymentEmailMutation($paymentMethodId: String!) {
    sendUpdatePaymentEmail: Recharge_sendUpdatePaymentEmail(paymentMethodId: $paymentMethodId) {
      customer_id
    }
  }
`;

export const UpdatePaymentMethodMutation = gql`
  mutation UpdatePaymentMethodMutation($paymentMethodId: String!, $addressId: String!) {
    updatePaymentMethod: Recharge_updateOwnSubscriptionPaymentMethod(
      paymentMethodId: $paymentMethodId
      addressId: $addressId
    ) {
      id
    }
  }
`;
