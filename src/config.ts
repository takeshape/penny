import { assertEnv } from '@/lib/util/env';

// Dev Flags

export const vercelEnv = process.env.VERCEL_ENV ?? 'development';
export const isDevelopment = vercelEnv === 'development';
export const isProduction = vercelEnv === 'production';
export const isTest = process.env.NODE_ENV === 'test';
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === 'undefined';
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? 'info';
export const commitSha = process.env.VERCEL_GITHUB_COMMIT_SHA ?? '';

// Site Details

export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Penny Ecommerce';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell stuff.';
export const siteLogo = process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? '/images/logo.png';
const defaultSiteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
export const siteUrl =
  isProduction && process.env.NEXT_PUBLIC_CANONICAL_URL ? process.env.NEXT_PUBLIC_CANONICAL_URL : defaultSiteUrl;
export const siteContactEmail = process.env.NEXT_PUBLIC_SITE_CONTACT_EMAIL ?? '';
export const siteCopyrightText = 'Penny Ecommerce, Inc. Use as you like.';

// Auth

/**
 * OIDC for TakeShape API
 */
export const takeshapeAuthIssuer = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_ISSUER);
export const takeshapeAuthAudience = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_AUTH_AUDIENCE);
/**
 * 0 = no refetch
 */
export const sessionRefetchInterval = 0;
/**
 * Must be shorter than the 60 day customer access token
 */
export const sessionMaxAge = 14 * 24 * 60 * 60; // 14 days
export const googleClientId = process.env.GOOGLE_CLIENT_ID ?? '';
export const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET ?? '';

// Contact Form

export const contactProvider = process.env.NEXT_PUBLIC_CONTACT_PROVIDER ?? 'zendesk';

// Ecommerce

export const showCurrencySelector = true;
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

/* Collections */
export const collectionsPageSize = 12;

/**
 * Product Options
 * LUTs to decorate options
 */
export const productOptions: Record<string, Record<string, Record<string, string>>> = {
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

/**
 * Require a user to be signed-in to checkout.
 */
export const signedInCheckout = false;

// Klaviyo

export const defaultKlaviyoListId = assertEnv(process.env.NEXT_PUBLIC_DEFAULT_KLAVIYO_LIST_ID);

// Recaptcha

export const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

// Reviews

export const enableReviewsIo = true;
export const enableTrustpilot = false;
export const reviewsPerPage = 3;

// Sentry

export const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN ?? '';

// Shopify

export const shopifyStorefrontUrl = assertEnv(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL);
export const shopifyStorefrontToken = assertEnv(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN);
export const shopifyMultipassSecret = process.env.SHOPIFY_MULTIPASS_SECRET ?? '';
export const shopifyUseMultipass = process.env.NEXT_PUBLIC_SHOPIFY_USE_MULTIPASS === 'true';
export const shopifyCheckoutRedirectUrl = '{{origin}}';

// TakeShape

export const takeshapeApiUrl = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_API_URL);
export const takeshapeAnonymousApiKey = assertEnv(process.env.NEXT_PUBLIC_TAKESHAPE_ANONYMOUS_API_KEY);
export const takeshapeApiKey = process.env.TAKESHAPE_API_KEY ?? '';
