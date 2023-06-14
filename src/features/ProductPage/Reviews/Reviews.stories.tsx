import { Meta, StoryObj } from '@storybook/react';
import { productPageReviewsIoReviewList } from '../fixtures';
import { Reviews } from './Reviews';

const meta: Meta<typeof Reviews> = {
  title: 'Features / Product Page / Components / Reviews',
  component: Reviews,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Reviews>;

export const _Reviews: Story = {
  args: productPageReviewsIoReviewList
};

export default meta;
