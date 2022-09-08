export const myPurchasesResponse = {
  customer: {
    __typename: 'Shopify_Customer',
    orders: {
      __typename: 'Shopify_OrderConnection',
      edges: [
        {
          __typename: 'Shopify_OrderEdge',
          node: {
            __typename: 'Shopify_Order',
            id: 'gid://shopify/Order/4167289208932',
            createdAt: '2022-06-14T17:46:07Z',
            displayFulfillmentStatus: 'UNFULFILLED',
            totalPriceSet: {
              __typename: 'Shopify_MoneyBag',
              shopMoney: {
                __typename: 'Shopify_MoneyV2',
                amount: '209.04',
                currencyCode: 'USD'
              }
            },
            lineItems: {
              __typename: 'Shopify_LineItemConnection',
              edges: [
                {
                  __typename: 'Shopify_LineItemEdge',
                  node: {
                    __typename: 'Shopify_LineItem',
                    id: 'gid://shopify/LineItem/10727677755492',
                    image: {
                      __typename: 'Shopify_Image',
                      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._500x500.png.webp?v=1660406577',
                      height: 1088,
                      width: 840,
                      altText: 'A bunch of shirts.'
                    },
                    name: 'Basic Tee 6-Pack - XS / Black',
                    quantity: 1,
                    product: {
                      __typename: 'Shopify_Product',
                      id: 'gid://shopify/Product/6857243132004',
                      handle: 'basic-tee-6-pack'
                    },
                    originalTotalSet: {
                      __typename: 'Shopify_MoneyBag',
                      shopMoney: {
                        __typename: 'Shopify_MoneyV2',
                        amount: '192.0',
                        currencyCode: 'USD'
                      }
                    }
                  }
                }
              ]
            },
            fulfillments: []
          }
        },
        {
          __typename: 'Shopify_OrderEdge',
          node: {
            __typename: 'Shopify_Order',
            id: 'gid://shopify/Order/4162800124004',
            createdAt: '2022-06-09T16:18:12Z',
            displayFulfillmentStatus: 'FULFILLED',
            totalPriceSet: {
              __typename: 'Shopify_MoneyBag',
              shopMoney: {
                __typename: 'Shopify_MoneyV2',
                amount: '209.04',
                currencyCode: 'USD'
              }
            },
            lineItems: {
              __typename: 'Shopify_LineItemConnection',
              edges: [
                {
                  __typename: 'Shopify_LineItemEdge',
                  node: {
                    __typename: 'Shopify_LineItem',
                    id: 'gid://shopify/LineItem/10718445863012',
                    image: {
                      __typename: 'Shopify_Image',
                      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._500x500.png.webp?v=1660406577',
                      height: 1088,
                      width: 840,
                      altText: 'A bunch of shirts.'
                    },
                    name: 'Basic Tee 6-Pack - S / Gray',
                    quantity: 1,
                    product: {
                      __typename: 'Shopify_Product',
                      id: 'gid://shopify/Product/6857243132004',
                      handle: 'basic-tee-6-pack'
                    },
                    originalTotalSet: {
                      __typename: 'Shopify_MoneyBag',
                      shopMoney: {
                        __typename: 'Shopify_MoneyV2',
                        amount: '192.0',
                        currencyCode: 'USD'
                      }
                    }
                  }
                }
              ]
            },
            fulfillments: [
              {
                __typename: 'Shopify_Fulfillment',
                id: 'gid://shopify/Fulfillment/3687748108388',
                displayStatus: 'FULFILLED',
                deliveredAt: null,
                estimatedDeliveryAt: null,
                inTransitAt: null,
                updatedAt: '2022-06-09T16:27:18Z',
                trackingInfo: [
                  {
                    __typename: 'Shopify_FulfillmentTrackingInfo',
                    company: 'FedEx',
                    number: 'abc123xyz'
                  }
                ],
                fulfillmentLineItems: {
                  __typename: 'Shopify_FulfillmentLineItemConnection',
                  edges: [
                    {
                      __typename: 'Shopify_FulfillmentLineItemEdge',
                      node: {
                        __typename: 'Shopify_FulfillmentLineItem',
                        lineItem: {
                          __typename: 'Shopify_LineItem',
                          id: 'gid://shopify/LineItem/10718445863012',
                          image: {
                            __typename: 'Shopify_Image',
                            url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/DALL_E2022-08-1312.02.50-Aphotographofamanwearingaplainwhitet-shirtstaringofftotherightwithhisfaceandtorsointheframe._500x500.png.webp?v=1660406577',
                            height: 1088,
                            width: 840,
                            altText: 'A bunch of shirts.'
                          },
                          name: 'Basic Tee 6-Pack - S / Gray',
                          quantity: 1,
                          product: {
                            __typename: 'Shopify_Product',
                            id: 'gid://shopify/Product/6857243132004',
                            handle: 'basic-tee-6-pack'
                          },
                          originalTotalSet: {
                            __typename: 'Shopify_MoneyBag',
                            shopMoney: {
                              __typename: 'Shopify_MoneyV2',
                              amount: '192.0',
                              currencyCode: 'USD'
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          __typename: 'Shopify_OrderEdge',
          node: {
            __typename: 'Shopify_Order',
            id: 'gid://shopify/Order/4148435681380',
            createdAt: '2022-05-24T21:08:16Z',
            displayFulfillmentStatus: 'FULFILLED',
            totalPriceSet: {
              __typename: 'Shopify_MoneyBag',
              shopMoney: {
                __typename: 'Shopify_MoneyV2',
                amount: '36.92',
                currencyCode: 'USD'
              }
            },
            lineItems: {
              __typename: 'Shopify_LineItemConnection',
              edges: [
                {
                  __typename: 'Shopify_LineItemEdge',
                  node: {
                    __typename: 'Shopify_LineItem',
                    id: 'gid://shopify/LineItem/10687112347748',
                    image: {
                      __typename: 'Shopify_Image',
                      url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316',
                      height: 791,
                      width: 860,
                      altText: null
                    },
                    name: 'Mesh Gym Shorts - Black / Small',
                    quantity: 1,
                    product: {
                      __typename: 'Shopify_Product',
                      id: 'gid://shopify/Product/6827069505636',
                      handle: 'mesh-gym-shorts'
                    },
                    originalTotalSet: {
                      __typename: 'Shopify_MoneyBag',
                      shopMoney: {
                        __typename: 'Shopify_MoneyV2',
                        amount: '29.0',
                        currencyCode: 'USD'
                      }
                    }
                  }
                }
              ]
            },
            fulfillments: [
              {
                __typename: 'Shopify_Fulfillment',
                id: 'gid://shopify/Fulfillment/3681352056932',
                displayStatus: 'FULFILLED',
                deliveredAt: null,
                estimatedDeliveryAt: null,
                inTransitAt: null,
                updatedAt: '2022-06-02T18:16:04Z',
                trackingInfo: [
                  {
                    __typename: 'Shopify_FulfillmentTrackingInfo',
                    company: 'USPS',
                    number: '12345'
                  }
                ],
                fulfillmentLineItems: {
                  __typename: 'Shopify_FulfillmentLineItemConnection',
                  edges: [
                    {
                      __typename: 'Shopify_FulfillmentLineItemEdge',
                      node: {
                        __typename: 'Shopify_FulfillmentLineItem',
                        lineItem: {
                          __typename: 'Shopify_LineItem',
                          id: 'gid://shopify/LineItem/10687112347748',
                          image: {
                            __typename: 'Shopify_Image',
                            url: 'https://cdn.shopify.com/s/files/1/0579/6744/4068/products/gymshorts.png?v=1650570316',
                            height: 791,
                            width: 860,
                            altText: null
                          },
                          name: 'Mesh Gym Shorts - Black / Small',
                          quantity: 1,
                          product: {
                            __typename: 'Shopify_Product',
                            id: 'gid://shopify/Product/6827069505636',
                            handle: 'mesh-gym-shorts'
                          },
                          originalTotalSet: {
                            __typename: 'Shopify_MoneyBag',
                            shopMoney: {
                              __typename: 'Shopify_MoneyV2',
                              amount: '29.0',
                              currencyCode: 'USD'
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
};
