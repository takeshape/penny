import { assertEnv } from 'utils/env';

export const shopifyStorefrontUrl = assertEnv(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL);
export const shopifyStorefrontToken = assertEnv(process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN);
export const shopifyMultipassSecret = process.env.SHOPIFY_MULTIPASS_SECRET ?? '';
export const shopifyUseMultipass = process.env.NEXT_PUBLIC_SHOPIFY_USE_MULTIPASS === 'true';
export const shopifyCheckoutRedirectUrl = '{{origin}}';
