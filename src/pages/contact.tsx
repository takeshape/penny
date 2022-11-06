import { Contact } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Contact' }}>
      <Contact
        text={{
          primary: 'Get in touch',
          secondary: "We'd be happy to hear from you!",
          button: 'Send'
        }}
      />
    </Layout>
  );
};

export default ContactPage;
