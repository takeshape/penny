// eslint-disable-next-line no-console
console.log('LIGHTHOUSE_CONFIG', process.env.LIGHTHOUSE_CONFIG);

module.exports = {
  ci: {
    collect: {
      extends: 'lighthouse:default',
      settings: {
        configPath:
          process.env.LIGHTHOUSE_CONFIG === 'production'
            ? './.lighthouse/lighthouseConfigProduction.js'
            : './.lighthouse/lighthouseConfig.js'
      }
    }
  }
};
