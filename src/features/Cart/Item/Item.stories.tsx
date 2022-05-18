import type { ComponentMeta } from '@storybook/react';
import { atom } from 'jotai';
import fixtures from '../Cart.fixtures.json';
import { Item } from './Item';

const Meta: ComponentMeta<typeof Item> = {
  title: 'Cart / Components / Item',
  component: Item,
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

const Template = (args) => <Item {...args} />;

export const _Standard = Template.bind({});
_Standard.args = {
  atom: atom(fixtures.cartItems[0])
};

export const _PlaceholderImage = Template.bind({});
_PlaceholderImage.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    imageSrc: '/images/default-product-image.webp'
  })
};

export const _LongName = Template.bind({});
_LongName.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    name: 'Super Special Awesome Magic Rainbow Coat'
  })
};

export const _LongPrice = Template.bind({});
_LongPrice.args = {
  atom: atom({
    ...fixtures.cartItems[0],
    name: 'Super Special Awesome Magic Rainbow Coat',
    unitAmount: 6969420
  })
};

export const _RecurringPurchase = Template.bind({});
_RecurringPurchase.args = {
  atom: atom(fixtures.cartItems[1])
};

export default Meta;
