import { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components / Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Logo>;

export const _Logo: Story = {
  args: {
    className: 'h-8 w-8'
  }
};

export default meta;
