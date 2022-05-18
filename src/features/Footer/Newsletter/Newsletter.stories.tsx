import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Newsletter from './Newsletter';
import { EmailSubmissionMutation } from './Newsletter.queries';

const Meta: ComponentMeta<typeof Newsletter> = {
  title: 'Footer / Components / Newsletter',
  component: Newsletter
};

const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter {...args} />;

export const _Newsletter = Template.bind({});
_Newsletter.args = {
  text: {
    primary: 'Subscribe to our newsletter',
    secondary: 'The latest news, articles, and resources, sent to your inbox weekly.',
    button: 'Subscribe'
  }
};
_Newsletter.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: EmailSubmissionMutation,
          variables: { email: 'foo@bar.baz', listId: process.env.NEXT_PUBLIC_DEFAULT_KLAVYIO_LIST_ID }
        },
        result: { data: { Klaviyo_addMembers: { items: [{ id: 'foo' }] } } }
      }
    ]
  }
};

export default Meta;
