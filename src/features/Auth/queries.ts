import { gql } from '@apollo/client';
import {
  CreateCustomerPayload,
  ShopifyStorefront_Customer,
  ShopifyStorefront_CustomerAccessTokenCreatePayload,
  ShopifyStorefront_CustomerRecoverPayload
} from 'types/takeshape';

export type CreateCustomerResponse = {
  customerCreate: CreateCustomerPayload;
};

export const CreateCustomerMutation = gql`
  mutation CreateCustomerMutation($input: CreateCustomerPropertiesPropertyInput!) {
    customerCreate: createCustomer(input: $input) {
      customer {
        id
      }
    }
  }
`;

export type RecoverCustomerPasswordResponse = {
  customerRecover: ShopifyStorefront_CustomerRecoverPayload;
};

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

export type CreateCustomerAccessTokenResponse = {
  accessTokenCreate: ShopifyStorefront_CustomerAccessTokenCreatePayload;
};

export const CreateCustomerAccessTokenMutation = gql`
  mutation CrateCustomerAccesssToken($input: ShopifyStorefront_CustomerAccessTokenCreateInput!) {
    accessTokenCreate: ShopifyStorefront_customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        expiresAt
        accessToken
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export type GetCustomerTokenDataResponse = {
  customer: ShopifyStorefront_Customer;
};

export const GetCustomerTokenDataQuery = gql`
  query GetCustomerTokenDataQuery($customerAccessToken: String!) {
    customer: ShopifyStorefront_customer(customerAccessToken: $customerAccessToken) {
      firstName
      lastName
      id
      phone
      email
      displayName
    }
  }
`;
