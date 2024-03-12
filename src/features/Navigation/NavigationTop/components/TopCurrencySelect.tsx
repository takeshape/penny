import { useAtom } from 'jotai';
import { currencyAtom } from 'store';
import { Navigation } from '../../types';

export const TopCurrencySelect = ({ currencies }: Pick<Navigation, 'currencies'>) => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);

  return (
    <select
      id="desktop-currency"
      name="currency"
      className="bg-none bg-primary-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-inverted group-hover:text-primary-100 focus:outline-none focus:ring-0 focus:border-transparent uppercase"
      onChange={(e) => updateCurrency(e.target.value)}
      value={selectedCurrency}
    >
      {currencies?.map((currency) => <option key={currency}>{currency}</option>)}
    </select>
  );
};
