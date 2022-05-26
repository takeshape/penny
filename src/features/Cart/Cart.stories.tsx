import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { cartItemsAtom, isCartOpenAtom } from 'features/Cart/store';
import { currencyAtom } from 'store';
import { Cart } from './Cart';
import fixtures from './Cart.fixtures.json';

const Meta: ComponentMeta<typeof Cart> = {
  title: 'Cart',
  component: Cart
};

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const WithItems = Template.bind({});
WithItems.parameters = {
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

export const WithRecurringAndOneTime = Template.bind({});
WithRecurringAndOneTime.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom,
      cartItems: cartItemsAtom,
      currency: currencyAtom
    },
    values: {
      isCartOpen: true,
      cartItems: [...fixtures.cartItems, { ...fixtures.cartItems[1], interval: 'none', intervalCount: 0 }],
      currency: 'usd'
    }
  }
};

export const Empty = Template.bind({});
Empty.parameters = {
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

export const WithGBP = Template.bind({});
WithGBP.parameters = {
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
