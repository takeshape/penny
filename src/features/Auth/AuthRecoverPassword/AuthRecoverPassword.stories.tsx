import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AuthRecoverPassword } from './AuthRecoverPassword';

const meta: Meta<typeof AuthRecoverPassword> = {
  title: 'Features / Auth / Recover Password',
  component: AuthRecoverPassword
};

type Story = StoryObj<typeof AuthRecoverPassword>;

export const Success: Story = {
  parameters: {
    msw: {
      handlers: {
        recoverPassword: [
          graphql.mutation('RecoverCustomerPasswordMutation', (req, res, ctx) => {
            return res(ctx.data({ customerRecover: { customerUserErrors: undefined } }));
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
        recoverPassword: [
          graphql.mutation('RecoverCustomerPasswordMutation', (req, res, ctx) => {
            return res(
              ctx.data({ customerRecover: { customerUserErrors: [{ message: 'Failed to recover password' }] } })
            );
          })
        ]
      }
    }
  }
};

export default meta;
