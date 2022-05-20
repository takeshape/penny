import { Transition } from '@headlessui/react';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XIcon } from '@heroicons/react/solid';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { Fragment, useCallback, useEffect, useRef } from 'react';
import { notificationAtom } from 'store';
import type { NotificationMessage } from 'types/notification';

type StatusIconProps = Pick<NotificationMessage, 'status'>;

const StatusIcon = ({ status }: StatusIconProps) => {
  switch (status) {
    case 'error': {
      return <ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />;
    }
    case 'warn': {
      return <InformationCircleIcon className="h-6 w-6 text-orange-400" aria-hidden="true" />;
    }
    case 'success': {
      return <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />;
    }
    case 'info':
    default: {
      return <InformationCircleIcon className="h-6 w-6 text-blue-400" aria-hidden="true" />;
    }
  }
};

export const Notification = () => {
  const notification = useAtomValue(notificationAtom);
  const resetNotification = useResetAtom(notificationAtom);

  const timeout = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (notification.showFor) {
      timeout.current = setTimeout(() => {
        resetNotification();
      }, notification.showFor);
    }
  }, [notification, resetNotification]);

  const handleClose = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = undefined;
    }
    resetNotification();
  }, [resetNotification]);

  const { title, body, status } = notification;

  const isShowing = Boolean(title || body);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={isShowing}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <StatusIcon status={status} />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="mt-1 text-sm text-gray-500">{body}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      type="button"
                      className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={handleClose}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default Notification;
