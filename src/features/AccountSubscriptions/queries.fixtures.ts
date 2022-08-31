import {
  GetMyAddressPaymentMethodsQueryResponse,
  GetMyPaymentMethodsQueryResponse,
  SendMyUpdatePaymentEmailMutationResponse,
  UpdateMyPaymentMethodMutationResponse
} from 'types/takeshape';

export const getMyPaymentMethodsResponse: GetMyPaymentMethodsQueryResponse = {
  paymentMethods: [
    {
      id: '64262523',
      payment_details: {
        brand: 'visa',
        exp_month: 3,
        exp_year: 2040,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    },
    {
      id: '66493468',
      payment_details: {
        brand: 'Visa',
        exp_month: 4,
        exp_year: 2024,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    }
  ]
};

export const getMyAddressPaymentMethodsResponse: GetMyAddressPaymentMethodsQueryResponse = {
  paymentMethods: [
    {
      id: '66493468',
      payment_details: {
        brand: 'Visa',
        exp_month: 4,
        exp_year: 2024,
        last4: '4242',
        __typename: 'Recharge_PaymentMethodPaymentDetailsProperty'
      },
      __typename: 'Recharge_PaymentMethod'
    }
  ]
};

export const updateMyPaymentMethodResponse: UpdateMyPaymentMethodMutationResponse = {
  updatePaymentMethod: { id: '101027982', __typename: 'Recharge_Address' }
};

export const sendMyUpdatePaymentEmailMutation: SendMyUpdatePaymentEmailMutationResponse = {
  sendUpdatePaymentEmail: { customer_id: '91156497', __typename: 'Recharge_CreateNotificationResponse' }
};
