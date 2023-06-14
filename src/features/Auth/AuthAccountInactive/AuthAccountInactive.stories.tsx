import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountInactiveForm } from './AuthAccountInactive';

const meta: Meta<typeof AccountInactiveForm> = {
  title: 'Features / Auth / Account Inactive',
  component: AccountInactiveForm,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof AccountInactiveForm>;

export const _AccountInactiveForm: Story = {
  args: {
    customer: {
      id: '1234',
      email: 'foo@bar.com'
    },
    isOpen: true
  },
  parameters: {
    msw: {
      handlers: {
        customer: [
          graphql.mutation('SendCustomerInviteMutation', (req, res, ctx) => {
            return res(ctx.delay(1000), ctx.data({ customerInvite: { customer_invite: { from: 'me@you.com' } } }));
          })
        ]
      }
    }
  }
};

export default meta;
