import { Meta, StoryObj } from '@storybook/react';
import { cartDiscountCodeAtom, cartItemsAtom, isCartOpenAtom } from 'features/Cart/store';
import { currencyAtom } from 'store';
import { Cart } from './Cart';
import fixtures from './Cart.fixtures.json';

const meta: Meta<typeof Cart> = {
  title: 'Features / Cart',
  component: Cart
};

type Story = StoryObj<typeof Cart>;

export const WithItems: Story = {
  parameters: {
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
  }
};

export const WithRecurringAndOneTime: Story = {
  parameters: {
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
  }
};

export const WithDiscountCode: Story = {
  parameters: {
    jotai: {
      atoms: {
        isCartOpen: isCartOpenAtom,
        cartItems: cartItemsAtom,
        currency: currencyAtom,
        discountCode: cartDiscountCodeAtom
      },
      values: {
        isCartOpen: true,
        cartItems: [...fixtures.cartItems],
        currency: 'USD',
        discountCode: 'FOOD'
      }
    }
  }
};

export const Empty: Story = {
  parameters: {
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
  }
};

export const WithGBP: Story = {
  parameters: {
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
  }
};

export default meta;
