import { ComponentMeta, ComponentStory } from '@storybook/react';
import { reviewsResponse } from '../queries.fixtures';
import { getReviewList } from '../transforms';
import { Reviews } from './Reviews';

const Meta: ComponentMeta<typeof Reviews> = {
  title: 'Features / Product Page / Components / Reviews',
  component: Reviews,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Reviews> = (args) => <Reviews {...args} />;

export const _Reviews = Template.bind({});
_Reviews.args = {
  reviews: getReviewList(reviewsResponse)
};

export default Meta;
