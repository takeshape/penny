import type { DefaultSeoProps } from 'next-seo';

/* API */
export const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
export const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;
export const takeshapeWebhookApiKey = process.env.TAKESHAPE_WEBHOOK_API_KEY;
export const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
export const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
export const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
export const shopifyShop = process.env.SHOPIFY_SHOP;
export const shopifyToken = process.env.SHOPIFY_TOKEN;

/* Nerd Stuff */
export const nodeEnv = process.env.NODE_ENV ?? 'development';
export const isProduction = nodeEnv === 'production';
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === 'undefined';
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? 'info';
export const commitSha = process.env.VERCEL_GITHUB_COMMIT_SHA ?? '';

/* Site Config and SEO */
export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'TakeShape Store';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell books.';
export const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';
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

/* Commerce */
// Lowercase matches Stripe
export const currencyList = ['cad', 'usd', 'aud', 'eur', 'gbp'] as const;
export const defaultCurrency = 'usd';

/* Cart */
export const cartLocalStorageKey = process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_KEY ?? 'cart';

/* Misc */
export const shipFrom = {
  name: 'KitchenSink',
  phone: '919-360-0095',
  addressLine1: '156 Kent St',
  postalCode: '11222',
  countryCode: 'US',
  cityLocality: 'Brooklyn',
  stateProvince: 'NY'
};
export const defaultKlaviyoListId = process.env.NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID;
