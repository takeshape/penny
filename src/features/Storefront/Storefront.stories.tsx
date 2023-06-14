import { Meta, StoryObj } from '@storybook/react';
import { _BackgroundImage } from 'features/Storefront/BackgroundImage/BackgroundImage.stories';
import { _Collection } from 'features/Storefront/Collection/Collection.stories';
import { _Collections } from 'features/Storefront/Collections/Collections.stories';
import { _Hero } from 'features/Storefront/Hero/Hero.stories';
import { _Offers } from 'features/Storefront/Offers/Offers.stories';
import { _Sale } from 'features/Storefront/Sale/Sale.stories';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import { Storefront } from './Storefront';

const meta: Meta<typeof Storefront> = {
  title: 'Features / Storefront',
  component: Storefront
};

type Story = StoryObj<typeof Storefront>;

export const _Storefront: Story = {
  args: {
    storefront: {
      components: [
        // Seemingly irresolvable type errors with this one
        { __typename: 'OffersComponent', ..._Offers.args } as any,
        { __typename: 'HeroComponent', ..._Hero.args },
        { __typename: 'CollectionComponent', ..._Collection.args },
        { __typename: 'CollectionsComponent', ..._Collections.args },
        {
          __typename: 'BackgroundImageComponent',
          ..._BackgroundImage.args,
          components: [
            {
              __typename: 'SaleComponent',
              ..._Sale.args
            },
            {
              __typename: 'TestimonialsComponent',
              ..._Testimonials.args
            }
          ]
        }
      ]
    }
  }
};

export default meta;
