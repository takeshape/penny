import { addToCartAtom, isCartOpenAtom } from 'features/Cart/store';
import { AddToCartInput } from 'features/Cart/types';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';

export type AddToCartHookProps = AddToCartInput;

export type AddToCartHookOptions = {
  shouldOpenCart: boolean;
};

export function useAddToCart(
  props: AddToCartHookProps,
  { shouldOpenCart }: AddToCartHookOptions = { shouldOpenCart: true }
) {
  const _addToCart = useSetAtom(addToCartAtom);
  const setIsCartOpen = useSetAtom(isCartOpenAtom);

  const addToCart = useCallback(() => {
    _addToCart(props);

    if (shouldOpenCart) {
      setIsCartOpen(true);
    }
  }, [_addToCart, props, setIsCartOpen, shouldOpenCart]);

  return addToCart;
}
