import type { DefaultSeoProps } from 'next-seo';

export const nodeEnv = process.env.NODE_ENV ?? 'development';
export const isProduction = nodeEnv === 'production';
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === 'undefined';
export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
export const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
export const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;
export const scope = process.env.NEXT_PUBLIC_AUTH0_SCOPE ?? 'openid profile email offline_access';
export const redirectUri = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI;
export const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
export const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;
export const takeshapeWebhookApiKey = process.env.TAKESHAPE_WEBHOOK_API_KEY;
export const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
export const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
export const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';

export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? 'info';

export const commitSha = process.env.VERCEL_GITHUB_COMMIT_SHA ?? '';

export const shipFrom = {
  name: 'KitchenSink',
  phone: '919-360-0095',
  addressLine1: '156 Kent St',
  postalCode: '11222',
  countryCode: 'US',
  cityLocality: 'Brooklyn',
  stateProvince: 'NY'
};

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'TakeShape Store';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell books.';

export const seo: DefaultSeoProps = {
  titleTemplate: `%s - ${siteName}`,
  defaultTitle: siteName,
  description: siteDescription,
  canonical: siteUrl,
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-192x192.png',
      sizes: '192x192'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-256x256.png',
      sizes: '256x256'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preload',
      href: '/fonts/inter-roman.var.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    },
    {
      rel: 'preload',
      href: '/fonts/inter-italic.var.woff2',
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: siteName
  }
};

export const currencyList = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'] as const;
export const defaultCurrency = 'USD';
