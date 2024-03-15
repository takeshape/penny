import { quickAddProduct } from '@/features/QuickAdd/fixtures';
import { Meta, StoryObj } from '@storybook/react';
import { QuickAddItem } from './QuickAddItem';

const meta: Meta<typeof QuickAddItem> = {
  title: 'Features / Quick Add Item',
  component: QuickAddItem
};

type Story = StoryObj<typeof QuickAddItem>;

export const _QuickAddItem: Story = {
  args: {
    product: quickAddProduct
  }
};

export default meta;
