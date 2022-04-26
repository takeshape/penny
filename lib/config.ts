export const nodeEnv = process.env.NODE_ENV;
export const isProduction = nodeEnv === 'production';
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
export const siteUrl = process.env.VERCEL_URL ?? 'localhost:3000';

export const shipFrom = {
  name: 'KitchenSink',
  phone: '919-360-0095',
  addressLine1: '156 Kent St',
  postalCode: '11222',
  countryCode: 'US',
  cityLocality: 'Brooklyn',
  stateProvince: 'NY'
};
