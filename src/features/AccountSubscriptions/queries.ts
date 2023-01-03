import { gql } from '@apollo/client';

const AddressFragment = gql`
  fragment Address on Recharge_Address {
    id
    address1
    address2
    city
    country
    country_code
    first_name
    last_name
    province
    zip
    phone
  }
`;

const ChargeFragment = gql`
  fragment Charge on Recharge_Charge {
    id
    created_at
    scheduled_at
    processed_at
    updated_at
    line_items {
      images {
        small
      }
      price
      quantity
      shopify_product_id
      shopify_variant_id
      title
      variant_title
    }
    currency
    status
    shopifyOrder {
      processedAt
      shippingAddress {
        firstName
        lastName
        address1
        address2
        company
        city
        province
        provinceCode
        country
        zip
        phone
      }
      fulfillments(first: 1) {
        createdAt
        updatedAt
        deliveredAt
        estimatedDeliveryAt
        inTransitAt
        displayStatus
        trackingInfo {
          url
          number
          company
        }
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
      id
      first_name
      last_name
      address1
      address2
      city
      province
      zip
      country
      phone
      company
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

const ShopifyProductVariantFragment = gql`
  fragment ShopifyProductVariant on Shopify_ProductVariant {
    id
    availableForSale
    compareAtPrice
    image {
      width
      height
      url
      altText
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
    product {
      id
      handle
      status
      title
      description
      descriptionHtml
      tracksInventory
      totalInventory
      publishedOnCurrentPublication
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
        nodes {
          id
          availableForSale
          compareAtPrice
          image {
            width
            height
            url
            altText
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
      options {
        name
        position
        id
        values
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

export const GetMySubscriptionQuery = gql`
  ${SubscriptionFragment}
  ${ShopifyProductVariantFragment}
  query GetMySubscriptionQuery($id: String!) {
    subscription: Recharge_getMySubscription(id: $id) {
      ...Subscription
      shopifyProductVariant {
        ...ShopifyProductVariant
      }
    }
  }
`;

export const GetMySubscriptionListQuery = gql`
  ${SubscriptionFragment}
  ${ShopifyProductVariantFragment}
  query GetMySubscriptionListQuery {
    subscriptions: Recharge_getMySubscriptions {
      ...Subscription
      shopifyProductVariant {
        ...ShopifyProductVariant
      }
    }
  }
`;

export const CancelSubscriptionMutation = gql`
  mutation CancelSubscriptionMutation($id: String!) {
    subscription: Recharge_cancelMySubscription(id: $id) {
      id
    }
  }
`;

export const SkipChargeMutation = gql`
  ${ChargeFragment}
  mutation SkipChargeMutation($chargeId: String!, $subscriptionId: String!) {
    charge: Recharge_skipMyCharge(chargeId: $chargeId, subscriptionId: $subscriptionId) {
      ...Charge
    }
  }
`;

export const UnskipChargeMutation = gql`
  ${ChargeFragment}
  mutation UnskipChargeMutation($chargeId: String!, $subscriptionId: String!) {
    charge: Recharge_unskipMyCharge(chargeId: $chargeId, subscriptionId: $subscriptionId) {
      ...Charge
    }
  }
`;

export const UpdateMyAddressMutation = gql`
  ${AddressFragment}
  mutation UpdateMyAddressMutation(
    $addressId: String!
    $address1: String!
    $address2: String
    $city: String!
    $countryCode: String!
    $firstName: String!
    $lastName: String!
    $phone: String
    $province: String!
    $zip: String!
  ) {
    address: Recharge_updateMyAddress(
      addressId: $addressId
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
      ...Address
    }
  }
`;

export const SetNextChargeDateMutation = gql`
  mutation SetNextChargeDateMutation($subscriptionId: String!, $date: String!) {
    subscription: Recharge_setMyNextChargeDate(subscriptionId: $subscriptionId, date: $date) {
      id
    }
  }
`;

export const UpdateDeliveryFrequencyMutation = gql`
  mutation UpdateDeliveryFrequencyMutation($subscriptionId: String!, $frequency: String!, $unit: String!) {
    subscription: Recharge_updateMyDeliveryFrequency(
      subscriptionId: $subscriptionId
      frequency: $frequency
      unit: $unit
    ) {
      id
    }
  }
`;

export const UpdateProductOptionsMutation = gql`
  mutation UpdateProductOptionsMutation($subscriptionId: String!, $variantId: String, $quantity: String) {
    subscription: Recharge_updateMyProductOptions(
      subscriptionId: $subscriptionId
      variantId: $variantId
      quantity: $quantity
    ) {
      id
    }
  }
`;
