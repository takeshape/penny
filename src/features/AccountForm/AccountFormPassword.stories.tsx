import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountFormPassword } from './AccountFormPassword';
import fixtures from './queries.fixtures.json';

const Meta: ComponentMeta<typeof AccountFormPassword> = {
  title: 'Features / Account Form / Password',
  component: AccountFormPassword
};

const Template: ComponentStory<typeof AccountFormPassword> = () => <AccountFormPassword />;

export const Success = Template.bind({});
Success.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
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
        graphql.mutation('CustomerUpdateMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(fixtures.UpdateCustomerMutation.error));
        })
      ]
    }
  }
};

export default Meta;
