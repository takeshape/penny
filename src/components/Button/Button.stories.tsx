import { EnvelopeIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: {
      action: 'Click'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Button'
  }
};

export const Clear: Story = {
  args: {
    color: 'clear',
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'large',
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'small',
    children: 'Button'
  }
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
    children: 'Button'
  }
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true
  }
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <EnvelopeIcon className="h-4 w-4" aria-hidden="true" /> Subscribe
      </>
    )
  }
};
