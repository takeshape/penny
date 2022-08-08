import { useAtom } from 'jotai';
import { currencyAtom } from 'store';
import { Navigation } from '../../types';

export const MobileMenuCurrencySelect = ({ currencies }: Pick<Navigation, 'currencies'>) => {
  const [selectedCurrency, updateCurrency] = useAtom(currencyAtom);

  return (
    <form>
      <div className="inline-block">
        <label htmlFor="mobile-currency" className="sr-only">
          Currency
        </label>
        <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-inverted">
          <select
            id="mobile-currency"
            name="currency"
            className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-primary-700 group-hover:text-primary-800 focus:outline-none focus:ring-0 focus:border-transparent uppercase"
            onChange={(e) => updateCurrency(e.target.value)}
            value={selectedCurrency}
          >
            {currencies?.map((currency) => (
              <option key={currency}>{currency}</option>
            ))}
          </select>
          <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-primary-500"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 8l4 4 4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
  );
};
