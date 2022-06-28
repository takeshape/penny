import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import NextImage from 'components/NextImage';
import { PrimitiveAtom, useAtom } from 'jotai';
import Link from 'next/link';
import { Fragment } from 'react';
import { formatPrice, pluralizeText } from 'utils/text';
import { CartItem as CartItemType } from '../types';

export interface CartItemProps {
  atom: PrimitiveAtom<CartItemType>;
  onRemove: () => void;
}

export const CartItem = ({ atom, onRemove }: CartItemProps) => {
  const [item, setItem] = useAtom(atom);
  const { imageSrc, imageAlt, name, href, currency, unitAmount, quantity, interval, intervalCount, variantName } = item;

  return (
    <Fragment>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <NextImage src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <div>
              <h3>
                <Link href={href}>{name}</Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{variantName}</p>
            </div>
            <div>
              <p className="ml-4 text-right">{formatPrice(currency, unitAmount * quantity)}</p>
              {intervalCount > 0 ? (
                <p className="ml-4 text-right text-xs text-gray-500">
                  per {pluralizeText(intervalCount, interval.toLowerCase(), `${interval.toLowerCase()}s`)}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex-1 flex items-center justify-start">
            <div className="flex items-center">
              <div className="flex space-x-4">
                <button
                  disabled={quantity < 2}
                  onClick={() => setItem({ ...item, quantity: item.quantity - 1 })}
                  className="text-gray-400 hover:text-gray-500 disabled:text-gray-300"
                >
                  <span className="sr-only">One Less</span>
                  <MinusCircleIcon className="w-5 h-5" aria-hidden="true" />
                </button>

                <div className="flex justify-center items-center w-1 text-gray-500">{quantity}</div>

                <a
                  onClick={() => setItem({ ...item, quantity: item.quantity + 1 })}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">One More</span>
                  <PlusCircleIcon className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex">
            <button onClick={onRemove} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
