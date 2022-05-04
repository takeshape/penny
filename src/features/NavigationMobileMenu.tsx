import { useQuery } from '@apollo/client';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { currencyList } from 'config';
import { useAtom } from 'jotai';
import type { NavigationDataResults } from 'queries';
import { GetNavigationDataQuery } from 'queries';
import { Fragment } from 'react';
import { isMobileMenuOpenAtom } from 'store';
import classNames from 'utils/classNames';
import NavigationMobileMenuCreateOrSignIn from './NavigationMobileMenuCreateOrSignIn';
import NavigationMobileMenuCurrencySelect from './NavigationMobileMenuCurrencySelect';

export const NavigationMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(isMobileMenuOpenAtom);
  const { data } = useQuery<NavigationDataResults>(GetNavigationDataQuery);
  const { links } = data?.navigation ?? {};
  const currencies = [...currencyList];

  return (
    <Transition.Root show={isMobileMenuOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={() => setIsMobileMenuOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex px-4 space-x-8">
                  {links?.categories?.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        classNames(
                          selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                          'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                        )
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {links?.categories?.map((category, categoryIdx) => (
                  <Tab.Panel key={category.name} className="px-4 pt-10 pb-6 space-y-12">
                    <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                      <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                        <div>
                          <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                            Featured
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured?.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" className="font-medium text-gray-900">
                            Categories
                          </p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                            {category.categories?.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                        <div>
                          <p id="mobile-collection-heading" className="font-medium text-gray-900">
                            Collection
                          </p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                            {category.collection?.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p id="mobile-brand-heading" className="font-medium text-gray-900">
                            Brands
                          </p>
                          <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                            {category.brands?.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              {links?.pages?.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <NavigationMobileMenuCreateOrSignIn />

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              {/* Currency selector */}
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <NavigationMobileMenuCurrencySelect currencies={currencies} />
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-gray-500"
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
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default NavigationMobileMenu;
