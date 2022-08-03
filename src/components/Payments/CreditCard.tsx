import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { CreditCard as TCreditCard } from 'types/paymentMethod';
import classNames from 'utils/classNames';
import { getCreditCardIcon } from './utils';

export interface CreditCardProps {
  className?: string;
  card: TCreditCard;
}

export const CreditCard = ({
  card: { brand, maskedNumber, expiryMonth, expiryYear, expiresSoon },
  className
}: CreditCardProps) => {
  const CreditCardIcon = getCreditCardIcon(brand);

  return (
    <div className={className}>
      <div>
        <CreditCardIcon className="h-6 w-6 inline-block" />
        <span className="inline-block ml-2">{brand}</span> <span className="inline-block ml-1">{maskedNumber}</span>
      </div>
      <div
        className={classNames(
          'mt-1 text-xs font-medium flex items-center gap-1',
          expiresSoon ? 'text-red-600' : 'text-gray-600'
        )}
      >
        {expiresSoon && <ExclamationCircleIcon className="h-4 w-4 text-red-600 inline-block" />}
        <span>Expires</span>{' '}
        <span>
          {expiryMonth}/{expiryYear}
        </span>
      </div>
    </div>
  );
};