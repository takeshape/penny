import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaginationWithPageList } from './PaginationWithPageList';

const Meta: ComponentMeta<typeof PaginationWithPageList> = {
  title: 'Features / Product Category / Components / PaginationWithPageList',
  component: PaginationWithPageList,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof PaginationWithPageList> = (args) => <PaginationWithPageList {...args} />;

export const _PaginationWithPageList = Template.bind({});
_PaginationWithPageList.args = {
  pagination: {
    pageCount: 10,
    currentPage: 3,
    setCurrentPage: action('Set Current Page')
  }
};

export default Meta;
