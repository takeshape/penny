import { pageRevalidationTtl } from 'config';
import { Contact } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
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

export const getStaticProps = async () => {
  return {
    revalidate: pageRevalidationTtl
  };
};

export default ContactPage;
