import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import Footer from './Footer';
import { GetFooterQueryData } from './Footer.fixtures';

const Meta: ComponentMeta<typeof Footer> = {
  title: 'Features / Footer',
  component: Footer
};

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const _Footer = Template.bind({});
_Footer.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.query('GetFooter', (req, res, ctx) => {
          return res(ctx.data(GetFooterQueryData));
        }),
        graphql.mutation('NewsletterEmailSubmission', (req, res, ctx) => {
          return res(ctx.data({ Klaviyo_addMembers: { items: [{ id: 'foo' }] } }));
        })
      ]
    }
  }
};

export default Meta;
