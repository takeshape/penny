import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components / Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const _Breadcrumbs: Story = {
  args: {
    breadcrumbs: [
      {
        id: '1',
        name: 'First',
        href: '#'
      },
      {
        id: '2',
        name: 'Second',
        href: '#'
      },
      {
        id: '3',
        name: 'Third',
        href: '#'
      }
    ]
  }
};
