export interface CartState {
  isCartReady: boolean;
  isCartOpen: boolean;
  checkoutResult: any | null;
  items: any[];
}

export const initialState: CartState = {
  isCartReady: false,
  isCartOpen: false,
  checkoutResult: null,
  items: []
};

const reducer = (state: CartState, action) => {
  switch (action.type) {
    case 'CART_IS_READY':
      return {
        ...state,
        isCartReady: true
      };
    case 'OPEN_CART':
      return {
        ...state,
        isCartOpen: true,
        timeout: action.timeout
      };
    case 'CLOSE_CART':
      return {
        ...state,
        isCartOpen: false
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      };
    case 'ADD_TO_CART':
      const items = [...state.items];
      const itemToAdd = action.payload.cartItem;
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
      return {
        ...state,
        items
      };
    case 'REMOVE_FROM_CART': {
      const { cartItemIndex } = action.payload;
      const items = [...state.items];
      items.splice(cartItemIndex, 1);
      return {
        ...state,
        items
      };
    }
    case 'UPDATE_CART_ITEM': {
      const { cartItemIndex } = action.payload;
      if (state.items[cartItemIndex]) {
        state.items[cartItemIndex] = {
          ...state.items[cartItemIndex],
          ...action.payload.cartItem
        };
      }
      return {
        ...state,
        items: state.items
      };
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: [...initialState.items]
      };
    case 'SET_CHECKOUT_RESULT':
      return {
        ...state,
        checkoutResult: action.payload.checkoutResult
      };
    case 'CLEAR_CHECKOUT_RESULT':
      return {
        ...state,
        checkoutResult: initialState.checkoutResult
      };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default reducer;
