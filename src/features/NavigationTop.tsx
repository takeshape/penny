import { useQuery } from '@apollo/client';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'components/NextImage';
import { useAtom } from 'jotai';
import type { NavigationDataResults } from 'queries';
import { GetNavigationDataQuery } from 'queries';
import { Fragment } from 'react';
import { searchIsOpenAtom } from 'store';
import classNames from 'utils/classNames';
import NavigationAccountIcon from './NavigationAccountIcon';
import NavigationCreateOrSignIn from './NavigationCreateOrSignIn';
import NavigationCurrencySelect from './NavigationCurrencySelect';
import SearchModal from './SearchModal';

export interface NavigationTopProps {
  onOpenMobileMenu: () => void;
}

export const NavigationTop = ({ onOpenMobileMenu }: NavigationTopProps) => {
  const [, setSearchIsOpen] = useAtom(searchIsOpenAtom);
  const { data } = useQuery<NavigationDataResults>(GetNavigationDataQuery);
  const { currencies, links } = data?.getNavigationData ?? {};

  return (
    <>
      <SearchModal />
      <nav aria-label="Top">
        {/* Top navigation */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form className="hidden lg:block lg:flex-1">
              <div className="flex">
                <label htmlFor="desktop-currency" className="sr-only">
                  Currency
                </label>
                <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <NavigationCurrencySelect currencies={currencies} />
                  <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-gray-300"
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

            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              Get free delivery on orders over $100
            </p>

            <NavigationCreateOrSignIn />
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="bg-white">
          <div className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <div className="h-8 w-8 relative">
                      <Image
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </a>
                </div>

                <div className="hidden h-full lg:flex">
                  {/* Mega menus */}
                  <Popover.Group className="ml-8">
                    <div className="h-full flex justify-center space-x-8">
                      {links?.categories.map((category, categoryIdx) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open
                                      ? 'border-indigo-600 text-indigo-600'
                                      : 'border-transparent text-gray-700 hover:text-gray-800',
                                    'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  )}
                                >
                                  {category.name}
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                                  {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                  <div className="relative bg-white">
                                    <div className="max-w-7xl mx-auto px-8">
                                      <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                        <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                          <div>
                                            <p
                                              id={`desktop-featured-heading-${categoryIdx}`}
                                              className="font-medium text-gray-900"
                                            >
                                              Featured
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {category.featured.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                          <div>
                                            <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                              Categories
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby="desktop-categories-heading"
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {category.categories.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                          <div>
                                            <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                              Collection
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby="desktop-collection-heading"
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {category.collection.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>

                                          <div>
                                            <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                              Brands
                                            </p>
                                            <ul
                                              role="list"
                                              aria-labelledby="desktop-brand-heading"
                                              className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                              {category.brands.map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      {links?.pages.map((page) => (
                        <a
                          key={page.name}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          {page.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Group>
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                    onClick={onOpenMobileMenu}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <a onClick={() => setSearchIsOpen(true)} className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href="#" className="lg:hidden">
                  <span className="sr-only">Workflow</span>
                  <div className="h-8 w-8 relative">
                    <Image
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </a>

                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <a onClick={() => setSearchIsOpen(true)} className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="flex">
                        <NavigationAccountIcon />
                      </div>
                    </div>

                    <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div className="flow-root">
                      <a href="#" className="group -m-2 p-2 flex items-center">
                        <ShoppingCartIcon
                          className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationTop;
