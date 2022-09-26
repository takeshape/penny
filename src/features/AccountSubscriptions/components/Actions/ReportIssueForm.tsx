import FormTextarea from 'components/Form/Textarea/Textarea';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'components/Modal/ModalForm';
import { ModalFormActions } from 'components/Modal/ModalFormActions';
import { siteContactEmail } from 'config';
import { useAuthenticatedCreateTicket } from 'features/Contact/useCreateTicket';
import { useSession } from 'next-auth/react';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { shopifyGidToId } from 'transforms/shopify';
import { SubscriptionOrder } from '../../types';

export interface ReportIssueFormProps extends ModalProps {
  order: Pick<SubscriptionOrder, 'id'>;
}

export interface ReportIssueFormValues {
  message: string;
}

export const ReportIssueForm = ({ isOpen, onClose, order }: ReportIssueFormProps) => {
  const { data: session } = useSession();

  const [createTicket, { data: createTicketResponse, error: createTicketError }] = useAuthenticatedCreateTicket();

  const orderId = useMemo(() => shopifyGidToId(order.id), [order.id]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<ReportIssueFormValues>();

  const handleFormSubmit = useCallback(
    async ({ message }: ReportIssueFormValues) => {
      if (!session?.user) {
        return;
      }

      createTicket({
        variables: {
          name: session.user.name ?? 'Unknown',
          email: session.user.email ?? 'no-user@site.test',
          message: `From: ${session.user.name}
Order ID: ${orderId}
${message}`
        }
      });
    },
    [createTicket, orderId, session]
  );

  const resetState = useCallback(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

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
        {createTicketError && (
          <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
            <p className="mb-4">There was an issue reporting your issue.</p>
            <p>
              Please send us an email at <a href={`mailto:${siteContactEmail}`}>{siteContactEmail}</a> and include{' '}
              <strong>Order #{orderId}</strong>
            </p>
          </div>
        )}

        {createTicketResponse && (
          <div className="h-full font-medium flex flex-col items-center justify-center text-center text-body-600">
            <p className="mb-4">Created ticket #{createTicketResponse.createTicket?.id ?? 'unknown'}</p>
            <p>We&apos;ll be in touch soon.</p>
          </div>
        )}

        {!createTicketResponse && !createTicketError && (
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
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Report issue"
      />
    </ModalForm>
  );
};
