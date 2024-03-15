import { locale, siteDescription, siteName, siteUrl } from '@/config';
import { ApolloProvider } from '@/features/Apollo/ApolloProvider_NEW';
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
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-192x192.png',
      sizes: '192x192'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-512x512.png',
      sizes: '512x512'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      url: '/apple-touch-icon.png',
      sizes: '180x180'
    }
  ],
  manifest: `${siteUrl}/manifest.json`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteName
  },
  themeColor: '#000000'
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
