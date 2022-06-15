import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { AuthCreateAccount } from './CreateAccount';

const Meta: ComponentMeta<typeof AuthCreateAccount> = {
  title: 'Features / Auth / Components / Create Account',
  component: AuthCreateAccount,
  argTypes: {
    signIn: {
      action: 'Sign In'
    }
  }
};

const Template = (args) => <AuthCreateAccount {...args} />;

export const Success = Template.bind({});
Success.parameters = {
  msw: {
    handlers: {
      createAccount: [
        graphql.mutation('CreateCustomerMutation', (req, res, ctx) => {
          return res(ctx.data({ customerCreate: { customer: { id: '12345' } } }));
        })
      ]
    }
  }
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: {
      createAccount: [
        graphql.mutation('CreateCustomerMutation', (req, res, ctx) => {
          return res(ctx.errors([{ message: 'An account with that email already exists' }]));
        })
      ]
    }
  }
};

export default Meta;
