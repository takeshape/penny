import { useMutation } from '@apollo/client';
import { pageRevalidationTtl } from 'config';
import { Contact, ContactForm } from 'features/Contact/Contact';
import { CreateTicketMutation } from 'features/Contact/queries';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useCallback, useState } from 'react';
import { CreateTicketMutationResponse, CreateTicketMutationVariables } from 'types/takeshape';

const ContactPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [success, setSuccess] = useState<string>();
  const [createTicket, { error }] = useMutation<CreateTicketMutationResponse, CreateTicketMutationVariables>(
    CreateTicketMutation
  );

  const onSubmit = useCallback(
    async (formValues: ContactForm, recaptchaToken: string) => {
      const { firstName, lastName, company, email, phoneNumber, message } = formValues;

      const result = await createTicket({
        variables: {
          email,
          message: `From: ${firstName} ${lastName}
Company: ${company}
Phone Number: ${phoneNumber}
${message}`,
          recaptchaToken
        }
      });
      const { id } = result.data.createTicket;
      if (id) {
        setSuccess(`Thank you for reaching out! Created ticket #${id}.`);
      }
    },
    [createTicket]
  );

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Contact' }}>
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
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();
  return {
    revalidate: pageRevalidationTtl,
    props: {
      navigation,
      footer
    }
  };
};

export default ContactPage;
