import { Menu, Tab, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useSubscriptionRefetch } from 'features/AccountSubscriptions/hooks';
import { Fragment } from 'react';
import classNames from 'utils/classNames';
import { formatPrice } from 'utils/text';
import { AnySubscription, RefetchSubscriptions } from '../types';
import { formatDeliverySchedule } from '../utils';
import { ManageSubscription } from './ManageSubscription/ManageSubscription';
import { SubscriptionOrders } from './SubscriptionOrders/SubscriptionOrders';
import { SubscriptionOverview } from './SubscriptionOverview/SubscriptionOverview';

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

export interface ActiveSubscriptionProps {
  subscription: AnySubscription;
  refetchSubscriptionList: RefetchSubscriptions;
}

export const ActiveSubscription = ({
  subscription: initialSubscription,
  refetchSubscriptionList
}: ActiveSubscriptionProps) => {
  const [refetchSubscription, { data: subscription }] = useSubscriptionRefetch({ subscription: initialSubscription });

  return (
    <Tab.Group>
      <h3 className="sr-only" id={subscription.id.toString()}>
        Order placed on <time dateTime={subscription.createdAt}>{format(new Date(subscription.createdAt), 'PPP')}</time>
      </h3>

      <div className="flex items-center p-4 border-b border-body-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
        <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
          <div>
            <dt className="font-medium text-body-900">Date started</dt>
            <dd className="mt-1 text-body-500">
              <time dateTime={subscription.createdAt}>{format(new Date(subscription.createdAt), 'PP')}</time>
            </dd>
          </div>
          <div className="hidden sm:block">
            <dt className="font-medium text-body-900">Frequency</dt>
            <dd className="mt-1 text-body-500">Every {formatDeliverySchedule(subscription)}</dd>
          </div>
          <div>
            <dt className="font-medium text-body-900">Total amount</dt>
            <dd className="mt-1 font-medium text-body-900">
              {formatPrice(subscription.price.currencyCode, subscription.price.amount)}
            </dd>
          </div>
        </dl>

        <Menu as="div" className="relative flex justify-end lg:hidden">
          <div className="flex items-center">
            <Menu.Button className="-m-2 p-2 flex items-center text-body-400 hover:text-body-500">
              <span className="sr-only">Options for subscription {subscription.id}</span>
              <EllipsisVerticalIcon className="w-6 h-6" aria-hidden="true" />
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
                          selected ? 'bg-body-100 text-body-900' : 'text-body-700'
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
                  selected ? 'bg-body-100 text-body-700' : 'text-body-500 hover:text-body-700'
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
          <SubscriptionOverview subscription={subscription} refetchSubscriptions={refetchSubscription} />
        </Tab.Panel>
        <Tab.Panel>
          <ManageSubscription
            subscription={subscription}
            refetchSubscriptions={refetchSubscription}
            refetchSubscriptionList={refetchSubscriptionList}
          />
        </Tab.Panel>
        <Tab.Panel>
          <SubscriptionOrders subscription={subscription} refetchSubscriptions={refetchSubscription} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
