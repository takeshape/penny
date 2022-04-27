export const toggleCart = (dispatch) => {
  return dispatch({
    type: 'TOGGLE_CART'
  });
};

export const openCart = (dispatch, timeout) => {
  return dispatch({
    type: 'OPEN_CART',
    payload: {
      timeout
    }
  });
};

export const closeCart = (dispatch) => {
  return dispatch({
    type: 'CLOSE_CART'
  });
};

export const addToCart = (dispatch, cartItem) => {
  return dispatch({
    type: 'ADD_TO_CART',
    payload: {
      cartItem
    }
  });
};

export const removeFromCart = (dispatch, cartItemIndex) => {
  return dispatch({
    type: 'REMOVE_FROM_CART',
    payload: {
      cartItemIndex
    }
  });
};

export const updateCartItem = (dispatch, cartItemIndex, cartItem) => {
  return dispatch({
    type: 'UPDATE_CART_ITEM',
    payload: {
      cartItemIndex,
      cartItem
    }
  });
};

export const clearCart = (dispatch) => {
  return dispatch({
    type: 'CLEAR_CART'
  });
};

export const setCartIsReady = (dispatch) => {
  return dispatch({
    type: 'CART_IS_READY'
  });
};

export const setCheckoutResult = (dispatch, checkoutResult) => {
  return dispatch({
    type: 'SET_CHECKOUT_RESULT',
    payload: {
      checkoutResult
    }
  });
};

export const clearCheckoutResult = (dispatch) => {
  return dispatch({
    type: 'CLEAR_CHECKOUT_RESULT'
  });
};
