import { cartSubtotalAtom } from 'features/Cart/store';
import { useAtomValue } from 'jotai';
import { currencyAtom } from 'store';
import { formatPrice } from 'utils/text';

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
