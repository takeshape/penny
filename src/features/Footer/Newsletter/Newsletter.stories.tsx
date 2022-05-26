import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Newsletter from './Newsletter';
import { EmailSubmissionMutation } from './Newsletter.queries';

const Meta: ComponentMeta<typeof Newsletter> = {
  title: 'Features / Footer / Components / Newsletter',
  component: Newsletter
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
  apolloClient: {
    mocks: [
      {
        request: {
          query: EmailSubmissionMutation,
          variables: { email: 'foo@bar.baz', listId: process.env.NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID }
        },
        result: { data: { Klaviyo_addMembers: { items: [{ id: 'foo' }] } } }
      }
    ]
  }
};

export const Error = Template.bind({});
Error.args = {
  ...Success.args
};
Error.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: EmailSubmissionMutation,
          variables: { email: 'foo@bar.baz', listId: process.env.NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID }
        },
        error: {
          message: 'Oops! Something went wrong.'
        }
      }
    ]
  }
};

export default Meta;
