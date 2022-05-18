import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { isCartOpenAtom, newCartItemsAtom } from 'store';
import { Cart } from './Cart';

const Meta: ComponentMeta<typeof Cart> = {
  title: 'Cart',
  component: Cart,
  parameters: {
    jotai: {
      atoms: {
        cartItems: newCartItemsAtom
      },
      values: {
        cartItems: [
          {
            id: 'prod_LPvslzaZA4bjRO',
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: '$90.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
            imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
          },
          {
            id: 'prod_LNjQn6SmhBfhkT',
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: '$32.00',
            quantity: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
            imageAlt:
              'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
            interval: 'month',
            intervalCount: 1
          }
        ]
      }
    }
  }
};

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const _Open = Template.bind({});
_Open.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom
    },
    values: {
      isCartOpen: true
    }
  }
};

export const _Closed = Template.bind({});
_Closed.parameters = {
  jotai: {
    atoms: {
      isCartOpen: isCartOpenAtom
    },
    values: {
      isCartOpen: false
    }
  }
};

export default Meta;
