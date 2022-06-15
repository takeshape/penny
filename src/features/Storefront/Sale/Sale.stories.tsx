import { ComponentMeta, ComponentStory } from '@storybook/react';
import Sale from './Sale';

const Meta: ComponentMeta<typeof Sale> = {
  title: 'Features / Storefront / Components / Sale',
  component: Sale,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Sale> = (args) => <Sale {...args} />;

export const _Sale = Template.bind({});
_Sale.args = {
  text: {
    primary: 'Get 25% off during our one-time sale',
    secondary:
      "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
    button: 'Get access to our one-time sale'
  }
};

export default Meta;
