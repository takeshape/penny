'use client';

import NextLink from '@/components/NextLink';
import classNames from '@/lib/classNames';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Navigation, NavigationSection } from '../../types';

const SectionWithPopover = ({ section }: { section: NavigationSection }) => (
  <Popover key={section.name} className="flex">
    {({ open }) => (
      <>
        <div className="relative flex">
          <Popover.Button
            className={classNames(
              open ? 'border-accent-600 text-accent-600' : 'border-transparent text-primary-700 hover:text-primary-800',
              'outline-none relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
            )}
          >
            {section.name}
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
          <Popover.Panel className="absolute top-full inset-x-0 text-body-500 sm:text-sm">
            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

            <div className="relative bg-background" data-testid="collection-popup-dialog">
              <div className="max-w-7xl mx-auto px-8 pt-10">
                {section.link && (
                  <NextLink href={section.link.href} className="text-primary-700 hover:text-primary-800">
                    <span>Shop all {section.name}</span>
                  </NextLink>
                )}
                <div className="grid grid-cols-4 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                  {section.subsections?.map((subsection, subsectionIdx) => (
                    <div key={`${subsection.name}-${subsectionIdx}`} data-testid="collection-section">
                      <p id={`desktop-featured-heading-${subsectionIdx}`} className="font-medium text-body-900">
                        {subsection.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`desktop-featured-heading-${subsectionIdx}`}
                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                      >
                        {subsection.links?.map((link) => (
                          <li key={link.name} className="flex">
                            <NextLink href={link.href} className="text-primary-700 hover:text-primary-800">
                              {link.name}
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

const SectionLink = ({ section }: { section: NavigationSection }) => (
  <>
    {section.link && (
      <NextLink
        className="flex items-center text-sm font-medium text-primary-700 hover:text-primary-800"
        href={section.link.href}
      >
        {section.name}
      </NextLink>
    )}
  </>
);

export const TopLinks = ({ sections }: Pick<Navigation, 'sections'>) => {
  return (
    <div className="hidden h-full lg:flex">
      {/* Mega menus */}
      <Popover.Group className="ml-8">
        <div className="h-full flex justify-center space-x-8">
          {sections?.map((section) =>
            section.subsections ? (
              <SectionWithPopover key={section.name} section={section} />
            ) : (
              <SectionLink key={section.name} section={section} />
            )
          )}
        </div>
      </Popover.Group>
    </div>
  );
};
