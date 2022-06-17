import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productResponse, reviewsResponse } from '../queries.fixtures';
import { getProduct, getReviewHighlights } from '../transforms';
import { Product } from './Product';

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const Meta: ComponentMeta<typeof Product> = {
  title: 'Features / Product Page / Components / Product',
  component: Product,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const WithImageGrid = Template.bind({});
WithImageGrid.args = {
  component: 'withImageGrid',
  breadcrumbs,
  product: getProduct(productResponse),
  reviewHighlights: getReviewHighlights(reviewsResponse),
  showFeaturedReviews: true
};

export const WithImage = Template.bind({});
WithImage.args = {
  component: 'withImage',
  breadcrumbs,
  product: getProduct(productResponse),
  reviewHighlights: getReviewHighlights(reviewsResponse),
  showFeaturedReviews: true
};

export default Meta;
