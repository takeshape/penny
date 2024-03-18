import { locale, siteDescription, siteName, siteUrl } from '@/config';
import { ApolloProvider } from '@/features/Apollo/ApolloProvider';
import { inter } from '@/styles/fonts';
import '@/styles/globals.css';
import { Provider as JotaiProvider } from 'jotai';
import type { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ReCaptchaProvider>
      <ApolloProvider>
        <JotaiProvider>
          <html lang={locale}>
            <body className={inter.variable}>{children}</body>
          </html>
        </JotaiProvider>
      </ApolloProvider>
    </ReCaptchaProvider>
  );
}
