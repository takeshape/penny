import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Contact, { ContactForm } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';
import { GorgiasCreateTicketMutation, GorgiasCreateTicketResponse } from 'queries';
import { useCallback, useState } from 'react';
import type { MutationGorgias_CreateTicketArgs } from 'types/takeshape';

const ContactPage: NextPage = () => {
  const [success, setSuccess] = useState<string>();
  const [createTicket, { data: customerResponse, error }] = useMutation<
    { Gorgias_createTicket: GorgiasCreateTicketResponse },
    MutationGorgias_CreateTicketArgs
  >(GorgiasCreateTicketMutation);

  const onSubmit = useCallback(
    async (formValues: ContactForm, recaptchaToken: string) => {
      const { firstName, lastName, company, email, phoneNumber, message } = formValues;

      const result = await createTicket({
        variables: {
          email,
          message: `From: ${firstName} ${lastName}
Company: ${company}
Phone Number: ${phoneNumber}
Message: ${message}`,
          recaptchaToken
        }
      });
      const { id } = result.data.Gorgias_createTicket;
      if (id) {
        setSuccess(`Thank you for reaching out! Created ticket #${id}.`);
      }
    },
    [createTicket]
  );

  return (
    <Layout title="Contact">
      {success && <Alert status="success" primaryText={success} />}
      <Contact
        text={{
          primary: 'Get in touch',
          secondary: "We'd be happy to hear from you!",
          button: 'Send'
        }}
        onSubmit={onSubmit}
      />
    </Layout>
  );
};

export default ContactPage;
