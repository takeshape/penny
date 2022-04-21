import { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CartDispatchContext, CartStateContext } from './context';
import reducer, { initialState } from './reducer';
import { setCartIsReady, setCheckoutResult, clearCart } from './actions';
import useLocalStorage from './use-local-storage';

const localStorageKey = 'cartItems';
const stripeCheckoutActionSuccess = 'success';

export const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(localStorageKey, []);

  const {
    replace,
    pathname,
    query: { stripe_checkout_action: action, ...query }
  } = useRouter();

  const persistedCartState = {
    ...initialState,
    items: persistedCartItems || initialState.items
  };

  const [state, dispatch] = useReducer(reducer, persistedCartState);

  useEffect(() => {
    setPersistedCartItems(state.items);
    setCartIsReady(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state.items)]);

  useEffect(() => {
    if (action) {
      setCheckoutResult(dispatch, action);
      replace(pathname, query, { shallow: true });
    }

    if (action === stripeCheckoutActionSuccess) {
      clearCart(dispatch);
    }
  }, [action, pathname, query, replace]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
