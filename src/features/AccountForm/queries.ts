import { gql } from '@apollo/client';
import {
  Klaviyo_200Ok,
  Klaviyo_AddMembersResponse,
  ProfileNewsletterStatus,
  ShopifyStorefront_Customer,
  ShopifyStorefront_CustomerAddressUpdatePayload,
  ShopifyStorefront_CustomerUpdatePayload
} from 'types/takeshape';

export type GetCustomerResponse = {
  customer: ShopifyStorefront_Customer;
};

export const GetCustomerQuery = gql`
  query GetCustomerQuery {
    customer: getMyCustomer {
      firstName
      lastName
      id
      phone
      email
      displayName
      acceptsMarketing
      defaultAddress {
        id
        firstName
        lastName
        address1
        address2
        city
        country
        countryCodeV2
        province
        provinceCode
        zip
      }
    }
  }
`;

export type UpdateCustomerResponse = {
  customerUpdate: ShopifyStorefront_CustomerUpdatePayload;
};

export const UpdateCustomerMutation = gql`
  mutation UpdateCustomerMutation($customer: ShopifyStorefront_CustomerUpdateInput!) {
    customerUpdate: updateMyCustomer(customer: $customer) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export type UpdateCustomerAddressResponse = {
  customerAddressUpdate: ShopifyStorefront_CustomerAddressUpdatePayload;
};

export const UpdateCustomerAddressMutation = gql`
  mutation UpdateCustomerAddressMutation($address: ShopifyStorefront_MailingAddressInput!, $id: ID!) {
    customerAddressUpdate: updateMyCustomerAddress(address: $address, id: $id) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export interface GetMyNewsletterSubscriptionsResponse {
  newsletters: ProfileNewsletterStatus[];
}

export const GetMyNewsletterSubscriptionsQuery = gql`
  query GetMyNewsletterSubscriptionsQuery {
    newsletters: getMyNewsletterSubscriptions {
      listId
      listName
      subscribed
    }
  }
`;

export interface SubscribeMyEmailToNewsletterResponse {
  result: Klaviyo_AddMembersResponse;
}

export const SubscribeMyEmailToNewsletterMutation = gql`
  mutation SubscribeMyEmailToNewsletterMutation($list_id: String!) {
    result: subscribeMyEmailToNewsletter(list_id: $list_id) {
      items {
        id
      }
    }
  }
`;

export interface UnsubscribeMyEmailFromNewsletterResponse {
  result: Klaviyo_200Ok;
}

export const UnsubscribeMyEmailFromNewsletterMutation = gql`
  mutation UnsubscribeMyEmailFromNewsletterMutation($list_id: String!) {
    result: unsubscribeMyEmailFromNewsletter(list_id: $list_id) {
      result
    }
  }
`;
