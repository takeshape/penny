import { DefaultSeoProps } from 'next-seo';

/* API */
export const takeshapeApiUrl = process.env.NEXT_PUBLIC_TAKESHAPE_API_URL;
export const takeshapeAnonymousApiKey = process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY;
export const takeshapeWebhookApiKey = process.env.TAKESHAPE_WEBHOOK_API_KEY;
export const shopifyShop = process.env.SHOPIFY_SHOP;
export const shopifyToken = process.env.SHOPIFY_TOKEN;
export const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

/* Auth */
export const takeshapeAuthIssuer = process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER;
export const takeshapeAuthAudience = process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE;

/* Nerd Stuff */
export const vercelEnv = process.env.VERCEL_ENV ?? 'development';
export const isProduction = vercelEnv === 'production';
export const isTest = process.env.NODE_ENV === 'test';
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === 'undefined';
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? 'info';
export const commitSha = process.env.VERCEL_GITHUB_COMMIT_SHA ?? '';
export const homepageRevalidationTtl = process.env.NEXT_PUBLIC_HOMEPAGE_REVALIDATION_TTL
  ? Number(process.env.NEXT_PUBLIC_HOMEPAGE_REVALIDATION_TTL)
  : 60; // 1 minute
export const pageRevalidationTtl = process.env.NEXT_PUBLIC_PAGE_REVALIDATION_TTL
  ? Number(process.env.NEXT_PUBLIC_PAGE_REVALIDATION_TTL)
  : 300; // 5 minutes

/**
 * Lighthouse
 *
 * These are handles to use when responding to the `__lighthouse` dynamic path.
 */
export const lighthouseHandle = '__lighthouse';
export const lighthouseProductHandle = 'basic-tee-6-pack';
export const lighthouseCollectionHandle = 'men';

/* Site Config and SEO */
export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Deluxe ™️ Store';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell stuff.';
export const siteLogo = process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? '/images/logo.svg';
export const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';
export const seo: DefaultSeoProps = {
  titleTemplate: `%s - ${siteName}`,
  defaultTitle: siteName,
  description: siteDescription,
  canonical: siteUrl,
  additionalMetaTags: [
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: siteName
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'msapplication-config',
      content: '/icons/browserconfig.xml'
    },
    {
      name: 'msapplication-TileColor',
      content: '#2B5797'
    },
    {
      name: 'msapplication-tap-highlight',
      content: 'no'
    },
    {
      name: 'theme-color',
      content: '#000000'
    }
  ],
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
      href: '/favicon-512x512.png',
      sizes: '512x512'
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
export const showCurrencySelector = process.env.NEXT_PUBLIC_SHOW_CURRENCY_SELECTOR === 'false' ? false : true;
export const currencyList = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'] as const;
export const defaultCurrency = 'USD';

/* Cart */
export const cartLocalStorageKey = process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_KEY ?? 'cart';

/* Products */
export const defaultProductImage = {
  height: 480,
  url: '/images/default-product-image.webp',
  width: 480,
  altText: 'Default product image'
};
export const productReviewsPerPage = 3;

/* Collections */
export const collectionsPageSize = 12;

/* Product Options - LUTs to decorate options */
export const productOptions = {
  color: {
    white: { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400', colorBg: '#ffffff' },
    gray: { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400', colorBg: '#333333' },
    black: { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900', colorBg: '#111827' },
    red: { name: 'Red', class: 'bg-red-500', selectedClass: 'ring-red-300', colorBg: 'red' },
    'heather gray': { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400', colorBg: '#777777' }
  },
  size: {
    xxs: { name: 'XXS', description: 'The very smallest size' },
    xs: { name: 'XS', description: 'A fairly small size' },
    s: { name: 'S', description: 'A small size' },
    m: { name: 'M', description: 'Just about right for everybody' },
    l: { name: 'L', description: 'Getting bigger' },
    xl: { name: 'XL', description: 'And bigger...' },
    '2xl': { name: '2XL', description: 'Whoa, so big' },
    '3xl': { name: '3XL', description: 'No way!' }
  }
};

/* Checkout */
export const signedInCheckout = process.env.NEXT_PUBLIC_SIGNED_IN_CHECKOUT === 'true' ? true : false;

/* Misc */
export const defaultKlaviyoListId = process.env.NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID;
