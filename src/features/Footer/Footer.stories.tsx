import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { Footer } from './Footer';
import { GetFooterQueryData } from './Footer.fixtures';

const meta: Meta<typeof Footer> = {
  title: 'Features / Footer',
  component: Footer
};

type Story = StoryObj<typeof Footer>;

export const _Footer: Story = {
  args: GetFooterQueryData.footer,
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

export default meta;
