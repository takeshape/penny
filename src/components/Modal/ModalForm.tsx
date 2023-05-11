import { Modal, ModalProps } from 'components/Modal/Modal';
import { FormEventHandler, PropsWithChildren, useEffect } from 'react';

export interface ModalFormProps extends ModalProps {
  primaryText?: string;
  secondaryText?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isSubmitSuccessful?: boolean;
  autoCloseDelay?: number;
  className?: string;
}

export const ModalForm = ({
  isOpen,
  onClose,
  primaryText,
  secondaryText,
  afterLeave,
  onSubmit,
  isSubmitSuccessful,
  autoCloseDelay,
  children,
  className
}: PropsWithChildren<ModalFormProps>) => {
  useEffect(() => {
    let closeTimer: ReturnType<typeof setTimeout>;

    if (isSubmitSuccessful && isOpen) {
      closeTimer = setTimeout(() => onClose(), autoCloseDelay ?? 2000);
    }

    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [autoCloseDelay, isOpen, isSubmitSuccessful, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} afterLeave={afterLeave}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            {primaryText && <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{primaryText}</h2>}
            {secondaryText && <p className="mt-1 max-w-2xl text-sm text-gray-500">{secondaryText}</p>}
          </div>

          <form className={className ?? 'mt-10'} onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </Modal>
  );
};
