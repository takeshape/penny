// see https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    // audits can be found here:
    // https://github.com/GoogleChrome/lighthouse/blob/eba2a4d19c5786dc37e993858ff4b663181f81e5/lighthouse-core/config/default-config.js#L174
    skipAudits: [
      'canonical', // for staging sites this will always be incorrect
      'maskable-icon',
      'valid-source-maps',
      'unsized-images',
      'offline-start-url'
    ],
    onlyCategories: ['accessibility']
  }
};
