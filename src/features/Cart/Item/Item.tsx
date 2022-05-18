import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import Image from 'components/NextImage';
import type { PrimitiveAtom } from 'jotai';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import type { CartItem } from 'services/cart/store';
import { formatPrice } from 'utils/text';

export interface ItemProps {
  atom: PrimitiveAtom<CartItem>;
  remove: () => void;
}

export const Item = ({ atom, remove }: ItemProps) => {
  const [item, setItem] = useAtom(atom);
  const { imageSrc, imageAlt, name, href, currency, unitAmount, quantity } = item;

  return (
    <Fragment>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={href}> {name} </a>
            </h3>
            <p className="ml-4">{formatPrice(currency, unitAmount)}</p>
          </div>
          {/* <p className="mt-1 text-sm text-gray-500">{color}</p> */}
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

                <div className="flex items-center w-1 text-gray-500">{quantity}</div>

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
            <button onClick={remove} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
