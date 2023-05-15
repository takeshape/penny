import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountResetPassword } from './AccountResetPassword';

const Meta: ComponentMeta<typeof AccountResetPassword> = {
  title: 'Features / Account / Reset Password',
  component: AccountResetPassword
};

const Template: ComponentStory<typeof AccountResetPassword> = (args) => <AccountResetPassword {...args} />;

export const ResetSuccess = Template.bind({});

ResetSuccess.args = {
  customerId: '123456',
  resetToken: 'abc123'
};

ResetSuccess.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('ResetPasswordMutation', (req, res, ctx) => {
          return res(ctx.data({ customer: { customerUserErrors: undefined } }));
        })
      ]
    }
  }
};

export const ResetError = Template.bind({});

ResetError.args = {
  customerId: '123456',
  resetToken: 'abc123'
};

ResetError.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('ResetPasswordMutation', (req, res, ctx) => {
          return res(ctx.data({ customer: { customerUserErrors: [{ message: 'Failed to reset password' }] } }));
        })
      ]
    }
  }
};

export const ActivateSuccess = Template.bind({});

ActivateSuccess.args = {
  customerId: '123456',
  activationToken: 'abc123'
};

ActivateSuccess.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('ActivateAccountMutation', (req, res, ctx) => {
          return res(ctx.data({ customer: { customerUserErrors: undefined } }));
        })
      ]
    }
  }
};

export const ActivateError = Template.bind({});

ActivateError.args = {
  customerId: '123456',
  activationToken: 'abc123'
};

ActivateError.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('ActivateAccountMutation', (req, res, ctx) => {
          return res(ctx.data({ customer: { customerUserErrors: [{ message: 'Failed to reset password' }] } }));
        })
      ]
    }
  }
};

export default Meta;
