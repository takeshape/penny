import { Menu, Tab, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { SubscriptionOrders } from 'features/AccountSubscriptions/components/SubscriptionOrders';
import { Fragment } from 'react';
import classNames from 'utils/classNames';
import { ManageSubscription } from './components/ManageSubscription';
import { SubscriptionOverview } from './components/SubscriptionOverview';
import { subscriptions } from './placeholders';

const navigationItems = [
  {
    name: 'Overview'
  },
  {
    name: 'Manage'
  },
  {
    name: 'Orders'
  }
];

export const AccountSubscriptions = () => {
  return (
    <CardPanel primaryText="Active Subscriptions">
      <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.number}
            className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
          >
            <Tab.Group>
              <h3 className="sr-only">
                Order placed on <time dateTime={subscription.createdDatetime}>{subscription.createdDate}</time>
              </h3>

              <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                  <div>
                    <dt className="font-medium text-gray-900">Date started</dt>
                    <dd className="mt-1 text-gray-500">
                      <time dateTime={subscription.createdDatetime}>{subscription.createdDate}</time>
                    </dd>
                  </div>
                  <div className="hidden sm:block">
                    <dt className="font-medium text-gray-900">Frequency</dt>
                    <dd className="mt-1 text-gray-500">Every {subscription.frequency}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Total amount</dt>
                    <dd className="mt-1 font-medium text-gray-900">{subscription.total}</dd>
                  </div>
                </dl>

                <Menu as="div" className="relative flex justify-end lg:hidden">
                  <div className="flex items-center">
                    <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Options for subscription {subscription.number}</span>
                      <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {navigationItems.map(({ name }) => (
                          <Menu.Item key={name}>
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  'w-full text-left px-4 py-2 text-sm',
                                  selected ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                )
                              }
                            >
                              {name}
                            </Tab>
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Tab.List className="hidden lg:flex lg:space-x-1 lg:rounded-xl bg-gray-900/20 p-1 col-span-2">
                  {navigationItems.map(({ name }) => (
                    <Tab
                      key={name}
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                          'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                          selected ? 'bg-white shadow' : 'text-gray-900 hover:bg-white/[0.12] hover:text-white'
                        )
                      }
                    >
                      {name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels>
                <Tab.Panel>
                  <SubscriptionOverview subscription={subscription} />
                </Tab.Panel>
                <Tab.Panel>
                  <ManageSubscription subscription={subscription} />
                </Tab.Panel>
                <Tab.Panel>
                  <SubscriptionOrders orders={subscription.orders} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        ))}
      </div>
    </CardPanel>
  );
};
