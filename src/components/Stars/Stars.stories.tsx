import { Meta, StoryObj } from '@storybook/react';
import Stars from './Stars';

const meta: Meta<typeof Stars> = {
  title: 'Components / Stars',
  component: Stars,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    scale: {
      type: 'number'
    }
  }
};

type Story = StoryObj<typeof Stars>;

export const _Stars: Story = {
  args: {
    rating: 3
  }
};

export default meta;
