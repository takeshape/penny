import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AuthRecoverPassword } from './AuthRecoverPassword';

const Meta: ComponentMeta<typeof AuthRecoverPassword> = {
  title: 'Features / Auth / Recover Password',
  component: AuthRecoverPassword
};

const Template: ComponentStory<typeof AuthRecoverPassword> = (args) => <AuthRecoverPassword {...args} />;

export const Success = Template.bind({});
Success.parameters = {
  msw: {
    handlers: {
      recoverPassword: [
        graphql.mutation('RecoverCustomerPasswordMutation', (req, res, ctx) => {
          return res(ctx.data({ customerRecover: { customerUserErrors: undefined } }));
        })
      ]
    }
  }
};

export const Error = Template.bind({});
Error.parameters = {
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
};

export default Meta;
