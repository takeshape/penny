import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, MouseEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  afterLeave?: () => void;
  showCloseButton?: boolean;
};

export const Modal = ({ isOpen, onClose, afterLeave, showCloseButton, children }: PropsWithChildren<ModalProps>) => {
  // TODO Because of this: https://github.com/tailwindlabs/headlessui/issues/1705
  const [dialogIsOpen, setDialogIsOpen] = useState(isOpen);

  const handleClose = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      onClose();
    },
    [onClose]
  );

  const handleAfterLeave = useCallback(() => {
    if (dialogIsOpen) {
      setDialogIsOpen(false);
      if (afterLeave) {
        afterLeave();
      }
    }
  }, [afterLeave, dialogIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setDialogIsOpen(true);
    }
  }, [isOpen]);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={dialogIsOpen} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={handleAfterLeave}
        >
          <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              afterLeave={handleAfterLeave}
            >
              <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-2xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 md:rounded-md">
                  {showCloseButton && (
                    <button
                      type="button"
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                      onClick={handleClose}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  )}

                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
