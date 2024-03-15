import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AuthCreateAccount } from './AuthCreateAccount';

const meta: Meta<typeof AuthCreateAccount> = {
  title: 'Features / Auth / Create Account',
  component: AuthCreateAccount,
  argTypes: {}
};

type Story = StoryObj<typeof AuthCreateAccount>;

export const Success: Story = {
  parameters: {
    msw: {
      handlers: {
        createAccount: [
          graphql.mutation('CreateCustomerMutation', (req, res, ctx) => {
            return res(ctx.data({ customerCreate: { customer: { id: '12345' } } }));
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
        createAccount: [
          graphql.mutation('CreateCustomerMutation', (req, res, ctx) => {
            return res(ctx.errors([{ message: 'An account with that email already exists' }]));
          })
        ]
      }
    }
  }
};

export default meta;
