import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { CreateReview } from './CreateReview';

const meta: Meta<typeof CreateReview> = {
  title: 'Features / Product Page / Components / CreateReview',
  component: CreateReview,
  parameters: {
    layout: 'centered'
  },
  argTypes: { setIsOpen: { action: 'setIsOpen' } }
};

type Story = StoryObj<typeof CreateReview>;

export const Success: Story = {
  args: {
    productName: 'Product Name',
    sku: 'sku',
    isOpen: true
  },
  parameters: {
    msw: {
      handlers: {
        review: [
          graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
            return res(ctx.data({ result: { success: true } }));
          })
        ]
      }
    }
  }
};

export const Loading: Story = {
  args: {
    productName: 'Product Name',
    sku: 'sku',
    isOpen: true
  },
  parameters: {
    msw: {
      handlers: {
        review: [
          graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
            return res(ctx.delay('infinite'), ctx.data({}));
          })
        ]
      }
    }
  }
};

export const Error: Story = {
  args: {
    productName: 'Product Name',
    sku: 'sku',
    isOpen: true
  },
  parameters: {
    msw: {
      handlers: {
        review: [
          graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
            return res(ctx.data({ result: { success: false } }));
          })
        ]
      }
    }
  }
};

export default meta;
