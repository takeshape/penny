import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productCategoryCollection } from '../fixtures';
import { ProductGrid } from './ProductGrid';

const Meta: ComponentMeta<typeof ProductGrid> = {
  title: 'Features / Product Category / Components / Product Grid',
  component: ProductGrid,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductGrid> = (args) => <ProductGrid {...args} />;

export const _ProductGrid = Template.bind({});
_ProductGrid.args = {
  items: productCategoryCollection.items
};

export default Meta;
