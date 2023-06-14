import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Features / Product Category / Components / Header',
  component: Header,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Header>;

export default meta;

export const _Header: Story = {
  args: {
    header: {
      text: {
        primary: 'Workspace',
        secondary:
          "The secret to a tidy desk? Don't get rid of anything, just put it in really really nice looking containers."
      }
    }
  }
};
