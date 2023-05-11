import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountInactiveForm } from './AuthAccountInactive';

const Meta: ComponentMeta<typeof AccountInactiveForm> = {
  title: 'Features / Auth / Account Inactive',
  component: AccountInactiveForm,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountInactiveForm> = (args) => <AccountInactiveForm {...args} />;

export const _AccountInactiveForm = Template.bind({});

_AccountInactiveForm.args = {
  customer: {
    id: '1234',
    email: 'foo@bar.com'
  },
  isOpen: true
};

_AccountInactiveForm.parameters = {
  msw: {
    handlers: {
      customer: [
        graphql.mutation('SendCustomerInviteMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data({ customerInvite: { customer_invite: { from: 'me@you.com' } } }));
        })
      ]
    }
  }
};

export default Meta;
