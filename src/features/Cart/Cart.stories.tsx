import { ComponentMeta, ComponentStory } from '@storybook/react';
import { cartItemsAtom, isCartOpenAtom } from 'features/Cart/store';
import { currencyAtom } from 'store';
import { Cart } from './Cart';
import fixtures from './Cart.fixtures.json';

const Meta: ComponentMeta<typeof Cart> = {
  title: 'Features / Cart',
  component: Cart
};

const Template: ComponentStory<typeof Cart> = () => <Cart />;

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
      currency: 'USD'
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
      currency: 'USD'
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
      currency: 'USD'
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
      cartItems: fixtures.cartItems.map((i) => ({ ...i, currency: 'GBP' })),
      currency: 'GBP'
    }
  }
};

export default Meta;
