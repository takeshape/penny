import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { Footer } from './Footer';
import { GetFooterQueryData } from './Footer.fixtures';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Features / Footer',
  component: Footer
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const _Footer = Template.bind({});

_Footer.args = GetFooterQueryData.footer;

_Footer.parameters = {
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

export default Meta;
