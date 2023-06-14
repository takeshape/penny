import { Meta, StoryObj } from '@storybook/react';
import { productPageProduct, productPageReviewHighlights } from '../fixtures';
import { Product } from './Product';

const breadcrumbs = [
  { id: '1', name: 'Men', href: '#' },
  { id: '2', name: 'Clothing', href: '#' }
];

const meta: Meta<typeof Product> = {
  title: 'Features / Product Page / Components / Product',
  component: Product,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Product>;

export const WithImageGrid: Story = {
  args: {
    component: 'withImageGrid',
    breadcrumbs,
    product: productPageProduct,
    reviewHighlights: productPageReviewHighlights,
    showFeaturedReviews: true,
    showReviewsLink: true
  }
};

export const WithImage: Story = {
  args: {
    component: 'withImage',
    breadcrumbs,
    product: productPageProduct,
    reviewHighlights: productPageReviewHighlights,
    showFeaturedReviews: true,
    showReviewsLink: true
  }
};

export default meta;
