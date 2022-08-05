import { useMutation } from '@apollo/client';
import { Contact, ContactForm } from 'features/Contact/Contact';
import { CreateZendeskTicketMutation } from 'features/Contact/queries';
import { useCallback, useState } from 'react';
import { CreateZendeskTicketMutationResponse, CreateZendeskTicketMutationVariables } from 'types/takeshape';

export const ContactWithZendesk = () => {
  const [success, setSuccess] = useState<string>();
  const [createTicket, { error }] = useMutation<
    CreateZendeskTicketMutationResponse,
    CreateZendeskTicketMutationVariables
  >(CreateZendeskTicketMutation);

  const onSubmit = useCallback(
    async (formValues: ContactForm, recaptchaToken: string) => {
      const { firstName, lastName, company, email, phoneNumber, message } = formValues;

      const result = await createTicket({
        variables: {
          name: `${firstName} ${lastName}`,
          email,
          message: `From: ${firstName} ${lastName}
Company: ${company}
Phone Number: ${phoneNumber}
${message}`,
          recaptchaToken
        }
      });
      const { id } = result.data.createZendeskTicket;
      if (id) {
        setSuccess(`Thank you for reaching out! Created ticket #${id}.`);
      }
    },
    [createTicket]
  );

  return (
    <Contact
      text={{
        primary: 'Get in touch',
        secondary: "We'd be happy to hear from you!",
        button: 'Send'
      }}
      onSubmit={onSubmit}
      success={success}
      error={error?.message}
    />
  );
};
