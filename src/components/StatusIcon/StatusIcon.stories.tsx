import { Meta, StoryObj } from '@storybook/react';
import { StatusIcon } from './StatusIcon';

const meta: Meta<typeof StatusIcon> = {
  title: 'Components / Status Icons',
  component: StatusIcon,
  parameters: {
    layout: 'centered'
  },
  args: {
    size: 6
  }
};

type Story = StoryObj<typeof StatusIcon>;

export const Info: Story = {
  args: {
    status: 'info'
  }
};

export const Warn: Story = {
  args: {
    status: 'warn'
  }
};

export const Success: Story = {
  args: {
    status: 'success'
  }
};

export const Error: Story = {
  args: {
    status: 'error'
  }
};

export default meta;
