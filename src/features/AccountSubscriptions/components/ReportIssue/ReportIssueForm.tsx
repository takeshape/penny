import FormTextarea from 'components/Form/Textarea/Textarea';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'features/AccountSubscriptions/components/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/ModalFormActions';
import { useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
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
    if (isSubmitted) {
      reset();
    }
  }, [reset, isSubmitted]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Report an issue"
      secondaryText="Let us know what happened and we'll fix it right away!"
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
    >
      <div className="md:h-[calc(1/4*100vh)] p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-center text-gray-600">
            <p className="mb-4">Created ticket #{ticket?.id}</p>
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

      <ModalFormActions
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Report issue"
      />
    </ModalForm>
  );
};
