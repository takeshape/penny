module.exports = {
  ci: {
    collect: {
      settings: {
        configPath:
          process.env.LIGHTHOUSE_CONFIG === 'production'
            ? './.lighthouse/lighthouseConfigProduction.js'
            : './.lighthouse/lighthouseConfigPreview.js'
      }
    }
    // assert: {
    //   preset: 'lighthouse:recommended',
    //   assertions: {
    //     'categories:performance': ['error', { minScore: 0.9 }],
    //     'categories:accessibility': ['error', { minScore: 0.9 }],
    //     'categories:seo': ['error', { minScore: 0.9 }],
    //     'categories:best-practices': ['error', { minScore: 0.9 }],
    //     'categories:pwa': ['error', { minScore: 0.9 }],
    //     'color-contrast': 'off',
    //     'maskable-icon': 'off',
    //     'unsized-images': 'off',
    //     canonical: 'off',
    //     'is-crawlable': 'off',
    //     'unused-css-rules': 'off',
    //     'timing-budget': 'off',
    //     'csp-xss': 'off',
    //     'unused-javascript': 'off',
    //     'uses-responsive-images': 'off',
    //     'duplicated-javascript': { maxLength: 2 },
    //     'legacy-javascript': { maxLength: 2 },
    //     'uses-long-cache-ttl': { maxLength: 5 }
    //   }
    // }
  }
};
