import { Tab } from '@headlessui/react';
import NextLink from 'components/NextLink';
import { Fragment } from 'react';
import classNames from 'utils/classNames';
import { Navigation } from '../../types';

export const MobileMenuLinks = ({ sections }: Pick<Navigation, 'sections'>) => {
  const withSubsections = sections.filter((section) => section.subsections);
  const withoutSubsections = sections.filter((section) => !section.subsections);
  return (
    <Fragment>
      {/* Links */}
      {Boolean(withSubsections.length) && (
        <Tab.Group as="div" className="mt-2">
          <div className="border-b border-gray-200">
            <Tab.List className="-mb-px flex px-4 space-x-8">
              {withSubsections.map((section) => (
                <Tab
                  key={section.name}
                  className={({ selected }) =>
                    classNames(
                      selected ? 'text-accent-600 border-accent-600' : 'text-primary-900 border-transparent',
                      'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                    )
                  }
                >
                  {section.name}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels as={Fragment}>
            {withSubsections.map((section, sectionIdx) => (
              <Tab.Panel key={section.name} className="px-4 pt-10 pb-6 space-y-12">
                <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.name} className="grid grid-cols-1 gap-y-10 gap-x-6">
                      <div>
                        <p id={`mobile-featured-heading-${sectionIdx}`} className="font-medium text-mainText-900">
                          {subsection.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`mobile-featured-heading-${sectionIdx}`}
                          className="mt-6 space-y-6"
                        >
                          {subsection.links?.map((link) => (
                            <li key={link.name} className="flex">
                              <NextLink href={link.href} className="text-gray-500">
                                <a className="font-medium text-primary-700 hover:text-primary-800">{link.name}</a>
                              </NextLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      )}
      {Boolean(withoutSubsections.length) && (
        <div className="border-t border-gray-200 py-6 px-4 space-y-6">
          {withoutSubsections.map((section) => (
            <div key={section.name} className="flow-root">
              <NextLink href={section.link.href} className="-m-2 p-2 block font-medium text-gray-900">
                <a className="font-medium text-primary-700 hover:text-primary-800">{section.name}</a>
              </NextLink>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};
