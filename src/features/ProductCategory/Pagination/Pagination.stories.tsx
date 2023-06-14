import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Features / Product Category / Components / Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Pagination>;

export default meta;

export const _Pagination: Story = {
  args: {
    pagination: {
      setCurrentPage: action('Set Current Page')
    }
  }
};
