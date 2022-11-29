import createBundleAnalyzer from '@next/bundle-analyzer';
import { createRequire } from 'module';
import withPwa from 'next-pwa';

const require = createRequire(import.meta.url);

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com/recaptcha/api.js https://www.gstatic.com;
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  object-src 'self' blob: data:;
  media-src 'none';
  img-src * blob: data:;
  connect-src *;
  font-src 'self';
  frame-src https://www.google.com;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // Opt-out of Google FLoC: https://amifloced.org/
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/fonts/inter-roman.var.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/fonts/inter-italic.var.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    dirs: ['src']
  },
  publicRuntimeConfig: {
    vercelEnv: process.env.VERCEL_ENV ?? 'development'
  },
  images: {
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1024],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.shopify.com'
      },
      {
        protocol: 'https',
        hostname: '**.voucherify.io'
      },
      {
        protocol: 'https',
        hostname: '**.takeshape.io'
      }
    ]
  },
  swcMinify: true,
  webpack: (config) => {
    // Unable to use the next-plugin-preval config directly for some reason, mjs?
    const rules = config.module?.rules;

    rules.push({
      test: /\.preval\.(t|j)sx?$/,
      loader: require.resolve('next-plugin-preval/loader')
    });

    return config;
  },
  experimental: {
    // Try to avoid throttling
    // workerThreads: false,
    // cpus: 1
  }
};

const withPlugins = (plugins, config) => () =>
  plugins.reduce((acc, plugin) => plugin(acc), {
    ...config
  });

export default withPlugins(
  [
    withBundleAnalyzer,
    withPwa({
      dest: 'public',
      disable: process.env.NODE_ENV === 'development'
    })
  ],
  nextConfig
);
