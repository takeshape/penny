const constants = require('../constants');

module.exports = {
  ci: {
    collect: {
      extends: 'lighthouse:no-pwa',
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
        onlyCategories: ['accessibility', 'best-practices', 'performance', 'seo'],
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
                budget: 500 // 0.5s
              }
            ],
            resourceSizes: [
              {
                resourceType: 'script',
                budget: 600 // 600k
              },
              {
                resourceType: 'total',
                budget: 1500 // 1500k
              }
            ],
            resourceCounts: [
              {
                resourceType: 'third-party',
                budget: 15
              }
            ]
          }
        ]
      }
    }
  }
};
