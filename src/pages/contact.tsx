import { pageRevalidationTtl } from 'config';
import { ContactWithGorgias } from 'features/Contact/ContactWithGorgias';
import { ContactWithZendesk } from 'features/Contact/ContactWithZendesk';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

const ContactPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const Contact = router.query.provider === 'zendesk' ? ContactWithZendesk : ContactWithGorgias;

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Contact' }}>
      <Contact />
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
