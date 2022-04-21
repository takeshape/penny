import { useContext } from 'react';
import { CartStateContext, CartDispatchContext } from './context';
import {
  toggleCart,
  openCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
  setCheckoutResult,
  clearCheckoutResult,
  closeCart
} from './actions';

export const useCart = () => {
  const state = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  return {
    ...state,
    actions: {
      toggleCart: (...args) => toggleCart(dispatch, ...args),
      openCart: (...args) => openCart(dispatch, ...args),
      closeCart: (...args) => closeCart(dispatch, ...args),
      addToCart: (...args) => addToCart(dispatch, ...args),
      removeFromCart: (...args) => removeFromCart(dispatch, ...args),
      updateCartItem: (...args) => updateCartItem(dispatch, ...args),
      clearCart: (...args) => clearCart(dispatch, ...args),
      setCheckoutResult: (...args) => setCheckoutResult(dispatch, ...args),
      clearCheckoutResult: (...args) => clearCheckoutResult(dispatch, ...args)
    }
  };
};

export default useCart;
