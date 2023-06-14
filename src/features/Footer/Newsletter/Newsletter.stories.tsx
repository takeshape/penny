import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { Newsletter } from './Newsletter';

const meta: Meta<typeof Newsletter> = {
  title: 'Features / Footer / Components / Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Newsletter>;

export const Success: Story = {
  args: {
    text: {
      primary: 'Subscribe to our newsletter',
      secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
      button: 'Subscribe'
    }
  },
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
            return res(ctx.data({ addMembers: { items: [{ id: 'foo' }] } }));
          })
        ]
      }
    }
  }
};

export const Loading: Story = {
  args: {
    ...Success.args
  },
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
            return res(ctx.delay('infinite'), ctx.data({}));
          })
        ]
      }
    }
  }
};

export const Error: Story = {
  args: {
    ...Success.args
  },
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
            return res(ctx.errors([{ message: 'Oops! Something went wrong' }]));
          })
        ]
      }
    }
  }
};

export default meta;
