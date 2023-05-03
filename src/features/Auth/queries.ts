import { gql } from '@apollo/client';

export const CreateCustomerMutation = gql`
  mutation CreateCustomerMutation($input: CreateCustomerPropertiesPropertyInput!) {
    customerCreate: createCustomer(input: $input) {
      customer {
        id
      }
      userErrors {
        message
      }
    }
  }
`;

export const RecoverCustomerPasswordMutation = gql`
  mutation RecoverCustomerPasswordMutation($email: String!, $recaptchaToken: String!) {
    customerRecover: recoverCustomerAccount(email: $email, recaptchaToken: $recaptchaToken) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const SendCustomerInviteMutation = gql`
  mutation SendCustomerInviteMutation($customerId: String!) {
    customerInvite: sendCustomerInvite(customerId: $customerId) {
      customer_invite {
        from
      }
    }
  }
`;

export const GetCustomerStateQuery = gql`
  query GetCustomerStateQuery($email: String!) {
    customer: getCustomerState(email: $email) {
      state
      id
    }
  }
`;
