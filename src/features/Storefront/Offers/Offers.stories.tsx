import { Meta, StoryObj } from '@storybook/react';
import { Offers } from './Offers';

const meta: Meta<typeof Offers> = {
  title: 'Features / Storefront / Components / Offers',
  component: Offers,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Offers>;

export default meta;

export const _Offers: Story = {
  args: {
    __typename: 'OffersComponent' as const,
    offers: [
      {
        __typename: 'OffersComponentOffers' as const,
        href: '#',
        name: 'Download the app',
        description: 'Get an exclusive $5 off code'
      },
      {
        __typename: 'OffersComponentOffers' as const,
        href: '#',
        name: "Return when you're ready",
        description: '60 days of free returns'
      },
      {
        __typename: 'OffersComponentOffers' as const,
        href: '#',
        name: 'Sign up for our newsletter',
        description: '15% off your first order'
      }
    ]
  }
};
