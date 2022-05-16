import { useQuery } from '@apollo/client';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import classNames from 'utils/classNames';
import type { NavigationDataResults } from '../Navigation.queries';
import { GetNavigationDataQuery } from '../Navigation.queries';

export const MobileMenuLinks = () => {
  const { data } = useQuery<NavigationDataResults>(GetNavigationDataQuery);
  const { links } = data?.navigation ?? {};

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default MobileMenuLinks;
