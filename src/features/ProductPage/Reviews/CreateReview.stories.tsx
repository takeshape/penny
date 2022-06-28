import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { CreateReview } from './CreateReview';

const Meta: ComponentMeta<typeof CreateReview> = {
  title: 'Features / Product Page / Components / CreateReview',
  component: CreateReview,
  parameters: {
    layout: 'centered'
  },
  argTypes: { setIsOpen: { action: 'setIsOpen' } }
};

const Template: ComponentStory<typeof CreateReview> = (args) => <CreateReview {...args} />;

export const Success = Template.bind({});
Success.args = {
  productName: 'Product Name',
  sku: 'sku',
  isOpen: true
};
Success.parameters = {
  msw: {
    handlers: {
      review: [
        graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
          return res(ctx.data({ result: { success: true } }));
        })
      ]
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
  productName: 'Product Name',
  sku: 'sku',
  isOpen: true
};
Loading.parameters = {
  msw: {
    handlers: {
      review: [
        graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
          return res(ctx.delay('infinite'), ctx.data({}));
        })
      ]
    }
  }
};

export const Error = Template.bind({});
Error.args = {
  productName: 'Product Name',
  sku: 'sku',
  isOpen: true
};
Error.parameters = {
  msw: {
    handlers: {
      review: [
        graphql.mutation('CreateMyProductReviewMutation', (req, res, ctx) => {
          return res(ctx.data({ result: { success: false } }));
        })
      ]
    }
  }
};

export default Meta;
