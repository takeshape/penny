import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Offers } from './Offers';

const Meta: ComponentMeta<typeof Offers> = {
  title: 'Features / Storefront / Components / Offers',
  component: Offers,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Offers> = (args) => <Offers {...args} />;

export default Meta;

export const _Offers = Template.bind({});
_Offers.args = {
  offers: [
    {
      href: '#',
      name: 'Download the app',
      description: 'Get an exclusive $5 off code'
    },
    {
      href: '#',
      name: "Return when you're ready",
      description: '60 days of free returns'
    },
    {
      href: '#',
      name: 'Sign up for our newsletter',
      description: '15% off your first order'
    }
  ]
};
