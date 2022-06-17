import { gql } from '@apollo/client';
import { Shopify_Customer, Voucherify_LoyaltyCard } from 'types/takeshape';

export interface GetMyAdminCustomerOrdersResponse {
  customer: Shopify_Customer;
}

export const GetMyAdminCustomerOrdersQuery = gql`
  fragment LineItem on Shopify_LineItem {
    id
    image {
      url
      height
      width
      altText
    }
    name
    quantity
    product {
      id
    }
    originalTotalSet {
      shopMoney {
        amount
        currencyCode
      }
    }
  }

  query GetMyAdminCustomerOrdersQuery {
    customer: getMyAdminCustomer {
      orders(first: 10, reverse: true) {
        edges {
          node {
            id
            createdAt
            displayFulfillmentStatus
            totalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            lineItems(first: 10) {
              edges {
                node {
                  ...LineItem
                }
              }
            }
            fulfillments {
              id
              displayStatus
              deliveredAt
              estimatedDeliveryAt
              inTransitAt
              updatedAt
              trackingInfo {
                company
                number
              }
              fulfillmentLineItems(first: 10) {
                edges {
                  node {
                    lineItem {
                      ...LineItem
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface GetMyLoyaltyCardResponse {
  loyaltyCard: Voucherify_LoyaltyCard;
}

export const GetMyLoyaltyCardQuery = gql`
  query GetMyLoyaltyCardQuery {
    loyaltyCard: getMyLoyaltyCard {
      id
      code
      campaign
      loyalty_card {
        points
        balance
      }
      assets {
        qr {
          id
          url
        }
      }
    }
  }
`;
