import { gql } from '@apollo/client';

const ChargeFragment = gql`
  fragment Charge on Recharge_Charge {
    id
    scheduled_at
    line_items {
      images {
        small
      }
      price
      quantity
      shopify_product_id
      shopify_variant_id
      subscription_id
      title
      variant_title
    }
    currency
    status
    address_id
    shopifyOrder {
      processedAt
      fulfillments(first: 10) {
        deliveredAt
        displayStatus
        inTransitAt
        fulfillmentLineItems(first: 10) {
          edges {
            node {
              lineItem {
                variant {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

const SubscriptionFragment = gql`
  ${ChargeFragment}
  fragment Subscription on Recharge_Subscription {
    id
    customer_id
    address_id
    status
    created_at
    updated_at
    price
    presentment_currency
    order_interval_unit
    order_interval_frequency
    shopify_product_id
    quantity
    variant_title
    shopify_variant_id
    next_charge_scheduled_at
    cancelled_at
    charges {
      ...Charge
    }
    address {
      first_name
      last_name
      address1
      address2
      city
      province
      zip
      country
      phone
      include {
        payment_methods {
          id
          payment_details {
            brand
            exp_month
            exp_year
            last4
          }
        }
      }
    }
    rechargeProduct {
      id
      discount_amount
      subscription_defaults {
        order_interval_frequency_options
      }
    }
  }
`;

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

export const GetSubscriptionQuery = gql`
  ${SubscriptionFragment}
  query GetSubscriptionQuery($id: String!) {
    subscription: Recharge_getSubscription(id: $id) {
      ...Subscription
    }
  }
`;

export const GetMySubscriptionsQuery = gql`
  ${SubscriptionFragment}
  query GetMySubscriptionsQuery {
    subscriptions: Recharge_getMySubscriptions {
      ...Subscription
    }
  }
`;

export const SubscriptionProductVariantQuery = gql`
  query SubscriptionProductVariantQuery($id: ID!) {
    variant: variantWithTtl(id: $id) {
      id
      title
      price
      selectedOptions {
        name
        value
      }
      product {
        id
        handle
        title
        description
        descriptionHtml
        featuredImage {
          id
          url(transform: { maxWidth: 800, maxHeight: 800, preferredContentType: WEBP })
          width
          height
          altText
        }
        priceRangeV2 {
          maxVariantPrice {
            currencyCode
            amount
          }
          minVariantPrice {
            currencyCode
            amount
          }
        }
        variants(first: 50) {
          edges {
            node {
              id
              availableForSale
              compareAtPrice
              image {
                width
                height
                url
              }
              price
              inventoryPolicy
              sellableOnlineQuantity
              sku
              title
              selectedOptions {
                name
                value
              }
            }
          }
        }
        options {
          name
          position
          id
          values
        }
      }
    }
  }
`;

export const CancelSubscriptionMutation = gql`
  ${SubscriptionFragment}
  mutation CancelSubscriptionMutation($id: String!) {
    subscription: Recharge_cancelSubscription(id: $id) {
      ...Subscription
    }
  }
`;

export const SkipChargeMutation = gql`
  ${ChargeFragment}
  mutation SkipChargeMutation($chargeId: String!, $subscriptionId: String!) {
    charge: Recharge_skipCharge(chargeId: $chargeId, subscriptionId: $subscriptionId) {
      ...Charge
    }
  }
`;

export const UnskipChargeMutation = gql`
  ${ChargeFragment}
  mutation UnskipChargeMutation($chargeId: String!, $subscriptionId: String!) {
    charge: Recharge_unskipCharge(chargeId: $chargeId, subscriptionId: $subscriptionId) {
      ...Charge
    }
  }
`;

export const ChangeSubscriptionAddressMutation = gql`
  ${SubscriptionFragment}
  mutation ChangeSubscriptionAddressMutation(
    $subscriptionId: String!
    $address1: String!
    $address2: String
    $city: String!
    $countryCode: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $province: String!
    $zip: String!
  ) {
    subscription: Recharge_changeSubscriptionAddress(
      subscriptionId: $subscriptionId
      address1: $address1
      address2: $address2
      city: $city
      countryCode: $countryCode
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      province: $province
      zip: $zip
    ) {
      ...Subscription
    }
  }
`;

export const SetNextChargeDateMutation = gql`
  ${SubscriptionFragment}
  mutation SetNextChargeDateMutation($subscriptionId: String!, $date: String!) {
    Recharge_setNextChargeDate(subscriptionId: $subscriptionId, date: $date) {
      ...Subscription
    }
  }
`;

export const CreateOnetimeMutation = gql`
  mutation CreateOnetimeMutation($addressId: String!, $productId: String!, $variantId: String!, $quantity: Int!) {
    onetime: Recharge_createOnetime(
      addressId: $addressId
      productId: $productId
      variantId: $variantId
      quantity: $quantity
    ) {
      id
    }
  }
`;

export const UpdateDeliveryFrequencyMutation = gql`
  ${SubscriptionFragment}
  mutation UpdateDeliveryFrequencyMutation($subscriptionId: String!, $frequency: String!, $unit: String!) {
    subscription: Recharge_updateDeliveryFrequency(
      subscriptionId: $subscriptionId
      frequency: $frequency
      unit: $unit
    ) {
      ...Subscription
    }
  }
`;

export const UpdateProductOptionsMutation = gql`
  ${SubscriptionFragment}
  mutation UpdateProductOptionsMutation($subscriptionId: String!, $variantId: String, $quantity: String) {
    subscription: Recharge_updateProductOptions(
      subscriptionId: $subscriptionId
      variantId: $variantId
      quantity: $quantity
    ) {
      ...Subscription
    }
  }
`;
