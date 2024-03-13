import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountSubscriptions } from './AccountSubscriptions';
import {
  getMyPaymentMethodsResponse,
  getMySubscriptionListResponse,
  sendMyUpdatePaymentEmailMutation,
  updateMyPaymentMethodResponse
} from './queries.fixtures';

const meta: Meta<typeof AccountSubscriptions> = {
  title: 'Features / Account Subscriptions',
  component: AccountSubscriptions,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof AccountSubscriptions>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: {
        subscriptions: [
          graphql.query('GetMySubscriptionListQuery', (req, res, ctx) => {
            return res(ctx.data(getMySubscriptionListResponse));
          }),
          graphql.query('GetMySubscriptionQuery', (req, res, ctx) => {
            return res(ctx.data(getMySubscriptionListResponse.subscriptions![0]));
          })
        ],
        payments: [
          graphql.query('GetMyPaymentMethodsQuery', (req, res, ctx) => {
            return res(ctx.data(getMyPaymentMethodsResponse));
          }),
          graphql.mutation('SendMyUpdatePaymentEmailMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(sendMyUpdatePaymentEmailMutation));
          }),
          graphql.mutation('UpdateMyPaymentMethodMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(updateMyPaymentMethodResponse));
          })
        ]
      }
    }
  }
};

export const LoadingError: Story = {
  parameters: {
    msw: {
      handlers: {
        subscriptions: [
          graphql.query('GetMySubscriptionListQuery', (req, res, ctx) => {
            return res(
              ctx.errors([
                {
                  message: `Status Code: 404 Response Body: {"errors":["shopify_customer_id not found"]}\n","locations":[{"line":219,"column":3}],"path":["subscriptions"],"type":"GraphQLError"`
                }
              ])
            );
          })
        ]
      }
    }
  }
};

export default meta;
