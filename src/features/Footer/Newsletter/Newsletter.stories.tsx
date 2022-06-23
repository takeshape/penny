import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { Newsletter } from './Newsletter';

const Meta: ComponentMeta<typeof Newsletter> = {
  title: 'Features / Footer / Components / Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter {...args} />;

export const Success = Template.bind({});
Success.args = {
  text: {
    primary: 'Subscribe to our newsletter',
    secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
    button: 'Subscribe'
  }
};
Success.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
          return res(ctx.data({ addMembers: { items: [{ id: 'foo' }] } }));
        })
      ]
    }
  }
};

export const Loading = Template.bind({});
Loading.args = {
  ...Success.args
};
Loading.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
          return res(ctx.delay('infinite'), ctx.data({}));
        })
      ]
    }
  }
};

export const Error = Template.bind({});
Error.args = {
  ...Success.args
};
Error.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
          return res(ctx.errors([{ message: 'Oops! Something went wrong' }]));
        })
      ]
    }
  }
};

export default Meta;
