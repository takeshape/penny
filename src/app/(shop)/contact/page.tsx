import { Contact } from '@/features/Contact/Contact';
import { Metadata } from 'next';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <Contact
      text={{
        primary: 'Get in touch',
        secondary: "We'd be happy to hear from you!",
        button: 'Send'
      }}
    />
  );
}
