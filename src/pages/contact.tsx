import { useMutation } from '@apollo/client';
import Contact, { ContactForm } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import type { NextPage } from 'next';
import { GorgiasCreateTicketMutation, GorgiasCreateTicketResponse } from 'queries';
import React, { useCallback } from 'react';
import type { MutationGorgias_CreateTicketArgs } from 'types/takeshape';

const ContactPage: NextPage = () => {
  const [createTicket, { data: customerResponse, error }] = useMutation<
    GorgiasCreateTicketResponse,
    MutationGorgias_CreateTicketArgs
  >(GorgiasCreateTicketMutation);

  const onSubmit = useCallback(
    async (formValues: ContactForm, recaptchaToken: string) => {
      console.log('### vars', { ...formValues, recaptchaToken });
      const result = await createTicket({
        variables: { ...formValues, recaptchaToken }
      });
      const { id } = result.data.Gorgias_createTicket;
      console.log('### result', result);
    },
    [createTicket]
  );

  return (
    <Layout title="Contact">
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
