import type { Dispatch } from 'react';
import { createContext } from 'react';

const CartDispatchContext = createContext<Dispatch<{}>>(() => null);

export default CartDispatchContext;
