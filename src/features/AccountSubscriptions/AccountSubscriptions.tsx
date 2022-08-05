import { Menu, Tab, Transition } from '@headlessui/react';
import { DotsVerticalIcon, RefreshIcon } from '@heroicons/react/solid';
import CardPanel from 'components/Card/Panel/Panel';
import { format } from 'date-fns';
import { Fragment } from 'react';
import classNames from 'utils/classNames';
import { formatPrice } from 'utils/text';
import { ManageSubscription } from './components/ManageSubscription/ManageSubscription';
import { SubscriptionOrders } from './components/SubscriptionOrders/SubscriptionOrders';
import { SubscriptionOverview } from './components/SubscriptionOverview/SubscriptionOverview';
import { Subscription } from './types';
import { formatDeliverySchedule, isActiveSubscription, isEndedSubscription } from './utils';

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

const navigationItemsEnded = [
  {
    name: 'Overview'
  },
  {
    name: 'Orders'
  }
];

export interface AccountSubscriptionsProps {
  subscriptions: Subscription[];
}

export const AccountSubscriptions = ({ subscriptions }: AccountSubscriptionsProps) => {
  const activeSubscriptions = subscriptions.filter(isActiveSubscription);
  const endedSubscriptions = subscriptions.filter(isEndedSubscription);

  return (
    <>
      <CardPanel primaryText="Subscriptions" secondaryText="View and manage your subscriptions and upcoming orders.">
        {activeSubscriptions?.length ? (
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {activeSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
              >
                <Tab.Group>
                  <h3 className="sr-only">
                    Order placed on{' '}
                    <time dateTime={subscription.createdAt}>{format(new Date(subscription.createdAt), 'PPP')}</time>
                  </h3>

                  <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                    <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Date started</dt>
                        <dd className="mt-1 text-gray-500">
                          <time dateTime={subscription.createdAt}>
                            {format(new Date(subscription.createdAt), 'PPP')}
                          </time>
                        </dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium text-gray-900">Frequency</dt>
                        <dd className="mt-1 text-gray-500">
                          Every {formatDeliverySchedule(subscription.deliverySchedule)}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Total amount</dt>
                        <dd className="mt-1 font-medium text-gray-900">
                          {formatPrice(subscription.price.currencyCode, subscription.price.amount)}
                        </dd>
                      </div>
                    </dl>

                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options for subscription {subscription.id}</span>
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

                    <Tab.List className="hidden lg:ml-12 lg:flex lg:space-x-1 lg:col-span-2">
                      {navigationItems.map(({ name }) => (
                        <Tab
                          key={name}
                          className={({ selected }) =>
                            classNames(
                              'w-full px-3 py-2 font-medium text-sm rounded-md',
                              selected ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700'
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
                      <SubscriptionOrders subscription={subscription} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative block w-full p-12 text-center">
            <RefreshIcon className="mx-auto h-12 w-12 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">No active subscriptions</span>
          </div>
        )}
      </CardPanel>

      {endedSubscriptions?.length && (
        <CardPanel primaryText="Past Subscriptions" secondaryText="Expired or canceled subscriptions.">
          <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
            {endedSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border"
              >
                <Tab.Group>
                  <h3 className="sr-only">
                    Order placed on{' '}
                    <time dateTime={subscription.createdAt}>{format(new Date(subscription.createdAt), 'PPP')}</time>
                  </h3>

                  <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                    <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Date ended</dt>
                        <dd className="mt-1 text-gray-500">
                          <time dateTime={subscription.endedAt}>{format(new Date(subscription.endedAt), 'PPP')}</time>
                        </dd>
                      </div>
                    </dl>

                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options for subscription {subscription.id}</span>
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
                            {navigationItemsEnded.map(({ name }) => (
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

                    <Tab.List className="hidden lg:ml-12 lg:flex lg:space-x-1 lg:col-span-2">
                      {navigationItemsEnded.map(({ name }) => (
                        <Tab
                          key={name}
                          className={({ selected }) =>
                            classNames(
                              'w-full px-3 py-2 font-medium text-sm rounded-md',
                              selected ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700'
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
                      <SubscriptionOrders subscription={subscription} />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            ))}
          </div>
        </CardPanel>
      )}
    </>
  );
};
