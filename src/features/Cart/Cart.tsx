import PageLoader from '@/components/PageLoader';
import { isStorybook } from '@/config';
import { CartDiscountCode } from '@/features/Cart/components/DiscountCode';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAtom, useAtomValue } from 'jotai';
import { Fragment } from 'react';
import { CartItem } from './components/CartItem';
import { CartCheckout } from './components/Checkout';
import { CartEmpty } from './components/Empty';
import { CartSubtotal } from './components/Subtotal';
import { cartItemAtomsAtom, isCartCheckingOutAtom, isCartOpenAtom } from './store';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom);
  const isCartCheckingOut = useAtomValue(isCartCheckingOutAtom);
  const [items, dispatch] = useAtom(cartItemAtomsAtom);

  return (
    <Transition.Root show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => isStorybook || setIsCartOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md relative" data-testid="cart-dialog">
                  {isCartCheckingOut && (
                    <div className="z-20 bg-gray-500 bg-opacity-75 absolute h-full w-full">
                      <PageLoader colorClass="text-background" />
                    </div>
                  )}

                  <div className="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-body-900"> Shopping cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-primary-400 hover:text-primary-500"
                            onClick={() => setIsCartOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <CartDiscountCode />

                      <div className="mt-8">
                        {items.length ? (
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-body-200">
                              {items.map((atom) => (
                                <li key={atom.toString()} className="flex py-6" data-testid="cart-item">
                                  <CartItem atom={atom} onRemove={() => dispatch({ type: 'remove', atom })} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <CartEmpty />
                        )}
                      </div>
                    </div>

                    <div className="border-t border-body-200 py-6 px-4 sm:px-6">
                      <CartSubtotal />
                      <p className="mt-0.5 text-sm text-body-500">Shipping and taxes calculated at checkout.</p>

                      <div className="mt-6">
                        <CartCheckout />
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-body-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-accent-600 hover:text-accent-500"
                            onClick={() => setIsCartOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
