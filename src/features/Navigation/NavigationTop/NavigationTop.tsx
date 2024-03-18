'use client';

import { Logo } from '@/components/Logo/Logo';
import NextLink from '@/components/NextLink';
import { showCurrencySelector } from '@/config';
import { isMobileMenuOpenAtom, isSearchOpenAtom } from '@/lib/store';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSetAtom } from 'jotai';
import { Navigation } from '../types';
import { TopAccountIcon } from './components/TopAccountIcon';
import { TopCartIcon } from './components/TopCartIcon';
import { TopCreateOrSignIn } from './components/TopCreateOrSignIn';
import { TopCurrencySelect } from './components/TopCurrencySelect';
import { TopLinks } from './components/TopLinks';
import { TopMessage } from './components/TopMessage';

export type NavigationTopProps = Navigation;

export const NavigationTop = ({ message, sections, currencies }: NavigationTopProps) => {
  const setIsMobileMenuOpen = useSetAtom(isMobileMenuOpenAtom);
  const setIsSearchOpen = useSetAtom(isSearchOpenAtom);

  return (
    <>
      <nav aria-label="Top">
        <a href="#content" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        {/* Top navigation */}
        <div className="bg-primary-900">
          <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            {/* Currency selector */}
            <form className="hidden lg:block lg:flex-1">
              {showCurrencySelector && (
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="-ml-2 group relative bg-primary-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-inverted">
                    <TopCurrencySelect currencies={currencies} />
                    <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none text-inverted">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-inverted-300"
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
              )}
            </form>

            <TopMessage message={message} />
            <TopCreateOrSignIn />
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="bg-background" data-testid="nav-bar">
          <div className="border-b border-body-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-16 flex items-center justify-between">
                {/* Logo (lg+) */}
                <div className="hidden lg:flex lg:items-center">
                  <NextLink href="/">
                    <Logo className="h-8 w-8" />
                  </NextLink>
                </div>

                <TopLinks sections={sections} />

                {/* Mobile menu and search (lg-) */}
                <div className="flex-1 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="-ml-2 bg-background p-2 rounded-md text-primary-400"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Search */}
                  <div
                    onClick={() => setIsSearchOpen(true)}
                    className="ml-2 p-2 text-primary-400 hover:text-primary-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Logo (lg-) */}
                <NextLink href="/" className="lg:hidden">
                  <Logo className="h-8 w-8" />
                </NextLink>

                <div className="flex-1 flex items-center justify-end">
                  <div className="flex items-center lg:ml-8">
                    <div className="flex space-x-8">
                      <div className="hidden lg:flex">
                        <div
                          onClick={() => setIsSearchOpen(true)}
                          className="-m-2 p-2 text-primary-400 hover:text-primary-500"
                          data-testid="search-icon"
                        >
                          <span className="sr-only">Search</span>
                          <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
                        </div>
                      </div>

                      <div className="flex">
                        <TopAccountIcon />
                      </div>
                    </div>

                    <span className="invisible lg:visible mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <TopCartIcon />
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
