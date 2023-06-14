import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormAddress } from './AccountFormAddress';
import fixtures from './queries.fixtures.json';

const meta: Meta<typeof AccountFormAddress> = {
  title: 'Features / Account Form / Address',
  component: AccountFormAddress
};

export default meta;

type Story = StoryObj<typeof AccountFormAddress>;

export const NotReady: Story = {
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.query('CustomerQuery', (req, res, ctx) => {
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
          graphql.mutation('CustomerAddressUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerAddressMutation.ok));
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
          graphql.mutation('CustomerAddressUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerAddressMutation.error));
          })
        ]
      }
    }
  }
};
