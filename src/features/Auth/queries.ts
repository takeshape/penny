import { gql } from '@apollo/client';

export const CreateCustomerMutation = gql`
  mutation CreateCustomerMutation($input: CreateCustomerPropertiesPropertyInput!) {
    customerCreate: createCustomer(input: $input) {
      customer {
        id
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
