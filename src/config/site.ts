import { isProduction } from './dev';

export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Penny Ecommerce';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell stuff.';
export const siteLogo = process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? '/images/logo.png';
const defaultSiteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';
export const siteUrl =
  isProduction && process.env.NEXT_PUBLIC_CANONICAL_URL ? process.env.NEXT_PUBLIC_CANONICAL_URL : defaultSiteUrl;
export const siteContactEmail = process.env.NEXT_PUBLIC_SITE_CONTACT_EMAIL ?? '';
export const siteCopyrightText = 'Penny Ecommerce, Inc. Use as you like.';
