import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './Footer';
import { GetFooterQueryData } from './Footer.fixtures';
import { GetFooterQuery } from './Footer.queries';
import { EmailSubmissionMutation } from './Newsletter/Newsletter.queries';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Features / Footer',
  component: Footer
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const _Footer = Template.bind({});
_Footer.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GetFooterQuery
        },
        result: { data: GetFooterQueryData }
      },
      {
        request: {
          query: EmailSubmissionMutation,
          variables: { email: 'foo@bar.baz', listId: undefined }
        },
        result: { data: { Klaviyo_addMembers: { items: [{ id: 'foo' }] } } }
      }
    ]
  }
};

export default Meta;
