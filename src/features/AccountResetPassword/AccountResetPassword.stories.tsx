import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountResetPassword } from './AccountResetPassword';

const meta: Meta<typeof AccountResetPassword> = {
  title: 'Features / Account / Reset Password',
  component: AccountResetPassword
};

type Story = StoryObj<typeof AccountResetPassword>;

export const ResetSuccess: Story = {
  args: {
    customerId: '123456',
    resetToken: 'abc123'
  },
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.mutation('ResetPasswordMutation', (req, res, ctx) => {
            return res(ctx.data({ customer: { customerUserErrors: undefined } }));
          })
        ]
      }
    }
  }
};

export const ResetError: Story = {
  args: {
    customerId: '123456',
    resetToken: 'abc123'
  },
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.mutation('ResetPasswordMutation', (req, res, ctx) => {
            return res(ctx.data({ customer: { customerUserErrors: [{ message: 'Failed to reset password' }] } }));
          })
        ]
      }
    }
  }
};

export const ActivateSuccess: Story = {
  args: {
    customerId: '123456',
    activationToken: 'abc123'
  },

  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.mutation('ActivateAccountMutation', (req, res, ctx) => {
            return res(ctx.data({ customer: { customerUserErrors: undefined } }));
          })
        ]
      }
    }
  }
};

export const ActivateError: Story = {
  args: {
    customerId: '123456',
    activationToken: 'abc123'
  },

  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.mutation('ActivateAccountMutation', (req, res, ctx) => {
            return res(ctx.data({ customer: { customerUserErrors: [{ message: 'Failed to reset password' }] } }));
          })
        ]
      }
    }
  }
};

export default meta;
