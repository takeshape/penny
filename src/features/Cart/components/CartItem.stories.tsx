import { ComponentMeta } from '@storybook/react';
import { atom } from 'jotai';
import fixtures from '../Cart.fixtures.json';
import { CartItem } from './CartItem';

const Meta: ComponentMeta<typeof CartItem> = {
  title: 'Features / Cart / Components / Cart Item',
  component: CartItem,
  decorators: [
    (Story) => (
      <div className="w-screen max-w-md">
        <ul className="-my-6 divide-y divide-gray-200">
          <li className="flex py-6">
            <Story />
          </li>
        </ul>
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  }
};

const Template = (args) => <CartItem {...args} />;

export const OneTimePurchase = Template.bind({});
OneTimePurchase.args = {
  atom: atom(fixtures.cartItems[0])
};

export const RecurringPurchase = Template.bind({});
RecurringPurchase.args = {
  atom: atom(fixtures.cartItems[1])
};

export const PlaceholderImage = Template.bind({});
PlaceholderImage.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    imageSrc: '/images/default-product-image.webp'
  })
};

export const LongName = Template.bind({});
LongName.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    name: 'Super Special Awesome Magic Rainbow Coat'
  })
};

export const LongPrice = Template.bind({});
LongPrice.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    name: 'Super Special Awesome Magic Rainbow Coat',
    unitAmount: 6969420
  })
};

export default Meta;
