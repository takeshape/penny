'use client';

import Loader from '@/components/Loader/Loader';
import { replaceState } from '@/lib/util/history';
import { getSingle } from '@/lib/util/types';
import { isSearchOpenAtom } from '@/store';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useAtom } from 'jotai';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler, Fragment, useCallback, useEffect } from 'react';
import { SearchShopifyProducts } from '../queries';
import { getSearchList } from '../transforms';
import { useSearch } from '../useSearch';
import { ModalSearchItem } from './components/ModalSearchItem';

export function SearchModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { query, setQuery, results, loading } = useSearch({
    graphqlQuery: SearchShopifyProducts,
    resultsFn: getSearchList
  });

  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom);

  // This should only be called once, on page load, to avoid a loop
  useEffect(() => {
    const initialQuery = getSingle(searchParams?.get('search'));
    if (initialQuery) {
      setIsSearchOpen(true);
      setQuery(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Only trigger this on queries, router is a side-effect
  const onQueryChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setQuery(e.target.value);
      replaceState(`?search=${e.target.value}`);
    },
    [setQuery]
  );

  const onSelectResult = useCallback(
    (productUrl: string) => {
      setIsSearchOpen(false);
      setQuery('');
      void router.push(productUrl);
    },
    [router, setIsSearchOpen, setQuery]
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
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-form-100 overflow-hidden rounded-xl bg-background shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox value={query} onChange={onSelectResult}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-form-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-form-800 placeholder-form-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={onQueryChange}
                  />
                </div>

                {query.length > 1 && (results === null || loading) && (
                  <div className="p-8 flex items-center justify-center">
                    <Loader />
                  </div>
                )}

                {results && results.length > 0 && (
                  <Combobox.Options static className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                    {results.map((item) => (
                      <div key={item.product.id}>
                        <ModalSearchItem {...item} />
                      </div>
                    ))}
                  </Combobox.Options>
                )}

                {query.length > 1 && results?.length === 0 && !loading && (
                  <div className="py-14 px-6 text-center text-sm sm:px-14">
                    <ExclamationTriangleIcon className="mx-auto h-6 w-6 text-body-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-body-900">No results found</p>
                    <p className="mt-2 text-body-500">We couldn’t find anything with that term. Please try again.</p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
