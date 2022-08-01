import FormTextarea from 'components/Form/Textarea/Textarea';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { FormActions } from 'features/AccountSubscriptions/components/FormActions';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Order } from '../../types';

export interface ReportIssueFormProps extends ModalProps {
  order: Order;
}

export interface ReportIssueFormValues {
  message: string;
}

/**
 * TODO Handle submit errors
 */
export const ReportIssueForm = ({ isOpen, onClose, order }: ReportIssueFormProps) => {
  const { data: session } = useSession();

  const [ticket, setTicket] = useState<{ id: number }>(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitted, isSubmitSuccessful }
  } = useForm<ReportIssueFormValues>();

  const handleFormSubmit = useCallback(
    async (formData: ReportIssueFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ session, order, formData });
      setTicket({ id: 10672931 });
    },
    [order, session]
  );

  const resetState = useCallback(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    let closeTimer;

    if (isSubmitSuccessful && isOpen) {
      closeTimer = setTimeout(() => onClose(), 2000);
    }

    return () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [isOpen, isSubmitSuccessful, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} afterLeave={resetState}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Report an issue</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Let us know what happened and we&apos;ll fix it right away!
            </p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="md:h-[calc(1/4*100vh)] p-[1px] flex flex-col">
              {isSubmitSuccessful ? (
                <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
                  <p className="mb-2">Created ticket #{ticket?.id}</p>
                  <p>We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <section aria-labelledby="confirm-heading" className="flex-grow">
                  <h3 id="confirm-heading" className="sr-only">
                    Report issue contact form
                  </h3>

                  <FormTextarea
                    control={control}
                    name="message"
                    id="message"
                    label="Message"
                    rules={{ required: 'This field is required' }}
                    fluidHeight
                  />
                </section>
              )}
            </div>

            <FormActions
              isSubmitted={isSubmitted}
              isSubmitting={isSubmitting}
              onCancel={onClose}
              className="mt-8 flex justify-end gap-2"
              submitText="Report issue"
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
