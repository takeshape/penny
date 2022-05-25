import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { _Filters } from './Filters/Filters.stories';
import { _Header } from './Header/Header.stories';
import { _Pagination } from './Pagination/Pagination.stories';
import { ProductCategory } from './ProductCategory';
import { _ProductGrid } from './ProductGrid/ProductGrid.stories';

const Meta: ComponentMeta<typeof ProductCategory> = {
  title: 'Product Category',
  component: ProductCategory,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductCategory> = (args) => <ProductCategory {...args} />;

export default Meta;

export const _ProductCategory = Template.bind({});
_ProductCategory.args = {
  ..._Header.args,
  ..._Filters.args,
  ..._ProductGrid.args,
  ..._Pagination.args
};
