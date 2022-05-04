import type { ComponentMeta } from '@storybook/react';
import { currencyList } from 'config';
import { GetNavigationDataQuery, SearchStripeProducts } from 'queries';
import { NavigationTop } from '../NavigationTop';
import navigationJson from '../__fixtures__/navigation.json';

export default {
  title: 'Features/NavigationTop',
  component: NavigationTop,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>],
  parameters: {
    apolloClient: {
      mocks: [
        {
          request: {
            query: GetNavigationDataQuery
          },
          result: {
            data: {
              getNavigationData: {
                links: navigationJson.links,
                currencies: [...currencyList]
              }
            }
          }
        },
        {
          request: {
            query: SearchStripeProducts,
            variables: { query: 'socks' }
          },
          result: {
            data: {
              products: {
                results: [
                  {
                    __typename: 'Stripe_Product',
                    id: 'prod_LPvslzaZA4bjRO',
                    name: 'Cozy Socks',
                    description: 'Socks for all occasions, perfectly snug.',
                    images: [
                      'https://files.stripe.com/links/MDB8YWNjdF8xSkc3c1RFak1HYVBpUTc0fGZsX3Rlc3RfeHBuRzhCY010OWRPVFdPZEo5YXY3Y3Ew000eNM5bvw'
                    ],
                    prices: [
                      {
                        id: 'price_1Kj60YEjMGaPiQ74U08NcmDI',
                        unit_amout: 1000,
                        currency: 'usd',
                        recurring: null,
                        __typename: 'Stripe_Price'
                      }
                    ]
                  },
                  {
                    __typename: 'Stripe_Product',
                    id: 'prod_LNjQn6SmhBfhkT',
                    name: 'Pink Camo Socks',
                    description: 'Are these pink camo socks perfect for a night out on the town, or what?',
                    images: [
                      'https://files.stripe.com/links/MDB8YWNjdF8xSkc3c1RFak1HYVBpUTc0fGZsX3Rlc3RfUENIY3NiNkFOTXRzOGVRdDFjakJ2aFJV00MZSZZGKf'
                    ],
                    prices: [
                      {
                        id: 'price_1KgyNyEjMGaPiQ74w5knSXdZ',
                        unit_amout: 700,
                        currency: 'usd',
                        recurring: { interval: 'month', interval_count: 1, __typename: 'Stripe_Recurring' },
                        __typename: 'Stripe_Price'
                      },
                      {
                        id: 'price_1KgxxhEjMGaPiQ74gcw80L7h',
                        unit_amout: 900,
                        currency: 'usd',
                        recurring: null,
                        __typename: 'Stripe_Price'
                      }
                    ]
                  }
                ],
                __typename: 'TSSearchableSearchResults'
              }
            }
          }
        }
      ]
    }
  }
} as ComponentMeta<typeof NavigationTop>;

const Template = (args) => <NavigationTop {...args} />;

export const Renders = Template.bind({});
