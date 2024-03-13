import { seo } from '@/config';
import { inter } from '@/styles/fonts';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: seo.defaultTitle,
  description: seo.description,
  alternates: {
    canonical: seo.canonical
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className="antialiased font-sans">{children}</main>
      </body>
    </html>
  );
}
