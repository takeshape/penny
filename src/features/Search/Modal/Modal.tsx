import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import Loader from 'components/Loader/Loader';
import NextImage from 'components/NextImage';
import useSearch from 'features/Search/useSearch';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useEffect } from 'react';
import { isSearchOpenAtom } from 'store';
import classNames from 'utils/classNames';
import { getSingle } from 'utils/types';
import type { SearchShopifyProductsResults } from '../queries';
import type { Shopify_Product } from 'types/takeshape';
import { SearchShopifyProducts } from '../queries';

import { shopifyGidToId } from 'transforms/shopify';

const resultsFn = (data: SearchShopifyProductsResults) =>
  data.search.results.map((result) => ({
    ...result,
    id: shopifyGidToId(result.id)
  }));

function getImageUrl(product: Shopify_Product): string {
  return product.featuredImage?.url ?? product.images.edges[0]?.node.url;
}

export const Modal = () => {
  const router = useRouter();
  const [loading, query, results, setQuery] = useSearch({
    graphqlQuery: SearchShopifyProducts,
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
                  <Combobox.Options static className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                    {results.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item.id}
                        className={({ active }) =>
                          classNames('flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100')
                        }
                      >
                        {({ active }) => (
                          <>
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg overflow-hidden">
                              <NextImage
                                width={60}
                                height={60}
                                src={getImageUrl(item)}
                                className="object-center object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-auto">
                              <p
                                className={classNames(
                                  'text-sm font-medium',
                                  active ? 'text-gray-900' : 'text-gray-700'
                                )}
                              >
                                {item.title}
                              </p>
                              {item.description && (
                                <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </>
                        )}
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

export default Modal;
