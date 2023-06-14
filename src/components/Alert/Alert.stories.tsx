import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components / Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story) => <div className="w-screen max-w-md">{Story()}</div>]
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    primaryText: 'Something Informational',
    secondaryText: 'Here is some useful info.',
    status: 'info'
  }
};

export const Warn: Story = {
  args: {
    primaryText: 'Something Concerning',
    secondaryText: 'Here is some concerning info.',
    status: 'warn'
  }
};

export const Success: Story = {
  args: {
    primaryText: 'Something Succesful',
    secondaryText: 'Here is some successful info!',
    status: 'success'
  }
};

export const Error: Story = {
  args: {
    primaryText: 'Something Awful',
    secondaryText: 'Here is some terrible news.',
    status: 'error'
  }
};

export const WithList: Story = {
  args: {
    primaryText: 'Something Awful',
    secondaryText: ['Here is some terrible news.', 'And something else bad.'],
    status: 'error'
  }
};

export const WithActions: Story = {
  args: {
    primaryText: 'Order completed',
    secondaryText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    status: 'success',
    actions: [
      {
        text: 'View status',
        onClick: () => {}
      },
      {
        text: 'Dismiss',
        onClick: () => {}
      }
    ]
  }
};
