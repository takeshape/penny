import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  primaryText: 'Focus on what matters',
  secondaryText:
    "All the charts, datepickers, and notifications in the world can't beat checking off some items on a paper card.",
  buttonText: 'Shop Productivity',
  image: {
    filename: 'home-page-02-hero-half-width.jpg',
    path: '06ccc3dc-a9da-4f5b-9142-5a104db52ee3/dev/0c3a5505-a306-40f0-aacd-af0f5b103219/home-page-02-hero-half-width.jpg'
  }
};

export default Meta;
