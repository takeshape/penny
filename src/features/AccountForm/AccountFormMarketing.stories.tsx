import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormMarketing } from './AccountFormMarketing';
import fixtures from './queries.fixtures.json';

const Meta: ComponentMeta<typeof AccountFormMarketing> = {
  title: 'Features / Account Form / Marketing',
  component: AccountFormMarketing
};

const Template = (args) => <AccountFormMarketing {...args} />;

export const NotReady = Template.bind({});
NotReady.parameters = {
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
};

export const Success = Template.bind({});
Success.parameters = {
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
};

export const Error = Template.bind({});
Error.parameters = {
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
};

export default Meta;
