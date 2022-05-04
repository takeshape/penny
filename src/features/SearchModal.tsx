import { Combobox, Dialog, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import Loader from 'components/Loader';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { SearchStripeProducts } from 'queries';
import { Fragment, useCallback } from 'react';
import useSearch from 'services/takeshape/useSearch';
import { isSearchOpenAtom } from 'store';
import classNames from 'utils/classNames';

export const SearchModal = () => {
  const router = useRouter();
  const [loading, query, results, setQuery, resetQuery] = useSearch({
    graphqlQuery: SearchStripeProducts,
    filterFn: (result) => result.__typename === 'Stripe_Product'
  });
  const [isOpen, setIsOpen] = useAtom(isSearchOpenAtom);

  const onQueryChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  const onLeave = useCallback(() => {
    resetQuery();
  }, [resetQuery]);

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={onLeave} appear>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox value="" onChange={(productId) => router.push(`/product/${productId}`)}>
                <div className="relative">
                  <SearchIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={onQueryChange}
                  />
                </div>

                {results.length > 0 && (
                  <Combobox.Options static className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
                    {results.map((product) => (
                      <Combobox.Option
                        key={product.id}
                        value={product.id}
                        className={({ active }) =>
                          classNames('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white')
                        }
                      >
                        {product.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && results.length === 0 && !loading && (
                  <p className="p-4 text-sm text-gray-500">No products found.</p>
                )}

                {query !== '' && loading && (
                  <div className="p-8 flex items-center justify-center">
                    <Loader />
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchModal;
