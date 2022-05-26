import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from './Hero';

const Meta: ComponentMeta<typeof Hero> = {
  title: 'Features / Storefront / Components / Hero',
  component: Hero,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const _Hero = Template.bind({});
_Hero.args = {
  text: {
    primary: 'Focus on what matters',
    secondary:
      "All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.",
    button: 'Shop Productivity'
  },
  image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg'
};

export default Meta;
