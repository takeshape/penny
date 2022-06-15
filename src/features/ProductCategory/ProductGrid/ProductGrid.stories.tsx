import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductGrid } from './ProductGrid';
import { products } from './ProductGrid.fixture';

const Meta: ComponentMeta<typeof ProductGrid> = {
  title: 'Features / Product Category / Components / Product Grid',
  component: ProductGrid,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductGrid> = (args) => <ProductGrid {...args} />;

export default Meta;

export const _ProductGrid = Template.bind({});
_ProductGrid.args = {
  products
};
