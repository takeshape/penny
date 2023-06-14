import { Meta, StoryObj } from '@storybook/react';
import { AuthSignOut } from './AuthSignOut';

const meta: Meta<typeof AuthSignOut> = {
  title: 'Features / Auth / Sign Out',
  component: AuthSignOut,
  argTypes: {
    signOut: {
      action: 'Sign Out'
    }
  }
};

type Story = StoryObj<typeof AuthSignOut>;

export const SignOut: Story = {};

export default meta;
