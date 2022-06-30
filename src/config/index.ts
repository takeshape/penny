export * from './auth';
export * from './ecommerce';
export * from './klaviyo';
export * from './lighthouse';
export * from './recaptcha';
export * from './revalidation';
export * from './seo';
export * from './shopify';
export * from './site';
export * from './takeshape';

/* Dev flags and vars */
export const vercelEnv = process.env.VERCEL_ENV ?? 'development';
export const isProduction = vercelEnv === 'production';
export const isTest = process.env.NODE_ENV === 'test';
export const isStorybook = Boolean(process.env.STORYBOOK);
export const isSsr = typeof window === 'undefined';
export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL ?? 'info';
export const commitSha = process.env.VERCEL_GITHUB_COMMIT_SHA ?? '';
