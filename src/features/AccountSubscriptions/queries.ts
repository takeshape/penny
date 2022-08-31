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

export const GetMyAddressPaymentMethodsQuery = gql`
  query GetMyAddressPaymentMethodsQuery($addressId: String!) {
    paymentMethods: Recharge_getMyAddressPaymentMethods(addressId: $addressId) {
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

export const SendMyUpdatePaymentEmailMutation = gql`
  mutation SendMyUpdatePaymentEmailMutation($paymentMethodId: String!) {
    sendUpdatePaymentEmail: Recharge_sendMyUpdatePaymentEmail(paymentMethodId: $paymentMethodId) {
      customer_id
    }
  }
`;

export const UpdateMyPaymentMethodMutation = gql`
  mutation UpdateMyPaymentMethodMutation($paymentMethodId: String!, $addressId: String!) {
    updatePaymentMethod: Recharge_updateMySubscriptionPaymentMethod(
      paymentMethodId: $paymentMethodId
      addressId: $addressId
    ) {
      id
    }
  }
`;
