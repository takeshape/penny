import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { isStorybook } from 'config';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { isMobileMenuOpenAtom } from 'store';
import { Navigation } from '../types';
import { MobileMenuCreateOrSignIn } from './components/MobileMenuCreateOrSignIn';
import { MobileMenuCurrencySelect } from './components/MobileMenuCurrencySelect';
import { MobileMenuLinks } from './components/MobileMenuLinks';

export const NavigationMobileMenu = ({ sections, currencies }: Pick<Navigation, 'currencies' | 'sections'>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(isMobileMenuOpenAtom);

  return (
    <Transition.Root show={isMobileMenuOpen} as={Fragment}>
      <Dialog
        static
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        // Without this check onClose will trigger in wider viewports
        onClose={() => isStorybook || setIsMobileMenuOpen(false)}
      >
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

            <MobileMenuLinks sections={sections} />

            <MobileMenuCreateOrSignIn />

            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              <MobileMenuCurrencySelect currencies={currencies} />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
