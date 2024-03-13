import { productCategoryCollection } from '@/features/ProductCategory/fixtures';
import { Meta, StoryObj } from '@storybook/react';
import { ProductCategory } from './ProductCategory';

const meta: Meta<typeof ProductCategory> = {
  title: 'Features / Product Category',
  component: ProductCategory,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof ProductCategory>;

export const _ProductCategory: Story = {
  args: {
    header: { text: { primary: productCategoryCollection.name, secondary: productCategoryCollection.descriptionHtml } },
    items: productCategoryCollection.items,
    pagination: {
      setCurrentPage: () => {
        // empty
      }
    }
  }
};

export default meta;
