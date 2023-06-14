import { Meta, StoryObj } from '@storybook/react';
import { productCategoryCollection } from '../fixtures';
import { ProductGrid } from './ProductGrid';

const meta: Meta<typeof ProductGrid> = {
  title: 'Features / Product Category / Components / Product Grid',
  component: ProductGrid,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof ProductGrid>;

export const _ProductGrid: Story = {
  args: {
    items: productCategoryCollection.items
  }
};

export const Loading: Story = {
  args: {
    items: [null, null, null]
  }
};

export default meta;
