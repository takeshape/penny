import { useContext } from 'react';
import {
  addToCart,
  clearCart,
  clearCheckoutResult,
  closeCart,
  openCart,
  removeFromCart,
  setCheckoutResult,
  toggleCart,
  updateCartItem
} from './actions';
import { CartDispatchContext, CartStateContext } from './context';

export const useCart = () => {
  const state = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  return {
    ...state,
    actions: {
      toggleCart: () => toggleCart(dispatch),
      openCart: (timeout) => openCart(dispatch, timeout),
      closeCart: () => closeCart(dispatch),
      addToCart: (cartItem) => addToCart(dispatch, cartItem),
      removeFromCart: (cartItemIndex) => removeFromCart(dispatch, cartItemIndex),
      updateCartItem: (cartItemIndex, cartItem) => updateCartItem(dispatch, cartItemIndex, cartItem),
      clearCart: () => clearCart(dispatch),
      setCheckoutResult: (checkoutResult) => setCheckoutResult(dispatch, checkoutResult),
      clearCheckoutResult: () => clearCheckoutResult(dispatch)
    }
  };
};

export default useCart;
