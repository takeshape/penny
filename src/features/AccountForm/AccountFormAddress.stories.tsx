import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormAddress } from './AccountFormAddress';
import fixtures from './queries.fixtures.json';

const Meta: ComponentMeta<typeof AccountFormAddress> = {
  title: 'Features / Account Form / Address',
  component: AccountFormAddress
};

const Template = (args) => <AccountFormAddress {...args} />;

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
        graphql.mutation('CustomerAddressUpdateMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerAddressMutation.ok));
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
        graphql.mutation('CustomerAddressUpdateMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerAddressMutation.error));
        })
      ]
    }
  }
};

export default Meta;
