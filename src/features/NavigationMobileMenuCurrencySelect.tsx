import { useAtom } from 'jotai';
import type { NavigationCurrency } from 'queries';
import { currencyAtom } from 'store';

export interface NavigationMobileMenuCurrencySelectProps {
  currencies: NavigationCurrency[];
}

export const NavigationMobileMenuCurrencySelect = ({ currencies }: NavigationMobileMenuCurrencySelectProps) => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);

  return (
    <select
      id="mobile-currency"
      name="currency"
      className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
      onChange={(e) => updateCurrency(e.target.value)}
      value={selectedCurrency}
    >
      {currencies?.map((currency) => (
        <option key={currency}>{currency}</option>
      ))}
    </select>
  );
};

export default NavigationMobileMenuCurrencySelect;
