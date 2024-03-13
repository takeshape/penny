import NextLink from '@/components/NextLink';
import classNames from '@/utils/classNames';
import { Disclosure } from '@headlessui/react';
import { Navigation } from '../../types';

export const MobileMenuLinks = ({ sections }: Pick<Navigation, 'sections'>) => {
  return (
    <div className="my-5 flex flex-col">
      <nav className="flex-1 px-4 space-y-1 bg-white" aria-label="Sidebar">
        {sections.map((section) =>
          !section.subsections && section?.link ? (
            <div key={section.link.name}>
              <NextLink
                href={section.link.href}
                className="bg-white text-body-800 hover:bg-body-50 hover:text-body-800 group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md"
              >
                {section.link.name}
              </NextLink>
            </div>
          ) : (
            <Disclosure as="div" key={section.name} className="space-y-1">
              {({ open }) => (
                <>
                  <Disclosure.Button className="bg-white text-body-800 hover:bg-body-50 hover:text-body-800 group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <svg
                      className={classNames(
                        open ? 'text-body-400 rotate-90' : 'text-body-300',
                        'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-body-400 transition-colors ease-in-out duration-150'
                      )}
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                    </svg>
                    {section.name}
                  </Disclosure.Button>
                  <Disclosure.Panel className="space-y-1">
                    {section.subsections &&
                      section.subsections.map((subsection) => (
                        <>
                          <p className="bg-white text-body-400 group w-full flex items-center pl-7 pr-2 py-2 text-xs font-medium rounded-md uppercase">
                            {subsection.name}
                          </p>
                          {subsection.links.map((link) => (
                            <Disclosure.Button
                              key={link.name}
                              as="a"
                              href={link.href}
                              className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-body-800 rounded-md hover:text-body-800 hover:bg-body-50"
                            >
                              {link.name}
                            </Disclosure.Button>
                          ))}
                        </>
                      ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        )}
      </nav>
    </div>
  );
};
