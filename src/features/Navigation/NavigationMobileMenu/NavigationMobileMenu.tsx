import { isStorybook } from '@/config';
import { isMobileMenuOpenAtom } from '@/store';
import classNames from '@/utils/classNames';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAtom } from 'jotai';
import { Fragment } from 'react';
import { Navigation } from '../types';
import { MobileMenuAccount } from './components/MobileMenuAccount';
import { MobileMenuCurrencySelect } from './components/MobileMenuCurrencySelect';
import { MobileMenuLinks } from './components/MobileMenuLinks';

const Divider = ({ className }: { className?: string }) => (
  <div className={classNames('border-t border-body-200', className)} />
);

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
          <div className="relative max-w-xs w-full bg-background shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-primary-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <MobileMenuLinks sections={sections} />
            <Divider />
            <div className="py-6 px-6 space-y-6">
              <MobileMenuCurrencySelect currencies={currencies} />
            </div>
            <Divider />
            <MobileMenuAccount />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
