import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import Loader from 'components/Loader';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { SearchStripeProducts } from 'queries';
import { Fragment, useCallback, useEffect } from 'react';
import useSearch from 'services/takeshape/useSearch';
import { isSearchOpenAtom } from 'store';
import classNames from 'utils/classNames';
import { getSingle } from 'utils/types';
import type { SearchStripeProductsResults } from './Search.queries';

const resultsFn = (data: SearchStripeProductsResults) =>
  data.search.results.filter((result) => result.__typename === 'Stripe_Product');

export const SearchModal = () => {
  const router = useRouter();
  const [loading, query, results, setQuery] = useSearch({
    graphqlQuery: SearchStripeProducts,
    resultsFn
  });

  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom);

  // This should only be called once, on page load, to avoid a loop
  useEffect(() => {
    const initialQuery = getSingle(router.query.search);
    if (router.isReady && initialQuery) {
      setIsSearchOpen(true);
      setQuery(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  // Only trigger this on queries, router is a side-effect
  const onQueryChange = useCallback(
    (e) => {
      setQuery(e.target.value);
      router.replace({ pathname: router.pathname, query: { search: e.target.value } }, null, {
        shallow: true
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setQuery]
  );

  const onSelectResult = useCallback(
    (productId) => {
      setIsSearchOpen(false);
      setQuery('');
      router.push(`/product/${productId}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setIsSearchOpen, setQuery]
  );

  const onLeave = useCallback(() => {
    setQuery('');
  }, [setQuery]);

  return (
    <Transition.Root show={isSearchOpen} as={Fragment} afterLeave={onLeave} appear>
      <Dialog as="div" className="relative z-10" open={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
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
              <Combobox value={query} onChange={onSelectResult}>
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
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ExclamationIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                  </div>
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
