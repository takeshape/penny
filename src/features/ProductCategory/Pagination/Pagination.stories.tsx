import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from './Pagination';

const Meta: ComponentMeta<typeof Pagination> = {
  title: 'Product Category / Components / Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export default Meta;

export const _Pagination = Template.bind({});
_Pagination.args = {
  pagination: {
    pageCount: 10,
    currentPage: 3,
    setCurrentPage: action('Set Current Page')
  }
};
