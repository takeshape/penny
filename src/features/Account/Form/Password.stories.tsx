import { ComponentMeta } from '@storybook/react';
import { graphql } from 'msw';
import fixtures from 'queries.fixtures.json';
import { AccountFormPassword } from './Password';

const Meta: ComponentMeta<typeof AccountFormPassword> = {
  title: 'Features / Account / Form / Password',
  component: AccountFormPassword
};

const Template = (args) => <AccountFormPassword {...args} />;

export const Success = Template.bind({});
Success.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('UpdateCustomerMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.ok));
        })
      ]
    }
  }
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('UpdateCustomerMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
        })
      ]
    }
  }
};

export default Meta;
