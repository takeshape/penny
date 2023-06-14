import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormPassword } from './AccountFormPassword';
import fixtures from './queries.fixtures.json';

const meta: Meta<typeof AccountFormPassword> = {
  title: 'Features / Account Form / Password',
  component: AccountFormPassword
};

export default meta;

type Story = StoryObj<typeof AccountFormPassword>;

export const Success: Story = {
  parameters: {
    msw: {
      handlers: {
        customer: [
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
          graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
          })
        ]
      }
    }
  }
};
