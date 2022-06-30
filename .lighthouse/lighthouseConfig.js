// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md

const constants = require('./constants');

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'desktop',
    throttling: constants.throttling.desktopFIOS,
    screenEmulation: constants.screenEmulationMetrics.desktop,
    emulatedUserAgent: constants.userAgents.desktop,
    // audits can be found here:
    // https://github.com/GoogleChrome/lighthouse/blob/eba2a4d19c5786dc37e993858ff4b663181f81e5/lighthouse-core/config/default-config.js#L174
    skipAudits: [
      'canonical', // even when testing the production build, we still need to use the build url
      'is-crawlable', // vercel will send a x-robots-txt header to avoid crawling the build (non-canonical) url
      'color-contrast', // doesn't work well with designs
      'maskable-icon', // not helpful
      'unsized-images' // not helpful
    ],
    onlyCategories: ['accessibility', 'best-practices', 'performance', 'seo', 'pwa'],
    budgets: [
      {
        path: '/*',
        timings: [
          {
            metric: 'interactive',
            budget: 1000 // 1.0s
          },
          {
            metric: 'first-contentful-paint',
            budget: 200 // 0.2s
          },
          {
            metric: 'speed-index',
            budget: 300 // 0.3s
          }
        ],
        resourceSizes: [
          {
            resourceType: 'script',
            budget: 300 // 300k
          },
          {
            resourceType: 'total',
            budget: 1500 // 1500k
          }
        ],
        resourceCounts: [
          {
            resourceType: 'third-party',
            budget: 10
          }
        ]
      }
    ]
  }
};
