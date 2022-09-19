import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AuthCreateAccount } from './AuthCreateAccount';

const Meta: ComponentMeta<typeof AuthCreateAccount> = {
  title: 'Features / Auth / Create Account',
  component: AuthCreateAccount,
  argTypes: {
    signIn: {
      action: 'Sign In'
    }
  }
};

const Template: ComponentStory<typeof AuthCreateAccount> = (args) => <AuthCreateAccount {...args} />;

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
