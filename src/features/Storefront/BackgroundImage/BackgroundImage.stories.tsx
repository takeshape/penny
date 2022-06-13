import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Testimonials from 'features/Storefront/Testimonials/Testimonials';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import Sale from '../Sale/Sale';
import { _Sale } from '../Sale/Sale.stories';
import BackgroundImage from './BackgroundImage';

const Meta: ComponentMeta<typeof BackgroundImage> = {
  title: 'Features / Storefront / Components / Background Image',
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
  image: {
    path: '06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/36829c6c-5112-4c6c-91a6-34b251fb565c/home-page-02-sale-full-width.jpg'
  }
};

export default Meta;
