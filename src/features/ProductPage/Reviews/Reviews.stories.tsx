import { ComponentMeta, ComponentStory } from '@storybook/react';
import { reviewsIoProductReviewsToReviewList } from 'transforms/reviewsIo';
import { reviewsResponse } from '../queries.fixtures';
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
  reviews: reviewsIoProductReviewsToReviewList(reviewsResponse.reviews)
};

export default Meta;
