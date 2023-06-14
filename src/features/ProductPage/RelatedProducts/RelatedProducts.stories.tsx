import { Meta, StoryObj } from '@storybook/react';
import { productPageRelatedProducts } from '../fixtures';
import { RelatedProducts } from './RelatedProducts';

const meta: Meta<typeof RelatedProducts> = {
  title: 'Features / Product Page / Components / Related Products',
  component: RelatedProducts
};

type Story = StoryObj<typeof RelatedProducts>;

export const _RelatedProducts: Story = {
  args: {
    products: productPageRelatedProducts
  }
};

export default meta;
