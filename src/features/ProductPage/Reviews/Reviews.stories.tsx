import { ComponentMeta, ComponentStory } from '@storybook/react';
import { reviewsResponse } from '../queries.fixtures';
import { getReviewList } from '../transforms';
import ProductPageReviews from './Reviews';

const Meta: ComponentMeta<typeof ProductPageReviews> = {
  title: 'Features / Product Page / Components / Reviews',
  component: ProductPageReviews,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductPageReviews> = (args) => <ProductPageReviews {...args} />;

export const _Reviews = Template.bind({});
_Reviews.args = {
  reviews: getReviewList(reviewsResponse)
};

export default Meta;
