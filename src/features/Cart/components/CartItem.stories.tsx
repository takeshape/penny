import { Meta, StoryObj } from '@storybook/react';
import { atom } from 'jotai';
import fixtures from '../Cart.fixtures.json';
import { CartItem as TCartItem } from '../types';
import { CartItem } from './CartItem';

const cartItems = fixtures.cartItems as TCartItem[];

const meta: Meta<typeof CartItem> = {
  title: 'Features / Cart / Components / Cart Item',
  component: CartItem,
  decorators: [
    (Story) => (
      <div className="w-screen max-w-md">
        <ul className="-my-6 divide-y divide-mainText-200">
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

type Story = StoryObj<typeof CartItem>;

export const OneTimePurchase: Story = {
  args: {
    atom: atom(cartItems[0])
  }
};

export const RecurringPurchase: Story = {
  args: {
    atom: atom(cartItems[1])
  }
};

export const PlaceholderImage: Story = {
  args: {
    atom: atom({
      ...cartItems[0],
      imageSrc: '/images/default-product-image.webp'
    })
  }
};

export const LongName: Story = {
  args: {
    atom: atom({
      ...cartItems[0],
      name: 'Super Special Awesome Magic Rainbow Coat'
    })
  }
};

export const LongPrice: Story = {
  args: {
    atom: atom({
      ...cartItems[0],
      name: 'Super Special Awesome Magic Rainbow Coat',
      unitAmount: 6969420
    })
  }
};

export default meta;
