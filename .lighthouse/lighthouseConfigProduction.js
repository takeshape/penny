const constants = require('./constants');

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'desktop',
    throttling: constants.throttling.desktopFIOS,
    screenEmulation: constants.screenEmulationMetrics.desktop,
    emulatedUserAgent: constants.userAgents.desktop,
    skipAudits: [
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
