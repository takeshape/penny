import { ComponentMeta, ComponentStory } from '@storybook/react';
import { _BackgroundImage } from 'features/Storefront/BackgroundImage/BackgroundImage.stories';
import { _Collections } from 'features/Storefront/Collections/Collections.stories';
import { _Hero } from 'features/Storefront/Hero/Hero.stories';
import { _Offers } from 'features/Storefront/Offers/Offers.stories';
import { _Sale } from 'features/Storefront/Sale/Sale.stories';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import { _TrendingProducts } from 'features/Storefront/TrendingProducts/TrendingProducts.stories';
import { products } from '../ProductCategory/ProductGrid/ProductGrid.fixture';
import { Storefront } from './Storefront';

const Meta: ComponentMeta<typeof Storefront> = {
  title: 'Features / Storefront',
  component: Storefront
};

const Template: ComponentStory<typeof Storefront> = (args) => <Storefront {...args} />;

export const _Storefront = Template.bind({});
_Storefront.args = {
  products,
  storefront: {
    components: [
      { __typename: 'OffersComponent', ..._Offers.args },
      { __typename: 'HeroComponent', ..._Hero.args },
      { __typename: 'TrendingProductsComponent' },
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
};

_Storefront.parameters = {
  ..._TrendingProducts.parameters
};

export default Meta;
