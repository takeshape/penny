import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormProfile } from './AccountFormProfile';
import fixtures from './queries.fixtures.json';

const Meta: ComponentMeta<typeof AccountFormProfile> = {
  title: 'Features / Account Form / Profile',
  component: AccountFormProfile
};

const Template = (args) => <AccountFormProfile {...args} />;

export const NotReady = Template.bind({});
NotReady.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.query('CustomerQuery', (req, res, ctx) => {
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
        graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.ok));
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
        graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
        })
      ]
    }
  }
};

export default Meta;
