import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormMarketing } from './AccountFormMarketing';
import fixtures from './queries.fixtures.json';

const meta: Meta<typeof AccountFormMarketing> = {
  title: 'Features / Account Form / Marketing',
  component: AccountFormMarketing
};

export default meta;

type Story = StoryObj<typeof AccountFormMarketing>;

export const NotReady: Story = {
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.query('CustomerQuery', (req, res, ctx) => {
            return res(ctx.delay('infinite'));
          }),
          graphql.query('GetMyNewsletterSubscriptionsQuery', (req, res, ctx) => {
            return res(ctx.delay('infinite'));
          })
        ]
      }
    }
  }
};

export const Success: Story = {
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.query('CustomerQuery', (req, res, ctx) => {
            return res(ctx.data(fixtures.GetCustomerQuery.ok));
          }),
          graphql.query('GetMyNewsletterSubscriptionsQuery', (req, res, ctx) => {
            return res(ctx.data(fixtures.GetMyNewsletterSubscriptionsQuery.ok));
          }),
          graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.ok));
          }),
          graphql.mutation('SubscribeMyEmailToNewsletterMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.SubscribeMyEmailToNewsletterMutation.ok));
          }),
          graphql.mutation('UnsubscribeMyEmailFromNewsletterMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UnsubscribeMyEmailFromNewsletterMutation.ok));
          })
        ]
      }
    }
  }
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.query('CustomerQuery', (req, res, ctx) => {
            return res(ctx.data(fixtures.GetCustomerQuery.ok));
          }),
          graphql.query('GetMyNewsletterSubscriptionsQuery', (req, res, ctx) => {
            return res(ctx.data(fixtures.GetMyNewsletterSubscriptionsQuery.ok));
          }),
          graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
          }),
          graphql.mutation('SubscribeMyEmailToNewsletterMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.SubscribeMyEmailToNewsletterMutation.error));
          }),
          graphql.mutation('UnsubscribeMyEmailFromNewsletterMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UnsubscribeMyEmailFromNewsletterMutation.error));
          })
        ]
      }
    }
  }
};
