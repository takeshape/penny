import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { cartItemsAtom, isCartOpenAtom } from 'services/cart/store';
import { currencyAtom } from 'store';
import { Cart } from './Cart';
import fixtures from './Cart.fixtures.json';

const Meta: ComponentMeta<typeof Cart> = {
  title: 'Cart',
  component: Cart
};

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const _WithItems = Template.bind({});
_WithItems.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom,
      cartItems: cartItemsAtom,
      currency: currencyAtom
    },
    values: {
      isCartOpen: true,
      cartItems: fixtures.cartItems,
      currency: 'usd'
    }
  }
};

export const _Empty = Template.bind({});
_Empty.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom,
      cartItems: cartItemsAtom,
      currency: currencyAtom
    },
    values: {
      isCartOpen: true,
      cartItems: [],
      currency: 'usd'
    }
  }
};

export const _WithGBP = Template.bind({});
_WithGBP.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom,
      cartItems: cartItemsAtom
    },
    values: {
      isCartOpen: true,
      cartItems: fixtures.cartItems.map((i) => ({ ...i, currency: 'gbp' })),
      currency: 'gbp'
    }
  }
};

export default Meta;
