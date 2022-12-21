import createBundleAnalyzer from '@next/bundle-analyzer';
import { createRequire } from 'module';
import withPwa from 'next-pwa';

const require = createRequire(import.meta.url);

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

/**
 * Add your own CSP here...
 */
// https://securityheaders.com
const ContentSecurityPolicy = `
  script-src *;
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
  webpack: (config, { webpack }) => {
    // Sentry tree shaking
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false
      })
    );

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
