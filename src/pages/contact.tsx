import { pageRevalidationTtl } from 'config';
import { Contact } from 'features/Contact/Contact';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';

const ContactPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer }) => {
  return (
    <Layout footer={footer} seo={{ title: 'Contact' }}>
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
