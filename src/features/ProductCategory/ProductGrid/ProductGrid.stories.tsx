import { ComponentMeta, ComponentStory } from '@storybook/react';
import { collectionResponse } from '../queries.fixtures';
import { getCollectionBasic } from '../transforms';
import { ProductGrid } from './ProductGrid';

const collection = getCollectionBasic(collectionResponse, {});

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
  items: collection.items
};

export default Meta;
