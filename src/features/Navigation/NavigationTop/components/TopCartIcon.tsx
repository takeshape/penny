'use client';

import { cartQuantityAtom, isCartOpenAtom } from '@/features/Cart/store';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useAtom, useAtomValue } from 'jotai';

export const TopCartIcon = () => {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const cartQuantity = useAtomValue(cartQuantityAtom);

  return (
    <div className="flow-root" data-testid="cart-icon">
      <div
        onClick={() => (isCartOpen ? setIsCartOpen(false) : setIsCartOpen(true))}
        className="group -m-2 p-2 flex items-center"
      >
        <ShoppingCartIcon
          className="flex-shrink-0 h-6 w-6 text-primary-400 group-hover:text-primary-500"
          aria-hidden="true"
        />
        <span
          className="ml-2 text-sm font-medium text-primary-700 group-hover:text-primary-800"
          data-testid="cart-items-count"
        >
          {cartQuantity}
        </span>
        <span className="sr-only">items in cart, view cart</span>
      </div>
    </div>
  );
};
