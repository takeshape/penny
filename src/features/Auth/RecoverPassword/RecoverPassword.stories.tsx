import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import { AuthRecoverPassword } from './RecoverPassword';

const Meta: ComponentMeta<typeof AuthRecoverPassword> = {
  title: 'Features / Auth / Components / Recover Password',
  component: AuthRecoverPassword
};

const Template = (args) => <AuthRecoverPassword {...args} />;

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
