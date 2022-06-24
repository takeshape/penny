import { gql } from '@apollo/client';

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
      handle
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
