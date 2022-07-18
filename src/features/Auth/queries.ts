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

// export const AuthCustomerAccessTokenCreateMutation = gql`
//   mutation AuthCustomerAccessTokenCreateMutation($input: ShopifyStorefront_CustomerAccessTokenCreateInput!) {
//     accessTokenCreate: ShopifyStorefront_customerAccessTokenCreate(input: $input) {
//       customerAccessToken {
//         expiresAt
//         accessToken
//       }
//       customerUserErrors {
//         code
//         field
//         message
//       }
//     }
//   }
// `;

// export const AuthCustomerQuery = gql`
//   query AuthCustomerQuery($customerAccessToken: String!) {
//     customer: ShopifyStorefront_customer(customerAccessToken: $customerAccessToken) {
//       firstName
//       lastName
//       id
//       phone
//       email
//       displayName
//     }
//   }
// `;
