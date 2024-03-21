import { errors } from '@/lib/auth/errors';
import { Meta, StoryObj } from '@storybook/react';
import { AuthSignIn } from './AuthSignIn';

const meta: Meta<typeof AuthSignIn> = {
  title: 'Features / Auth / Sign In',
  component: AuthSignIn,
  argTypes: {
    error: {
      control: {
        type: 'select',
        options: Object.keys(errors as Record<string, string>)
      }
    }
  }
};

type Story = StoryObj<typeof AuthSignIn>;

// TODO When we can mock mutations we might want to show more states.

export const Success: Story = {};

export const Error: Story = {
  args: {
    error: { type: 'CredentialsSignin', code: 'credentials' }
  }
};

export default meta;
