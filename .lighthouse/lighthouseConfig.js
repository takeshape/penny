// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md

const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const throttling = {
  // These values partially align with WebPageTest's definition of "LTE".
  // https://github.com/WPO-Foundation/webpagetest/blob/master/www/settings/connectivity.ini.sample
  mobileLTE: {
    rttMs: 70,
    throughputKbps: 12 * 1024,
    requestLatencyMs: 70 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    cpuSlowdownMultiplier: 2
  },
  // These values partially align with WebPageTest's definition of "FIOS".
  desktopFIOS: {
    rttMs: 4,
    throughputKbps: 20 * 1024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 4 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 20 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 5 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR
  }
};

const IPHONE_EMULATION_METRICS = {
  mobile: true,
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  disabled: false
};

const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false
};

const screenEmulationMetrics = {
  mobile: IPHONE_EMULATION_METRICS,
  desktop: DESKTOP_EMULATION_METRICS
};

const MOTOG4_USERAGENT =
  'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Mobile Safari/537.36 Chrome-Lighthouse';
const DESKTOP_USERAGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Safari/537.36 Chrome-Lighthouse';

const userAgents = {
  mobile: MOTOG4_USERAGENT,
  desktop: DESKTOP_USERAGENT
};

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'desktop',
    throttling: throttling.desktopFIOS,
    screenEmulation: screenEmulationMetrics.desktop,
    emulatedUserAgent: userAgents.desktop,
    // audits can be found here:
    // https://github.com/GoogleChrome/lighthouse/blob/eba2a4d19c5786dc37e993858ff4b663181f81e5/lighthouse-core/config/default-config.js#L174
    skipAudits: [
      'canonical', // for preview, this will always be incorrect
      'is-crawlable', // for preview, always blocked
      'color-contrast', // doesn't work well with designs
      'maskable-icon',
      'valid-source-maps',
      'unsized-images',
      'offline-start-url'
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
