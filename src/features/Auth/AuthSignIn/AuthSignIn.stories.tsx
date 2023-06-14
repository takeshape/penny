import { Meta, StoryObj } from '@storybook/react';
import { AuthSignIn, errors } from './AuthSignIn';

const meta: Meta<typeof AuthSignIn> = {
  title: 'Features / Auth / Sign In',
  component: AuthSignIn,
  argTypes: {
    signIn: {
      action: 'Sign In'
    },
    error: {
      control: {
        type: 'select',
        options: Object.keys(errors)
      }
    }
  }
};

type Story = StoryObj<typeof AuthSignIn>;

/**
 * TODO: When we can mock mutations we might want to show more states.
 */

export const Success: Story = {};

export const Error: Story = {
  args: {
    error: { code: 'CredentialsSignin' }
  }
};

export default meta;
