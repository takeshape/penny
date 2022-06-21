import { ComponentMeta, ComponentStory } from '@storybook/react';
import { collectionResponse } from '../queries.fixtures';
import { getCollection } from '../transforms';
import { ProductGrid } from './ProductGrid';

const collection = getCollection(collectionResponse, {});

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
  products: collection.items
};

export default Meta;
