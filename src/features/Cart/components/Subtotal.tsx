'use client';

import { cartSubtotalAtom } from '@/features/Cart/store';
import { formatPrice } from '@/lib/util/text';
import { currencyAtom } from '@/store';
import { useAtomValue } from 'jotai';

export const CartSubtotal = () => {
  const subtotal = useAtomValue(cartSubtotalAtom);
  const currency = useAtomValue(currencyAtom);

  return (
    <div className="flex justify-between text-base font-medium text-body-900">
      <p>Subtotal</p>
      <p>{formatPrice(currency, subtotal)}</p>
    </div>
  );
};
