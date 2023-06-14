import { Meta, StoryObj } from '@storybook/react';
import { quickAddProduct } from 'features/QuickAdd/fixtures';
import { QuickAdd } from './QuickAdd';

const meta: Meta<typeof QuickAdd> = {
  title: 'Features / Quick Add',
  component: QuickAdd
};

type Story = StoryObj<typeof QuickAdd>;

export const _QuickAdd: Story = {
  args: {
    isOpen: true,
    product: quickAddProduct
  }
};

export default meta;
