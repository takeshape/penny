import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { _BackgroundImage } from 'features/Storefront/BackgroundImage/BackgroundImage.stories';
import { _Hero } from 'features/Storefront/Hero/Hero.stories';
import { _Offers } from 'features/Storefront/Offers/Offers.stories';
import { _Sale } from 'features/Storefront/Sale/Sale.stories';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import { _Collections } from './Collections/Collections.stories';
import Storefront from './Storefront';
import { _TrendingProducts } from './TrendingProducts/TrendingProducts.stories';

const Meta: ComponentMeta<typeof Storefront> = {
  title: 'Storefront',
  component: Storefront
};

const Template: ComponentStory<typeof Storefront> = (args) => <Storefront {...args} />;

export const _Storefront = Template.bind({});
_Storefront.args = {
  ..._Offers.args,
  ..._Testimonials.args,
  ..._Collections.args,
  ..._TrendingProducts.args,
  hero: _Hero.args,
  sale: _Sale.args,
  saleImage: _BackgroundImage.args.image
};

export default Meta;
