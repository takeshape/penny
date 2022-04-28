import { createContext } from 'react';
import type { CartState } from './reducer';
import { initialState } from './reducer';

export const CartStateContext = createContext<CartState>(initialState);

export default CartStateContext;
