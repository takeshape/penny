import { Disclosure } from '@headlessui/react';
import { TagIcon } from '@heroicons/react/24/solid';
import { cartDiscountCodeAtom } from 'features/Cart/store';
import { useAtomValue } from 'jotai';

export const CartDiscountCode = () => {
  const discountCode = useAtomValue(cartDiscountCodeAtom);

  if (!discountCode) {
    return null;
  }

  return (
    <Disclosure>
      <Disclosure.Button className="w-full mt-8 bg-accent-100 rounded-md border border-body-200 p-2">
        <div className="w-full flex items-center align-middle text-sm font-bold text-accent-800 gap-1">
          <TagIcon className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono">{discountCode}</span>
        </div>
        <Disclosure.Panel>
          <p className="p-1 text-left mt-1 text-sm text-body-500">
            A discount code has been added to your cart and will be applied at checkout.
          </p>
        </Disclosure.Panel>
      </Disclosure.Button>
    </Disclosure>
  );
};
