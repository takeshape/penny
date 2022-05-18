import { useAtomValue } from 'jotai';
import { cartSubtotalAtom } from 'services/cart/store';
import { currencyAtom } from 'store';
import { formatPrice } from 'utils/text';

export const Subtotal = () => {
  const subtotal = useAtomValue(cartSubtotalAtom);
  const currency = useAtomValue(currencyAtom);

  return (
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>{formatPrice(currency, subtotal)}</p>
    </div>
  );
};

export default Subtotal;
