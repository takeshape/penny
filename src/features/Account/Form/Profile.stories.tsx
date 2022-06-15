import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import fixtures from 'queries.fixtures.json';
import { AccountFormProfile } from './Profile';

const Meta: ComponentMeta<typeof AccountFormProfile> = {
  title: 'Features / Account / Form / Profile',
  component: AccountFormProfile
};

const Template = (args) => <AccountFormProfile {...args} />;

export const NotReady = Template.bind({});

export const Success = Template.bind({});
Success.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.query('GetCustomerQuery', (req, res, ctx) => {
          return res(ctx.data(fixtures.GetCustomerQuery.ok));
        }),
        graphql.mutation('UpdateCustomerMutation', (req, res, ctx) => {
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
        graphql.query('GetCustomerQuery', (req, res, ctx) => {
          return res(ctx.data(fixtures.GetCustomerQuery.ok));
        }),
        graphql.mutation('UpdateCustomerMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
        })
      ]
    }
  }
};

export default Meta;
