import type { Dispatch } from 'react';
import { createContext } from 'react';
import type { CartState } from './reducer';
import { initialState } from './reducer';

export const CartStateContext = createContext<CartState>(initialState);
export const CartDispatchContext = createContext<Dispatch<{}>>(() => null);
