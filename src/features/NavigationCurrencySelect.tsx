import { useAtom } from 'jotai';
import type { NavigationCurrency } from 'queries';
import { currencyAtom } from 'store';

export interface NavigationCurrencySelectProps {
  currencies: NavigationCurrency[];
}

export const NavigationCurrencySelect = ({ currencies }: NavigationCurrencySelectProps) => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);

  return (
    <select
      id="desktop-currency"
      name="currency"
      className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
      onChange={(e) => updateCurrency(e.target.value)}
      value={selectedCurrency}
    >
      {currencies?.map((currency) => (
        <option key={currency}>{currency}</option>
      ))}
    </select>
  );
};

export default NavigationCurrencySelect;
