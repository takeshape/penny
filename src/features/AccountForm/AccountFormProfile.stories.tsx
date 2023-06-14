import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormProfile } from './AccountFormProfile';
import fixtures from './queries.fixtures.json';

const meta: Meta<typeof AccountFormProfile> = {
  title: 'Features / Account Form / Profile',
  component: AccountFormProfile
};

export default meta;

type Story = StoryObj<typeof AccountFormProfile>;

export const NotReady = {
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
          graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.ok));
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
          graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
          })
        ]
      }
    }
  }
};
