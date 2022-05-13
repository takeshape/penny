import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Testimonials from 'features/Storefront/Testimonials/Testimonials';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import Sale from '../Sale/Sale';
import { _Sale } from '../Sale/Sale.stories';
import BackgroundImage from './BackgroundImage';

const Meta: ComponentMeta<typeof BackgroundImage> = {
  title: 'Storefront / Components / Background Image',
  component: BackgroundImage
};

const Template: ComponentStory<typeof BackgroundImage> = (args) => (
  <BackgroundImage {...args}>
    <Sale {..._Sale.args} />
    <Testimonials {..._Testimonials.args} />
  </BackgroundImage>
);

export const _BackgroundImage = Template.bind({});
_BackgroundImage.args = {
  image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg'
};

export default Meta;
