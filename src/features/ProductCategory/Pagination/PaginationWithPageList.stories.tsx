import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { PaginationWithPageList } from './PaginationWithPageList';

const meta: Meta<typeof PaginationWithPageList> = {
  title: 'Features / Product Category / Components / PaginationWithPageList',
  component: PaginationWithPageList,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof PaginationWithPageList>;

export const _PaginationWithPageList: Story = {
  args: {
    pagination: {
      pageCount: 10,
      currentPage: 3,
      setCurrentPage: action('Set Current Page')
    }
  }
};

export default meta;
