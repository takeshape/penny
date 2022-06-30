export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Deluxe ™️ Store';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'We sell stuff.';
export const siteLogo = process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? '/images/logo.svg';
export const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';
