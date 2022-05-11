import { currencyList } from 'config';
import { useAtom } from 'jotai';
import { currencyAtom } from 'store';

export const NavigationTopCurrencySelect = () => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);
  const currencies = [...currencyList];

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

export default NavigationTopCurrencySelect;
