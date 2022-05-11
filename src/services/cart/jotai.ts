/**
 * TODO: This file is a temporary, inefficient shim to directly replace the
 * reducer behavior. Cart state should be changed to use an `atomFamily` instead,
 * which will allow more specific renders — only updated cart items would re-render,
 * rather than the entire list everytime.
 *
 * https://codesandbox.io/s/github/pmndrs/jotai/tree/main/examples/todos_with_atomFamily
 * https://jotai.org/docs/utils/atom-family
 */

import type { Stripe_Price, Stripe_Product } from 'types/takeshape';

type CartItem = Stripe_Product & {
  price: Stripe_Price;
  quantity: number;
};

export const addToCart = (cartItems, setCartItems, itemToAdd: CartItem) => {
  const items = [...cartItems];

  const itemAlreadyInCart = items.find(
    (item) => item.id === itemToAdd.id && item.price.recurring === itemToAdd.price.recurring
  );

  if (itemAlreadyInCart) {
    // increase quantity of the item
    const quantity = itemAlreadyInCart.quantity + itemToAdd.quantity;
    items[items.indexOf(itemAlreadyInCart)] = { ...itemToAdd, quantity };
  } else {
    items.push(itemToAdd);
  }

  setCartItems(items);
};

export const removeFromCart = (cartItems, setCartItems, cartItemIndex: number) => {
  const items = [...cartItems];
  items.splice(cartItemIndex, 1);
  setCartItems(items);
};

export const updateCartItem = (cartItems, setCartItems, cartItemIndex: number, cartItem: CartItem) => {
  const items = [...cartItems];
  if (items[cartItemIndex]) {
    items[cartItemIndex] = {
      ...items[cartItemIndex],
      ...cartItem
    };
  }

  setCartItems(items);
};
